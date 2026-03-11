# NVIDIA NIM Models - Complete API Reference

**Generated:** March 10, 2026  
**Source:** build.nvidia.com/models

---

## 1. API Endpoint Structure

### Base URLs

- **Web Interface:** https://build.nvidia.com
- **API Endpoint:** https://integrate.api.nvidia.com/v1/

### Standard Endpoints

```
POST https://integrate.api.nvidia.com/v1/chat/completions    # Chat completions (OpenAI-compatible)
POST https://integrate.api.nvidia.com/v1/completions         # Completions (OpenAI-compatible)
GET  https://integrate.api.nvidia.com/v1/models              # List available models
GET  https://integrate.api.nvidia.com/v1/health/ready        # Health check
```

### Experimental Endpoints

```
POST https://integrate.api.nvidia.com/experimental/ls/inference/chat_completion
POST https://integrate.api.nvidia.com/experimental/ls/inference/completion
POST https://integrate.api.nvidia.com/v1/responses            # OpenAI Responses API
```

---

## 2. Authentication Requirements

### API Key Types

1. **NGC API Keys** - Tied to your NVIDIA account for accessing NIM through hosted APIs
2. **Personal Keys** - Support expiration dates, revocation, deletion, and key rotation

### How to Get API Key

1. Visit https://build.nvidia.com and select a model
2. Click "Get API Key" on the model page
3. Sign in with NVIDIA account (or create one)
4. Copy and securely store your generated API Key

### Authentication Header

```bash
curl -X POST "https://integrate.api.nvidia.com/v1/chat/completions" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "vendor/model-name",
    "messages": [{"role": "user", "content": "Hello"}]
  }'
```

### Python SDK Example

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://integrate.api.nvidia.com/v1",
    api_key="YOUR_API_KEY"
)

response = client.chat.completions.create(
    model="meta/llama-3.1-8b-instruct",
    messages=[{"role": "user", "content": "Hello"}]
)
```

---

## 3. Complete Model Catalog

**Total Models:** 215 models (89 NVIDIA, 126 from other publishers)

### Model Categories

1. **Large Language Models** - Text generation, QA, summarization, reasoning, code generation
2. **Retrieval Models** - Text QA retrieval and reranking
3. **Visual Models** - Image and video synthesis
4. **Multimodal** - Combined visual and textual understanding
5. **Healthcare Models** - Drug discovery, medical imaging, genomics
6. **Route Optimization** - Logistics routing
7. **Climate Simulation Models** - Weather forecasting (FourCastNet)

---

### 3.1 NVIDIA Models (89 total)

#### Large Language Models - Chat/Completion

| Model Name | Model ID | Type | Parameters | Description |
|------------|----------|------|------------|-------------|
| Llama-3.3-Nemotron-Super-49B-v1.5 | `nvidia/llama-3_3-nemotron-super-49b-v1_5` | Chat | 49B | High efficiency model for reasoning, tool calling, chat |
| Llama-3.3-Nemotron-Super-49B-v1 | `nvidia/llama-3_3-nemotron-super-49b-v1` | Chat | 49B | Reasoning, tool calling, chat, instruction following |
| Llama-3.1-Nemotron-Ultra-253B-v1 | `nvidia/llama-3_1-nemotron-ultra-253b-v1` | Chat | 253B | Scientific/math reasoning, coding, tool calling |
| Nemotron-3-Nano-30B-A3B | `nvidia/nemotron-3-nano-30b-a3b` | Chat | 30B MoE | 1M context, coding, reasoning, tool calling |
| Llama-3.1-Nemotron-Nano-8B-v1 | `nvidia/llama-3_1-nemotron-nano-8b-v1` | Chat | 8B | Edge AI, reasoning and agentic tasks |
| Llama-3.1-Nemotron-Nano-4B-v1.1 | `nvidia/llama-3_1-nemotron-nano-4b-v1_1` | Chat | 4B | Edge agents, reasoning, code, math |
| Nemotron-Nano-9B-v2 | `nvidia/nvidia-nemotron-nano-9b-v2` | Chat | 9B | Hybrid Transformer-Mamba, reasoning |
| Nemotron-Mini-4B-Instruct | `nvidia/nemotron-mini-4b-instruct` | Chat | 4B | On-device inference, roleplay, RAG |
| Mistral-Nemo-Minitron-8B-Base | `nvidia/mistral-nemo-minitron-8b-base` | Completion | 8B | Chatbots, virtual assistants |
| Llama3-ChatQA-1.5-8B | `nvidia/chatqa-1-5-8b` | Chat | 8B | Chatbots and search engines |
| Nemotron-4-Mini-Hindi-4B-Instruct | `nvidia/nemotron-4-mini-hindi-4b-instruct` | Chat | 4B | Bilingual Hindi-English |

#### Vision-Language Models (VLM)

| Model Name | Model ID | Type | Description |
|------------|----------|------|-------------|
| Cosmos-Reason2-8B | `nvidia/cosmos-reason2-8b` | VLM | Physical world understanding from video/images |
| Cosmos-Reason1-7B | `nvidia/cosmos-reason1-7b` | VLM | Physical AI and robotics |
| Cosmos-Nemotron-34B | `nvidia/cosmos-nemotron-34b` | VLM | Text/image/video understanding |
| Llama-3.1-Nemotron-Nano-VL-8B-v1 | `nvidia/llama-3.1-nemotron-nano-vl-8b-v1` | VLM | Multi-modal understanding |
| Nemotron-Nano-12B-v2-VL | `nvidia/nemotron-nano-12b-v2-vl` | VLM | Multi-image/video understanding |
| Cosmos-Transfer2.5-2B | `nvidia/cosmos-transfer2_5-2b` | Video Gen | Physics-aware video generation |
| Cosmos-Transfer1-7B | `nvidia/cosmos-transfer1-7b` | Video Gen | Physics-aware world states |
| Cosmos-Predict1-5B | `nvidia/cosmos-predict1-5b` | Video Gen | Future frame prediction |

#### Embedding Models

| Model Name | Model ID | Type | Languages | Description |
|------------|----------|------|-----------|-------------|
| Llama-Nemotron-Embed-1B-v2 | `nvidia/llama-nemotron-embed-1b-v2` | Embedding | 26 langs | Long-document QA retrieval |
| Llama-Nemotron-Embed-VL-1B-v2 | `nvidia/llama-nemotron-embed-vl-1b-v2` | Embedding | Multimodal | Text queries, image documents |
| Llama-3.2-NV-EmbedQA-1B-v2 | `nvidia/llama-3_2-nv-embedqa-1b-v2` | Embedding | Multilingual | QA retrieval, long context |
| Llama-3.2-Nemoretriever-300M-Embed-v2 | `nvidia/llama-3_2-nemoretriever-300m-embed-v2` | Embedding | 26 langs | Long-document retrieval |
| Llama-3.2-Nemoretriever-300M-Embed-v1 | `nvidia/llama-3_2-nemoretriever-300m-embed-v1` | Embedding | 26 langs | Cross-lingual retrieval |
| NV-EmbedQA-E5-v5 | `nvidia/nv-embedqa-e5-v5` | Embedding | English | QA retrieval |
| NV-Embed-V1 | `nvidia/nv-embed-v1` | Embedding | English | Text embeddings |
| NV-EmbedCode-7B-v1 | `nvidia/nv-embedcode-7b-v1` | Embedding | Code | Code retrieval, text/code queries |
| NV-CLIP | `nvidia/nvclip` | Embedding | Multimodal | Image and text embeddings |
| NV-DINOv2 | `nvidia/nv-dinov2` | Embedding | Visual | Image vector embeddings |

#### Reranking Models

| Model Name | Model ID | Type | Description |
|------------|----------|------|-------------|
| Llama-Nemotron-Rerank-1B-v2 | `nvidia/llama-nemotron-rerank-1b-v2` | Reranker | QA retrieval scoring |
| Llama-3.2-NV-RerankQA-1B-v2 | `nvidia/llama-3_2-nv-rerankqa-1b-v2` | Reranker | Multilingual QA reranking |
| Llama-3.2-Nemoretriever-500M-Rerank-v2 | `nvidia/llama-3_2-nemoretriever-500m-rerank-v2` | Reranker | Passage scoring |
| Rerank-QA-Mistral-4B | `nvidia/rerank-qa-mistral-4b` | Reranker | GPU-accelerated scoring |

#### Object Detection Models

| Model Name | Model ID | Type | Description |
|------------|----------|------|-------------|
| Nemotron-Table-Structure-v1 | `nvidia/nemotron-table-structure-v1` | Object Detection | Charts, tables, titles |
| Nemotron-Page-Elements-v3 | `nvidia/nemotron-page-elements-v3` | Object Detection | Document elements |
| Nemotron-Graphic-Elements-v1 | `nvidia/nemotron-graphic-elements-v1` | Object Detection | Charts, tables |
| Nemoretriever-Page-Elements-v3 | `nvidia/nemoretriever-page-elements-v3` | Object Detection | Document detection |
| Nemoretriever-Table-Structure-v1 | `nvidia/nemoretriever-table-structure-v1` | Object Detection | Table detection |
| Nemoretriever-Graphic-Elements-v1 | `nvidia/nemoretriever-graphic-elements-v1` | Object Detection | Graphic elements |
| Nemoretriever-Page-Elements-v2 | `nvidia/nemoretriever-page-elements-v2` | Object Detection | Page elements |
| NV-YOLOX-Page-Elements-v1 | `nvidia/nv-yolox-page-elements-v1` | Object Detection | Document objects |
| NV-Grounding-DINO | `nvidia/nv-grounding-dino` | Object Detection | Zero-shot detection |
| Retail-Object-Detection | `nvidia/retail-object-detection` | Object Detection | Retail products |
| StreamPETR | `nvidia/streampetr` | Object Detection | 3D autonomous driving |
| BEVFormer | `nvidia/bevformer` | Object Detection | Bird's-eye-view perception |
| SparseDrive | `nvidia/sparsedrive` | Object Detection | End-to-end driving stack |

#### OCR Models

| Model Name | Model ID | Type | Description |
|------------|----------|------|-------------|
| Nemoretriever-OCR-v1 | `nvidia/nemoretriever-ocr-v1` | OCR | Fast text extraction |
| Nemoretriever-OCR | `nvidia/nemoretriever-ocr` | OCR | Image text extraction |
| Nemotron-Parse | `nvidia/nemotron-parse` | OCR | Text/metadata from images |
| Nemoretriever-Parse | `nvidia/nemoretriever-parse` | OCR | Vision-language extraction |
| OCDRNet | `nvidia/ocdrnet` | OCR | Optical character detection/recognition |

#### Speech/Audio Models

| Model Name | Model ID | Type | Languages | Description |
|------------|----------|------|-----------|-------------|
| Parakeet-CTC-0.6B-ZH-TW | `nvidia/parakeet-ctc-0_6b-zh-tw` | ASR | Mandarin/Taiwanese/English | Transcription |
| Parakeet-CTC-0.6B-ZH-CN | `nvidia/parakeet-ctc-0_6b-zh-cn` | ASR | Mandarin/English | Transcription |
| Parakeet-CTC-0.6B-ES | `nvidia/parakeet-ctc-0_6b-es` | ASR | Spanish/English | Transcription |
| Parakeet-CTC-0.6B-VI | `nvidia/parakeet-ctc-0_6b-vi` | ASR | Vietnamese/English | Transcription |
| Parakeet-CTC-1.1B-ASR | `nvidia/parakeet-ctc-1_1b-asr` | ASR | English | Record-setting accuracy |
| Parakeet-CTC-0.6B-ASR | `nvidia/parakeet-ctc-0_6b-asr` | ASR | English | State-of-the-art speed |
| Parakeet-TDT-0.6B-v2 | `nvidia/parakeet-tdt-0_6b-v2` | ASR | English | Optimized transcription |
| Parakeet-1.1B-RNNT-Multilingual-ASR | `nvidia/parakeet-1_1b-rnnt-multilingual-asr` | ASR | 25 languages | Multilingual transcription |
| Canary-1B-ASR | `nvidia/canary-1b-asr` | ASR | Multi-lingual | Speech-to-text + translation |
| Magpie-TTS-Flow | `nvidia/magpie-tts-flow` | TTS | - | Expressive text-to-speech |
| Magpie-TTS-Zeroshot | `nvidia/magpie-tts-zeroshot` | TTS | - | Zero-shot TTS |
| Magpie-TTS-Multilingual | `nvidia/magpie-tts-multilingual` | TTS | Multi-lingual | Natural voices |
| StudioVoice | `nvidia/studiovoice` | Audio Enhancement | - | Studio quality speech |
| Background Noise Removal | `nvidia/bnr` | Audio Enhancement | - | Speech intelligibility |
| Audio2Face-3D | `nvidia/audio2face-3d` | Speech-to-Animation | - | Facial lipsyncing |

#### Translation Models

| Model Name | Model ID | Type | Languages | Description |
|------------|----------|------|-----------|-------------|
| Riva-Translate-4B-Instruct-v1.1 | `nvidia/riva-translate-4b-instruct-v1_1` | Translation | 12 languages | Translation with few-shot |
| Riva-Translate-1.6B | `nvidia/riva-translate-1_6b` | Translation | 36 languages | Global interactions |
| Megatron-1B-NMT | `nvidia/megatron-1b-nmt` | Translation | 36 languages | Neural machine translation |

#### Safety & Guardrails Models

| Model Name | Model ID | Type | Description |
|------------|----------|------|-------------|
| Llama-3.1-Nemotron-Safety-Guard-8B-v3 | `nvidia/llama-3_1-nemotron-safety-guard-8b-v3` | Content Safety | Multilingual moderation |
| Nemotron-Content-Safety-Reasoning-4B | `nvidia/nemotron-content-safety-reasoning-4b` | Content Safety | Context-aware policies |
| Llama-3.1-Nemoguard-8B-Topic-Control | `nvidia/llama-3_1-nemoguard-8b-topic-control` | Guardrails | Topic control |
| Llama-3.1-Nemoguard-8B-Content-Safety | `nvidia/llama-3_1-nemoguard-8b-content-safety` | Guardrails | Content safety |
| Nemoguard-Jailbreak-Detect | `nvidia/nemoguard-jailbreak-detect` | Guardrails | Jailbreak detection |
| GLiNER-PII | `nvidia/gliner-pii` | PII Detection | Personally Identifiable Information |

#### Reward Models

| Model Name | Model ID | Type | Description |
|------------|----------|------|-------------|
| Llama-3.1-Nemotron-70B-Reward | `nvidia/llama-3_1-nemotron-70b-reward` | Reward | RLHF alignment |

#### OpenUSD Models

| Model Name | Model ID | Type | Description |
|------------|----------|------|-------------|
| USDCode | `nvidia/usdcode` | Code Generation | OpenUSD knowledge, USD-Python code |
| USDSearch | `nvidia/usdsearch` | Search | 3D model/image search |
| USDValidate | `nvidia/usdvalidate` | Validation | Asset compatibility validation |

#### Healthcare Models

| Model Name | Model ID | Type | Description |
|------------|----------|------|-------------|
| MAISi | `nvidia/maisi` | Image Generation | 3D CT Latent Diffusion |
| VISTA-3D | `nvidia/vista-3d` | Interactive Annotation | Human anatomy segmentation |
| GenMOL | `nvidia/genmol-generate` | Chemistry | Molecular generation |
| MolMIM | `nvidia/molmim-generate` | Chemistry | Controlled molecule generation |

#### Weather & Climate Models

| Model Name | Model ID | Type | Description |
|------------|----------|------|-------------|
| FourCastNet | `nvidia/fourcastnet` | Weather Simulation | Global atmospheric dynamics |
| CorrDiff | `nvidia/corrdiff` | Downscaling | High-resolution weather fields |

#### Route Optimization

| Model Name | Model ID | Type | Description |
|------------|----------|------|-------------|
| CuOpt | `nvidia/nvidia-cuopt` | Route Optimization | Complex route optimization |

#### Other Specialized Models

| Model Name | Model ID | Type | Description |
|------------|----------|------|-------------|
| EyeContact | `nvidia/eyecontact` | Telepresence | Gaze redirection |
| Visual-ChangeNet | `nvidia/visual-changenet` | Change Detection | Pixel-level change maps |

---

### 3.2 Third-Party Models (Sample)

| Publisher | Model Name | Model ID | Type | Parameters |
|-----------|------------|----------|------|------------|
| Qwen | Qwen3.5-397B-A17B | `qwen/qwen3.5-397b-a17b` | VLM | 397B MoE |
| Qwen | Qwen3.5-122B-A10B | `qwen/qwen3.5-122b-a10b` | LLM | 122B MoE |
| Moonshot AI | Kimi-K2.5 | `moonshotai/kimi-k2.5` | Multimodal | 1T MoE |
| Moonshot AI | Kimi-K2-Thinking | `moonshotai/kimi-k2-thinking` | Reasoning | - |
| Z.AI | GLM5 | `z-ai/glm5` | LLM | 744B MoE |
| Z.AI | GLM4.7 | `z-ai/glm4_7` | LLM | - |
| MiniMax AI | MiniMax-M2.5 | `minimaxai/minimax-m2.5` | LLM | 230B |
| MiniMax AI | MiniMax-M2.1 | `minimaxai/minimax-m2_1` | LLM | - |
| StepFun AI | Step-3.5-Flash | `stepfun-ai/step-3.5-flash` | Reasoning | 200B MoE |
| DeepSeek AI | DeepSeek-V3.2 | `deepseek-ai/deepseek-v3_2` | LLM | 685B |
| Mistral AI | Devstral-2-123B-Instruct-2512 | `mistralai/devstral-2-123b-instruct-2512` | Code | 123B |
| Meta | Llama-3.1-8B-Instruct | `meta/llama-3_1-8b-instruct` | Chat | 8B |

---

## 4. Model Categories Breakdown

### By Use Case (from filters)

- **Code Generation:** 28 models
- **Retrieval Augmented Generation:** 14 models
- **Drug Discovery:** 13 models
- **Image-to-Text:** 13 models
- **Object Detection:** 9 models
- **PII Detection:** 1+ models
- **Synthetic Data Generation:** 3+ models
- **Video Understanding:** 2+ models
- **Autonomous Vehicles:** 3+ models
- **ASR (Automatic Speech Recognition):** 8+ models
- **TTS (Text-to-Speech):** 4 models
- **Text Translation:** 3 models
- **Content Moderation:** 2+ models
- **Optical Character Recognition:** 4+ models
- **OpenUSD:** 3 models
- **Chemistry:** 2 models
- **Weather Simulation:** 2 models
- **Route Optimization:** 1 model
- **Interactive Annotation:** 1 model

### By Publisher

- **NVIDIA:** 89 models
- **Meta:** 15 models
- **Mistral AI:** 13 models
- **Microsoft:** 12 models
- **Google:** 10 models
- **Qwen:** 2+ models
- **Moonshot AI:** 2+ models
- **Z.AI:** 2+ models
- **MiniMax AI:** 2+ models
- **StepFun AI:** 1+ models
- **DeepSeek AI:** 1+ models

---

## 5. API Usage Examples

### Chat Completion

```python
import requests

url = "https://integrate.api.nvidia.com/v1/chat/completions"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
payload = {
    "model": "nvidia/llama-3_3-nemotron-super-49b-v1_5",
    "messages": [
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Explain quantum computing."}
    ],
    "max_tokens": 512,
    "temperature": 0.7
}

response = requests.post(url, headers=headers, json=payload)
print(response.json())
```

### Embedding Generation

```python
url = "https://integrate.api.nvidia.com/v1/embeddings"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
payload = {
    "model": "nvidia/nv-embedqa-e5-v5",
    "input": "What is machine learning?",
    "encoding_format": "float"
}

response = requests.post(url, headers=headers, json=payload)
embeddings = response.json()["data"][0]["embedding"]
```

### Vision-Language Model

```python
url = "https://integrate.api.nvidia.com/v1/chat/completions"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
payload = {
    "model": "nvidia/cosmos-reason2-8b",
    "messages": [
        {
            "role": "user",
            "content": [
                {"type": "text", "text": "What's happening in this video?"},
                {"type": "image_url", "image_url": {"url": "https://example.com/image.jpg"}}
            ]
        }
    ]
}

response = requests.post(url, headers=headers, json=payload)
```

---

## 6. Important Notes

### Rate Limits
- Free tier available with limited requests
- Production tiers available for higher throughput
- Check https://build.nvidia.com/settings for your quota

### Model Availability
- Some models require acknowledgment of terms
- Third-party models may have separate licensing
- Check individual model pages for usage restrictions

### Self-Hosted NIM
- Models can be downloaded and self-hosted using NVIDIA NIM containers
- Requires NGC API key to pull containers
- Deploy on your own GPU infrastructure

### OpenAI Compatibility
- NVIDIA NIM APIs are OpenAI-compatible
- Can use OpenAI SDK with changed base_url
- Supports streaming, function calling, and tool use

---

## 7. Resources

- **Model Catalog:** https://build.nvidia.com/models
- **API Documentation:** https://docs.api.nvidia.com/nim/
- **API Key Management:** https://build.nvidia.com/settings/api-key
- **Quickstart Guide:** https://docs.api.nvidia.com/nim/docs/api-quickstart
- **OpenAPI Schema:** https://docs.nvidia.com/nim/large-language-models/latest/_static/dot-dot/dot-dot/openapi/nim-llm.openapi.yaml

---

**Last Updated:** March 10, 2026  
**Total Models Tracked:** 215 (89 NVIDIA + 126 third-party)
