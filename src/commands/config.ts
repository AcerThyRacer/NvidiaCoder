/**
 * Config Command - Manage API key configuration
 */

import chalk from 'chalk';
import * as readline from 'readline';
import { getApiKey, setApiKey, clearApiKey, hasApiKey, getConfigPath } from '../utils/config';

export function configShow(): void {
  console.log(chalk.green('\n╔════════════════════════════════════════════════════════╗'));
  console.log(chalk.green('║') + chalk.bold('  NVIDIA CLI Configuration') + chalk.green('║'));
  console.log(chalk.green('╚════════════════════════════════════════════════════════╝'));
  console.log();

  const apiKey = getApiKey();
  
  if (apiKey) {
    const maskedKey = `${apiKey.substring(0, 8)}...${apiKey.substring(apiKey.length - 4)}`;
    console.log(`${chalk.green('✓ API Key:')} ${chalk.cyan(maskedKey)}`);
    console.log(`${chalk.cyan('Config file:')} ${chalk.gray(getConfigPath())}`);
  } else {
    console.log(chalk.yellow('⚠ API Key: Not configured'));
    console.log(chalk.cyan('\nSet your API key with:'));
    console.log(chalk.white('  nvidia-cli config set'));
    console.log(chalk.gray('\nOr set the NVIDIA_API_KEY environment variable.'));
  }
  
  console.log();
}

export function configSet(): void {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log(chalk.green('\n╔════════════════════════════════════════════════════════╗'));
  console.log(chalk.green('║') + chalk.bold('  Configure NVIDIA API Key') + chalk.green('║'));
  console.log(chalk.green('╚════════════════════════════════════════════════════════╝'));
  console.log();
  console.log(chalk.cyan('Get your API key from:'));
  console.log(chalk.white('https://build.nvidia.com/settings/api-key'));
  console.log();

  rl.question(chalk.green('Enter your NVIDIA API Key: '), (apiKey) => {
    if (!apiKey.trim()) {
      console.log(chalk.red('\nError: API key cannot be empty.\n'));
      rl.close();
      return;
    }

    setApiKey(apiKey.trim());
    console.log(chalk.green('\n✓ API key saved successfully!'));
    console.log(chalk.gray(`Config file: ${getConfigPath()}\n`));
    console.log(chalk.cyan('Test your configuration with:'));
    console.log(chalk.white('  nvidia-cli health\n'));
    
    rl.close();
  });
}

export function configClear(): void {
  if (!hasApiKey()) {
    console.log(chalk.yellow('\nNo API key configured.\n'));
    return;
  }

  clearApiKey();
  console.log(chalk.green('\n✓ API key cleared successfully.\n'));
  console.log(chalk.cyan('Set a new API key with:'));
  console.log(chalk.white('  nvidia-cli config set\n'));
}
