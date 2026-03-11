/**
 * Vision Command - Vision-language models for image/video understanding
 */

import chalk from 'chalk';
import ora from 'ora';
import { apiClient, VisionMessage } from '../utils/api';
import { getModelById, getModelsByCategory } from '../models/nvidia-models';
import { hasApiKey } from '../utils/config';

export async function vision(
  modelId: string,
  imageUrl: string,
  prompt?: string
): Promise<void> {
  if (!hasApiKey()) {
    console.log(chalk.red('\nError: NVIDIA API key not configured.'));
    console.log(chalk.cyan('Run `nvidia-cli config set` to configure your API key.\n'));
    process.exit(1);
  }

  const model = getModelById(modelId);
  if (!model) {
    console.log(chalk.red(`\nError: Model "${modelId}" not found.`));
    console.log(chalk.cyan('Run `nvidia-cli list --category vlm` to see vision models.\n'));
    process.exit(1);
  }

  if (model.category !== 'vlm') {
    console.log(chalk.red(`\nError: Model "${model.name}" is not a vision model.`));
    console.log(chalk.cyan('Please use a VLM (Vision-Language Model).\n'));
    process.exit(1);
  }

  const question = prompt || 'What is in this image?';

  const messages: VisionMessage[] = [
    {
      role: 'user',
      content: [
        {
          type: 'text',
          text: question
        },
        {
          type: 'image_url',
          image_url: {
            url: imageUrl
          }
        }
      ]
    }
  ];

  const spinner = ora('Analyzing image...').start();

  try {
    const response = await apiClient.visionCompletion(model.id, messages);

    spinner.stop();

    console.log(`\n${chalk.cyan('Analysis:')} ${response.choices[0].message.content}\n`);
  } catch (error) {
    spinner.stop();
    console.log(chalk.red(`\nError: ${(error as Error).message}\n`));
    process.exit(1);
  }
}

export function listVisionModels(): void {
  const models = getModelsByCategory('vlm');
  
  console.log(chalk.green('\nAvailable Vision-Language Models:'));
  console.log(chalk.gray('─'.repeat(80)));
  
  models.forEach(model => {
    console.log(`\n  ${chalk.green('●')} ${chalk.bold(model.name)}`);
    console.log(`    ${chalk.cyan('ID:')} ${model.id}`);
    console.log(`    ${chalk.gray(model.description)}`);
  });
  console.log();
}
