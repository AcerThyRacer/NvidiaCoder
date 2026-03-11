# NVIDIA CLI

<div align="center">

```
 _   _  ____  ____  ___  ____  _____  ____  ____ 
( )_( )(  _ \(  __)/ __)(  _ \(  _  )(  _ \(  __)
 ) _ (  )   / ) _)( (__  )   / )(_)(  )   / ) _ 
(_) (_)(__\_)(____)\___)(__\_)(_____)(__\_)(____)
```

**Access NVIDIA NIM Models from the Terminal**

[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20-green)](https://nodejs.org/)
[![Models](https://img.shields.io/badge/Models-89%20NVIDIA-brightgreen)](https://build.nvidia.com/models)

</div>

---

## Features

- 🎨 **NVIDIA-Themed Interface** - NVIDIA green (#76B900) color scheme with ASCII art branding
- 🔐 **Secure API Key Management** - Environment variable or config file storage
- 🤖 **89 NVIDIA Models** - Access to ALL NVIDIA NIM models (no third-party models)
- 💬 **Interactive Chat** - Multi-turn conversations with streaming support
- 🔍 **Embeddings** - Generate vector embeddings for text
- 👁️ **Vision Models** - Image and video understanding with VLMs
- ⚡ **Fast & Lightweight** - Pure TypeScript, minimal dependencies

---

## Installation

### Prerequisites

- Node.js 20+
- npm or yarn
- NVIDIA API Key (get it free from [build.nvidia.com](https://build.nvidia.com/settings/api-key))

### Quick Install

```bash
# Clone the repository
git clone <repository-url>
cd Nvidia

# Install dependencies
npm install

# Build the project
npm run build

# Make CLI executable (optional)
npm link
```

---

## Setup

### 1. Get Your NVIDIA API Key

1. Visit [https://build.nvidia.com/settings/api-key](https://build.nvidia.com/settings/api-key)
2. Sign in with your NVIDIA account (or create one)
3. Click "Generate API Key"
4. Copy and securely store your API key

### 2. Configure API Key

**Option A: Interactive Setup (Recommended)**

```bash
nvidia-cli config set
```

**Option B: Environment Variable**

```bash
export NVIDIA_API_KEY="your-api-key-here"
```

Add to your `~/.bashrc` or `~/.zshrc` for persistence.

**Option C: Direct Config File**

Edit `~/.nvidia-cli/config.json`:

```json
{
  "apiKey": "your-api-key-here"
}
```

### 3. Verify Configuration

```bash
nvidia-cli health
```

---

## Usage

### Basic Commands

```bash
# Show help with NVIDIA banner
nvidia-cli

# List all available NVIDIA models
nvidia-cli list

# List models by category
nvidia-cli list --category llm
nvidia-cli list --category vlm
nvidia-cli list --category embedding

# List all categories
nvidia-cli list --categories
```

### Chat with Models

**Interactive Chat Mode:**

```bash
nvidia-cli chat nvidia/llama-3_1-nemotron-nano-8b-v1
```

**Single Prompt Mode:**

```bash
nvidia-cli chat nvidia/llama-3_1-nemotron-nano-8b-v1 --prompt "Explain quantum computing"
```

**With Custom System Message:**

```bash
nvidia-cli chat nvidia/llama-3_1-nemotron-nano-8b-v1 \
  --system "You are a helpful coding assistant." \
  --prompt "Write a Python function to sort a list"
```

### Generate Embeddings

```bash
# Generate embedding with stats
nvidia-cli embed "Machine learning is a subset of AI"

# Specify model
nvidia-cli embed "Text to embed" --model nvidia/nv-embedqa-e5-v5

# Output as JSON
nvidia-cli embed "Text to embed" --format json

# Output as vector
nvidia-cli embed "Text to embed" --format vector
```

### Vision-Language Models

```bash
# Analyze an image
nvidia-cli vision nvidia/cosmos-reason2-8b "https://example.com/image.jpg"

# With custom prompt
nvidia-cli vision nvidia/cosmos-reason1-7b "https://example.com/image.jpg" \
  --prompt "What objects are in this image?"
```

### Configuration Management

```bash
# Show current config
nvidia-cli config

# Set API key
nvidia-cli config set

# Clear API key
nvidia-cli config clear
```

### Health Check

```bash
nvidia-cli health
```

---

## Available Models

### Model Categories

- **LLM** (11 models) - Large Language Models for chat and completion
- **VLM** (5 models) - Vision-Language Models for image/video understanding
- **Video Generation** (3 models) - Physics-aware video generation
- **Embedding** (10 models) - Text and code embeddings
- **Reranker** (4 models) - Search result reranking
- **Object Detection** (13 models) - Image object detection
- **OCR** (5 models) - Optical character recognition
- **ASR** (9 models) - Automatic speech recognition
- **TTS** (4 models) - Text-to-speech
- **Translation** (3 models) - Language translation
- **Safety** (6 models) - Content safety and guardrails
- **Reward** (1 model) - RLHF reward models
- **OpenUSD** (3 models) - 3D asset tools
- **Healthcare** (4 models) - Medical and chemistry models
- **Weather** (2 models) - Weather forecasting
- **Route Optimization** (1 model) - Complex routing
- **Other** (15 models) - Specialized models

### Popular Models

| Model Name | Model ID | Type | Parameters |
|------------|----------|------|------------|
| Llama-3.3-Nemotron-Super-49B-v1.5 | `nvidia/llama-3_3-nemotron-super-49b-v1_5` | Chat | 49B |
| Llama-3.1-Nemotron-Ultra-253B-v1 | `nvidia/llama-3_1-nemotron-ultra-253b-v1` | Chat | 253B |
| Nemotron-3-Nano-30B-A3B | `nvidia/nemotron-3-nano-30b-a3b` | Chat | 30B MoE |
| Cosmos-Reason2-8B | `nvidia/cosmos-reason2-8b` | VLM | 8B |
| NV-EmbedQA-E5-v5 | `nvidia/nv-embedqa-e5-v5` | Embedding | - |

**Full list:** Run `nvidia-cli list` to see all 89 NVIDIA models.

---

## Examples

### Example 1: Coding Assistant

```bash
nvidia-cli chat nvidia/llama-3_1-nemotron-nano-8b-v1 \
  --system "You are an expert TypeScript developer."
```

Then ask:
```
You: Write a function to reverse a linked list
Assistant: Here's a TypeScript implementation...
```

### Example 2: Image Analysis

```bash
nvidia-cli vision nvidia/cosmos-reason2-8b \
  "https://example.com/chart.png" \
  --prompt "What insights can you derive from this chart?"
```

### Example 3: Text Embeddings

```bash
nvidia-cli embed "The quick brown fox jumps over the lazy dog" \
  --model nvidia/nv-embedqa-e5-v5 \
  --format json > embeddings.json
```

### Example 4: Multilingual Translation

```bash
nvidia-cli chat nvidia/riva-translate-4b-instruct-v1_1 \
  --prompt "Translate 'Hello, how are you?' to Spanish"
```

---

## API Reference

### Chat Completion API

```typescript
import { apiClient } from './utils/api';

const response = await apiClient.chatCompletion({
  model: 'nvidia/llama-3_1-nemotron-nano-8b-v1',
  messages: [
    { role: 'system', content: 'You are helpful.' },
    { role: 'user', content: 'Hello!' }
  ],
  temperature: 0.7,
  max_tokens: 1024
});
```

### Embeddings API

```typescript
import { apiClient } from './utils/api';

const embeddings = await apiClient.embeddings({
  model: 'nvidia/nv-embedqa-e5-v5',
  input: 'Text to embed',
  encoding_format: 'float'
});
```

---

## Troubleshooting

### "Invalid API key" Error

1. Verify your API key is correct
2. Run `nvidia-cli config set` to reconfigure
3. Check your API key at [build.nvidia.com](https://build.nvidia.com/settings/api-key)

### "Model not found" Error

- Run `nvidia-cli list` to see available models
- Ensure you're using the exact model ID (case-sensitive)
- Some models may require additional permissions

### Rate Limit Errors

- You've exceeded your API quota
- Wait before making more requests
- Check your quota at [build.nvidia.com](https://build.nvidia.com/settings)

### Network Errors

- Check your internet connection
- NVIDIA API servers may be temporarily unavailable
- Try again later

---

## Project Structure

```
nvidia-cli/
├── src/
│   ├── index.ts              # Main CLI entry point
│   ├── models/
│   │   └── nvidia-models.ts  # All 89 NVIDIA models database
│   ├── utils/
│   │   ├── api.ts            # NVIDIA API client
│   │   └── config.ts         # Configuration management
│   └── commands/
│       ├── list.ts           # List models command
│       ├── chat.ts           # Chat command
│       ├── embed.ts          # Embeddings command
│       ├── vision.ts         # Vision models command
│       ├── health.ts         # Health check command
│       └── config.ts         # Config management
├── package.json
├── tsconfig.json
└── README.md
```

---

## Development

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Build for production
npm run build

# Run built version
npm start

# Clean build artifacts
npm run clean
```

---

## Resources

- **Model Catalog:** [build.nvidia.com/models](https://build.nvidia.com/models)
- **API Documentation:** [docs.api.nvidia.com/nim](https://docs.api.nvidia.com/nim)
- **API Key Management:** [build.nvidia.com/settings/api-key](https://build.nvidia.com/settings/api-key)
- **Quickstart Guide:** [docs.api.nvidia.com/nim/docs/api-quickstart](https://docs.api.nvidia.com/nim/docs/api-quickstart)

---

## License

MIT License - See LICENSE file for details

---

## Disclaimer

This CLI is a community tool and is not officially supported by NVIDIA. All models are subject to NVIDIA's terms of service and licensing agreements.

---

<div align="center">

**Built with ❤️ using NVIDIA NIM**

[Report Issue](https://github.com/your-repo/nvidia-cli/issues) • [Request Feature](https://github.com/your-repo/nvidia-cli/issues)

</div>
