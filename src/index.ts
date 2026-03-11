#!/usr/bin/env node

/**
 * NVIDIA CLI - Access NVIDIA NIM Models from the Terminal
 * 
 * A NVIDIA-themed CLI tool for interacting with NVIDIA NIM models
 * featuring NVIDIA green color scheme and ASCII art branding.
 */

import { Command } from 'commander';
import chalk from 'chalk';
import { listModels, listCategories } from './commands/list';
import { chat, singleTurnChat } from './commands/chat';
import { embed, listEmbeddingModels } from './commands/embed';
import { vision, listVisionModels } from './commands/vision';
import { health } from './commands/health';
import { configShow, configSet, configClear } from './commands/config';

const program = new Command();

// NVIDIA ASCII Art Banner
const nvidiaBanner = `
${chalk.green(' _   _  ____  ____  ___  ____  _____  ____  ____ ')}
${chalk.green('( )_( )(  _ \\(  __)/ __)(  _ \\(  _  )(  _ \\(  __)')}
${chalk.green(' ) _ (  )   / ) _)( (__  )   / )(_)(  )   / ) _ ')}
${chalk.green('(_) (_)(__\\_)(____)\\___)(__\\_)(_____)(__\\_)(____)')}
${chalk.green('                                                 ')}
`;

const NVIDIA_GREEN = '#76B900';

program
  .name('nvidia-cli')
  .description(`${nvidiaBanner}${chalk.green('Access NVIDIA NIM Models from the Terminal')}`)
  .version('1.0.0', '-v, --version', 'Display version number');

// List command
program
  .command('list')
  .description('List all available NVIDIA models')
  .option('-c, --category <category>', 'Filter by category (llm, vlm, embedding, ocr, asr, tts, etc.)')
  .option('--categories', 'List all available categories')
  .action((options) => {
    console.log(nvidiaBanner);
    if (options.categories) {
      listCategories();
    } else {
      listModels(options.category);
    }
  });

// Chat command
program
  .command('chat <model-id>')
  .description('Start an interactive chat session with a model')
  .option('-s, --system <message>', 'System message to set behavior')
  .option('-p, --prompt <message>', 'Single prompt (non-interactive mode)')
  .action((modelId, options) => {
    console.log(nvidiaBanner);
    if (options.prompt) {
      singleTurnChat(modelId, options.prompt, options.system);
    } else {
      chat(modelId, options.system);
    }
  });

// Embed command
program
  .command('embed <text>')
  .description('Generate embeddings for text')
  .option('-m, --model <model-id>', 'Specific embedding model to use')
  .option('-f, --format <format>', 'Output format: json, vector, or stats (default: stats)')
  .action((text, options) => {
    console.log(nvidiaBanner);
    embed(text, options.model, options.format);
  });

program
  .command('embeddings')
  .description('List available embedding models')
  .action(() => {
    console.log(nvidiaBanner);
    listEmbeddingModels();
  });

// Vision command
program
  .command('vision <model-id> <image-url>')
  .description('Analyze an image using vision-language models')
  .option('-p, --prompt <question>', 'Question to ask about the image')
  .action((modelId, imageUrl, options) => {
    console.log(nvidiaBanner);
    vision(modelId, imageUrl, options.prompt);
  });

program
  .command('vision-models')
  .description('List available vision-language models')
  .action(() => {
    console.log(nvidiaBanner);
    listVisionModels();
  });

// Health command
program
  .command('health')
  .description('Check API status and validate API key')
  .action(() => {
    health();
  });

// Config command with subcommands
const configCommand = program
  .command('config')
  .description('Manage configuration');

configCommand
  .action(() => {
    console.log(nvidiaBanner);
    configShow();
  });

configCommand
  .command('set')
  .description('Set NVIDIA API key')
  .action(() => {
    configSet();
  });

configCommand
  .command('clear')
  .description('Clear NVIDIA API key')
  .action(() => {
    configClear();
  });

// Show help by default with banner
if (process.argv.length <= 2) {
  console.log(nvidiaBanner);
  console.log(chalk.cyan('Quick Start:'));
  console.log(chalk.white('  1. Set your API key: ') + chalk.green('nvidia-cli config set'));
  console.log(chalk.white('  2. List models: ') + chalk.green('nvidia-cli list'));
  console.log(chalk.white('  3. Start chatting: ') + chalk.green('nvidia-cli chat nvidia/llama-3_1-nemotron-nano-8b-v1'));
  console.log();
  console.log(chalk.cyan('Commands:'));
  console.log(chalk.gray('─'.repeat(60)));
  program.commands.forEach(cmd => {
    console.log(`  ${chalk.green(cmd.name())}  ${chalk.gray(cmd.description())}`);
  });
  console.log();
  console.log(chalk.cyan('Run ') + chalk.white('nvidia-cli --help') + chalk.cyan(' for more information.\n'));
  process.exit(0);
}

program.parse();
