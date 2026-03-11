/**
 * List Command - Display all available NVIDIA models
 */

import chalk from 'chalk';
import { nvidiaModels, ModelCategory, getAllCategories } from '../models/nvidia-models';

export function listModels(category?: string): void {
  if (category) {
    const filteredModels = nvidiaModels.filter(
      m => m.category === category.toLowerCase()
    );
    
    if (filteredModels.length === 0) {
      console.log(chalk.yellow(`\nNo models found in category "${category}"`));
      console.log(chalk.cyan('\nAvailable categories:'));
      getAllCategories().forEach(cat => {
        console.log(`  - ${chalk.green(cat)}`);
      });
      return;
    }
    
    console.log(chalk.green(`\n${chalk.bold(category.toUpperCase())} Models (${filteredModels.length}):`));
    console.log(chalk.gray('─'.repeat(80)));
    
    filteredModels.forEach(model => {
      printModel(model);
    });
  } else {
    // List all models grouped by category
    const categories = getAllCategories();
    
    console.log(chalk.green(`\nAll NVIDIA Models (${nvidiaModels.length} total):`));
    console.log(chalk.gray('─'.repeat(80)));
    
    categories.forEach(cat => {
      const models = nvidiaModels.filter(m => m.category === cat);
      console.log(chalk.cyan(`\n${chalk.bold(cat.toUpperCase())} (${models.length}):`));
      console.log(chalk.gray('─'.repeat(80)));
      
      models.forEach(model => {
        printModel(model);
      });
    });
  }
}

function printModel(model: any): void {
  console.log(`\n  ${chalk.green('●')} ${chalk.bold(model.name)}`);
  console.log(`    ${chalk.cyan('ID:')} ${model.id}`);
  console.log(`    ${chalk.cyan('Type:')} ${model.type}`);
  if (model.parameters) {
    console.log(`    ${chalk.cyan('Parameters:')} ${model.parameters}`);
  }
  if (model.languages) {
    console.log(`    ${chalk.cyan('Languages:')} ${model.languages.join(', ')}`);
  }
  console.log(`    ${chalk.gray(model.description)}`);
}

export function listCategories(): void {
  console.log(chalk.green('\nAvailable Model Categories:'));
  console.log(chalk.gray('─'.repeat(80)));
  
  const categories = getAllCategories();
  categories.forEach(cat => {
    const count = nvidiaModels.filter(m => m.category === cat).length;
    console.log(`  ${chalk.green('●')} ${chalk.bold(cat)} ${chalk.gray(`(${count} models)`)}`);
  });
}
