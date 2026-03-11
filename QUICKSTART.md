# NVIDIA CLI - Quick Start Guide

## 🚀 Installation (3 steps)

```bash
# 1. Install dependencies
npm install

# 2. Build the project
npm run build

# 3. Make CLI globally available (optional)
npm link
```

## 🔑 Setup API Key

```bash
# Interactive setup (recommended)
nvidia-cli config set

# Or use environment variable
export NVIDIA_API_KEY="your-api-key-here"
```

**Get your API key:** https://build.nvidia.com/settings/api-key

## 📋 Basic Commands

```bash
# Show help
nvidia-cli

# List all models
nvidia-cli list

# List by category
nvidia-cli list --category llm
nvidia-cli list --category vlm
nvidia-cli list --category embedding

# Check health
nvidia-cli health
```

## 💬 Chat Example

```bash
# Interactive chat
nvidia-cli chat nvidia/llama-3_1-nemotron-nano-8b-v1

# Single prompt
nvidia-cli chat nvidia/llama-3_1-nemotron-nano-8b-v1 \
  --prompt "Explain quantum computing"
```

## 🔍 Embeddings Example

```bash
# Generate embedding
nvidia-cli embed "Machine learning is amazing"

# With specific model
nvidia-cli embed "Text to embed" \
  --model nvidia/nv-embedqa-e5-v5 \
  --format json
```

## 👁️ Vision Example

```bash
# Analyze image
nvidia-cli vision nvidia/cosmos-reason2-8b \
  "https://example.com/image.jpg" \
  --prompt "What's in this image?"
```

## 📊 Model Categories (88 total models)

- **LLM** (11) - Large Language Models
- **VLM** (5) - Vision-Language Models
- **Embedding** (10) - Text embeddings
- **OCR** (5) - Text extraction
- **ASR** (9) - Speech recognition
- **TTS** (3) - Text-to-speech
- **Translation** (3) - Language translation
- **Object Detection** (13) - Image detection
- **And more...**

Run `nvidia-cli list --categories` for full list.

## 🎨 Features

✅ NVIDIA green theme (#76B900)  
✅ ASCII art branding  
✅ 88 NVIDIA models (NO third-party)  
✅ Secure API key management  
✅ Interactive chat mode  
✅ Multiple output formats  
✅ Health checks  

---

**Full documentation:** See [README.md](./README.md)
