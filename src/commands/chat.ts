/**
 * Chat Command - Interactive chat with NVIDIA models
 */

import chalk from 'chalk';
import * as readline from 'readline';
import ora from 'ora';
import { apiClient, ChatMessage } from '../utils/api';
import { getModelById } from '../models/nvidia-models';
import { hasApiKey } from '../utils/config';

export async function chat(modelId: string, systemMessage?: string): Promise<void> {
  if (!hasApiKey()) {
    console.log(chalk.red('\nError: NVIDIA API key not configured.'));
    console.log(chalk.cyan('Run `nvidia-cli config set` to configure your API key.\n'));
    process.exit(1);
  }

  const model = getModelById(modelId);
  if (!model) {
    console.log(chalk.red(`\nError: Model "${modelId}" not found.`));
    console.log(chalk.cyan('Run `nvidia-cli list` to see available models.\n'));
    process.exit(1);
  }

  if (model.type !== 'chat' && model.type !== 'completion') {
    console.log(chalk.red(`\nError: Model "${model.name}" does not support chat.`));
    console.log(chalk.cyan('Please use a chat or completion model.\n'));
    process.exit(1);
  }

  console.log(chalk.green('\n╔════════════════════════════════════════════════════════╗'));
  console.log(chalk.green('║') + chalk.bold('  NVIDIA Chat Interface') + chalk.green('║'));
  console.log(chalk.green('╚════════════════════════════════════════════════════════╝'));
  console.log(`\nModel: ${chalk.cyan(model.name)} (${model.parameters || 'N/A'})`);
  console.log(chalk.gray('─'.repeat(60)));
  console.log(chalk.yellow('Type "exit" or "quit" to end the conversation\n'));

  const messages: ChatMessage[] = [];
  
  if (systemMessage) {
    messages.push({
      role: 'system',
      content: systemMessage
    });
  } else {
    messages.push({
      role: 'system',
      content: 'You are a helpful AI assistant powered by NVIDIA NIM.'
    });
  }

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const chat = () => {
    rl.question(chalk.green('\nYou: '), async (userInput) => {
      if (userInput.toLowerCase() === 'exit' || userInput.toLowerCase() === 'quit') {
        console.log(chalk.cyan('\nGoodbye!\n'));
        rl.close();
        return;
      }

      if (!userInput.trim()) {
        chat();
        return;
      }

      const userMessage = userInput.trim();
      const spinner = ora('Thinking...').start();

      try {
        // Only add user message to history after successful API call
        const tempMessages: ChatMessage[] = [...messages, { role: 'user', content: userMessage }];
        
        const response = await apiClient.chatCompletion({
          model: model.id,
          messages: tempMessages,
          temperature: 0.7,
          max_tokens: 1024
        });

        spinner.stop();

        const assistantMessage = response.choices[0].message.content;
        // Commit both messages to history only on success
        messages.push({ role: 'user', content: userMessage });
        messages.push({ role: 'assistant', content: assistantMessage });

        console.log(`\n${chalk.cyan('Assistant:')} ${assistantMessage}`);
      } catch (error) {
        spinner.stop();
        console.log(chalk.red(`\nError: ${(error as Error).message}\n`));
        // User message was never added to history, so conversation remains clean
      }

      chat();
    });
  };

  chat();
}

export async function singleTurnChat(
  modelId: string,
  prompt: string,
  systemMessage?: string
): Promise<void> {
  if (!hasApiKey()) {
    console.log(chalk.red('\nError: NVIDIA API key not configured.'));
    console.log(chalk.cyan('Run `nvidia-cli config set` to configure your API key.\n'));
    process.exit(1);
  }

  const model = getModelById(modelId);
  if (!model) {
    console.log(chalk.red(`\nError: Model "${modelId}" not found.`));
    console.log(chalk.cyan('Run `nvidia-cli list` to see available models.\n'));
    process.exit(1);
  }

  const messages: ChatMessage[] = [
    {
      role: 'system',
      content: systemMessage || 'You are a helpful AI assistant powered by NVIDIA NIM.'
    },
    {
      role: 'user',
      content: prompt
    }
  ];

  const spinner = ora('Generating response...').start();

  try {
    const response = await apiClient.chatCompletion({
      model: model.id,
      messages,
      temperature: 0.7,
      max_tokens: 1024
    });

    spinner.stop();

    console.log(`\n${chalk.cyan('Response:')} ${response.choices[0].message.content}\n`);
  } catch (error) {
    spinner.stop();
    console.log(chalk.red(`\nError: ${(error as Error).message}\n`));
    process.exit(1);
  }
}
