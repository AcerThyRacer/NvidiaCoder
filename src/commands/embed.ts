/**
 * Embed Command - Generate embeddings using NVIDIA models
 */

import chalk from 'chalk';
import ora from 'ora';
import { apiClient } from '../utils/api';
import { getModelsByCategory } from '../models/nvidia-models';
import { hasApiKey } from '../utils/config';

export async function embed(
  text: string,
  modelId?: string,
  outputFormat: 'json' | 'vector' | 'stats' = 'stats'
): Promise<void> {
  if (!hasApiKey()) {
    console.log(chalk.red('\nError: NVIDIA API key not configured.'));
    console.log(chalk.cyan('Run `nvidia-cli config set` to configure your API key.\n'));
    process.exit(1);
  }

  const embeddingModels = getModelsByCategory('embedding');
  
  let model = modelId 
    ? embeddingModels.find(m => m.id === modelId)
    : embeddingModels[0]; // Default to first embedding model

  if (!model) {
    console.log(chalk.red(`\nError: Embedding model "${modelId}" not found.`));
    console.log(chalk.cyan('Available embedding models:'));
    embeddingModels.forEach(m => {
      console.log(`  - ${chalk.green(m.id)}`);
    });
    console.log();
    process.exit(1);
  }

  const spinner = ora('Generating embedding...').start();

  try {
    const response = await apiClient.embeddings({
      model: model.id,
      input: text,
      encoding_format: 'float'
    });

    spinner.stop();

    const embedding = response.data[0].embedding;

    if (outputFormat === 'json') {
      console.log(JSON.stringify({
        model: model.id,
        embedding,
        usage: response.usage
      }, null, 2));
    } else if (outputFormat === 'vector') {
      console.log(chalk.cyan('\nEmbedding Vector:'));
      console.log(chalk.gray('[') + embedding.map(n => n.toFixed(6)).join(', ') + chalk.gray(']'));
    } else {
      // Stats format (default)
      console.log(`\n${chalk.green('✓')} Embedding generated successfully`);
      console.log(chalk.gray('─'.repeat(60)));
      console.log(`${chalk.cyan('Model:')} ${model.name}`);
      console.log(`${chalk.cyan('Dimensions:')} ${chalk.bold(embedding.length.toString())}`);
      console.log(`${chalk.cyan('Input tokens:')} ${chalk.bold(response.usage.prompt_tokens.toString())}`);
      console.log(`${chalk.cyan('Vector preview:')} ${chalk.gray(
        embedding.slice(0, 10).map(n => n.toFixed(4)).join(', ') + '...'
      )}`);
      console.log();
    }
  } catch (error) {
    spinner.stop();
    console.log(chalk.red(`\nError: ${(error as Error).message}\n`));
    process.exit(1);
  }
}

export function listEmbeddingModels(): void {
  const models = getModelsByCategory('embedding');
  
  console.log(chalk.green('\nAvailable Embedding Models:'));
  console.log(chalk.gray('─'.repeat(80)));
  
  models.forEach(model => {
    console.log(`\n  ${chalk.green('●')} ${chalk.bold(model.name)}`);
    console.log(`    ${chalk.cyan('ID:')} ${model.id}`);
    if (model.languages) {
      console.log(`    ${chalk.cyan('Languages:')} ${model.languages.join(', ')}`);
    }
    console.log(`    ${chalk.gray(model.description)}`);
  });
  console.log();
}
