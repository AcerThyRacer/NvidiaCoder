/**
 * Health Command - Check API status and validate API key
 */

import chalk from 'chalk';
import ora from 'ora';
import { apiClient } from '../utils/api';
import { hasApiKey, getApiKey } from '../utils/config';
import { totalNvidiaModels } from '../models/nvidia-models';

export async function health(): Promise<void> {
  console.log(chalk.green('\n╔════════════════════════════════════════════════════════╗'));
  console.log(chalk.green('║') + chalk.bold('  NVIDIA NIM Health Check') + chalk.green(''.padEnd(31)) + chalk.green('║'));
  console.log(chalk.green('╚════════════════════════════════════════════════════════╝'));
  console.log();

  // Check API key configuration
  if (!hasApiKey()) {
    console.log(chalk.red('✗ API Key: Not configured'));
    console.log(chalk.yellow('\nTo configure your API key:'));
    console.log(chalk.cyan('  nvidia-cli config set'));
    console.log(chalk.gray('\nOr set the NVIDIA_API_KEY environment variable.\n'));
    process.exit(1);
  }

  const apiKey = getApiKey();
  const maskedKey = apiKey ? `${apiKey.substring(0, 8)}...${apiKey.substring(apiKey.length - 4)}` : 'unknown';
  console.log(chalk.green('✓ API Key: Configured'), chalk.gray(`(${maskedKey})`));

  // Check API connectivity
  const spinner = ora('Checking API connectivity...').start();

  try {
    await apiClient.healthCheck();
    spinner.succeed('API connectivity: OK');

    // Try to list models
    const modelsSpinner = ora('Fetching available models...').start();
    
    try {
      const models = await apiClient.listModels();
      modelsSpinner.succeed(`Models available: ${models.length} models`);
    } catch (error) {
      modelsSpinner.fail('Failed to fetch models');
      console.log(chalk.yellow(`  ${(error as Error).message}`));
    }

    console.log();
    console.log(chalk.gray('─'.repeat(60)));
    console.log(chalk.cyan('System Status:'));
    console.log(`  NVIDIA NIM API: ${chalk.green('Operational')}`);
    console.log(`  Total NVIDIA Models: ${chalk.bold(totalNvidiaModels.toString())}`);
    console.log(`  API Endpoint: ${chalk.gray('https://integrate.api.nvidia.com/v1/')}`);
    console.log();
  } catch (error) {
    spinner.fail('API connectivity: Failed');
    console.log(chalk.red(`\nError: ${(error as Error).message}\n`));
    process.exit(1);
  }
}
