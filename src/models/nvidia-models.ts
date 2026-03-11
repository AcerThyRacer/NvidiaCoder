/**
 * NVIDIA NIM Models Database
 * Complete list of all 89 NVIDIA models from build.nvidia.com/models
 * Last Updated: March 10, 2026
 */

export type ModelCategory = 
  | 'llm'
  | 'vlm'
  | 'embedding'
  | 'reranker'
  | 'object-detection'
  | 'ocr'
  | 'asr'
  | 'tts'
  | 'translation'
  | 'safety'
  | 'guardrails'
  | 'reward'
  | 'openusd'
  | 'healthcare'
  | 'weather'
  | 'route-optimization'
  | 'audio-enhancement'
  | 'speech-to-animation'
  | 'video-generation'
  | 'other';

export interface NVIDIAModel {
  name: string;
  id: string;
  category: ModelCategory;
  type: 'chat' | 'completion' | 'embedding' | 'reranker' | 'vision' | 'asr' | 'tts' | 'translation' | 'detection' | 'ocr' | 'safety' | 'guardrails' | 'reward' | 'code' | 'video' | 'audio' | 'animation' | 'other';
  parameters?: string;
  description: string;
  languages?: string[];
}

export const nvidiaModels: NVIDIAModel[] = [
  // Large Language Models - Chat/Completion
  {
    name: 'Llama-3.3-Nemotron-Super-49B-v1.5',
    id: 'nvidia/llama-3_3-nemotron-super-49b-v1_5',
    category: 'llm',
    type: 'chat',
    parameters: '49B',
    description: 'High efficiency model for reasoning, tool calling, chat'
  },
  {
    name: 'Llama-3.3-Nemotron-Super-49B-v1',
    id: 'nvidia/llama-3_3-nemotron-super-49b-v1',
    category: 'llm',
    type: 'chat',
    parameters: '49B',
    description: 'Reasoning, tool calling, chat, instruction following'
  },
  {
    name: 'Llama-3.1-Nemotron-Ultra-253B-v1',
    id: 'nvidia/llama-3_1-nemotron-ultra-253b-v1',
    category: 'llm',
    type: 'chat',
    parameters: '253B',
    description: 'Scientific/math reasoning, coding, tool calling'
  },
  {
    name: 'Nemotron-3-Nano-30B-A3B',
    id: 'nvidia/nemotron-3-nano-30b-a3b',
    category: 'llm',
    type: 'chat',
    parameters: '30B MoE',
    description: '1M context, coding, reasoning, tool calling'
  },
  {
    name: 'Llama-3.1-Nemotron-Nano-8B-v1',
    id: 'nvidia/llama-3_1-nemotron-nano-8b-v1',
    category: 'llm',
    type: 'chat',
    parameters: '8B',
    description: 'Edge AI, reasoning and agentic tasks'
  },
  {
    name: 'Llama-3.1-Nemotron-Nano-4B-v1.1',
    id: 'nvidia/llama-3_1-nemotron-nano-4b-v1_1',
    category: 'llm',
    type: 'chat',
    parameters: '4B',
    description: 'Edge agents, reasoning, code, math'
  },
  {
    name: 'Nemotron-Nano-9B-v2',
    id: 'nvidia/nvidia-nemotron-nano-9b-v2',
    category: 'llm',
    type: 'chat',
    parameters: '9B',
    description: 'Hybrid Transformer-Mamba, reasoning'
  },
  {
    name: 'Nemotron-Mini-4B-Instruct',
    id: 'nvidia/nemotron-mini-4b-instruct',
    category: 'llm',
    type: 'chat',
    parameters: '4B',
    description: 'On-device inference, roleplay, RAG'
  },
  {
    name: 'Mistral-Nemo-Minitron-8B-Base',
    id: 'nvidia/mistral-nemo-minitron-8b-base',
    category: 'llm',
    type: 'completion',
    parameters: '8B',
    description: 'Chatbots, virtual assistants'
  },
  {
    name: 'Llama3-ChatQA-1.5-8B',
    id: 'nvidia/chatqa-1-5-8b',
    category: 'llm',
    type: 'chat',
    parameters: '8B',
    description: 'Chatbots and search engines'
  },
  {
    name: 'Nemotron-4-Mini-Hindi-4B-Instruct',
    id: 'nvidia/nemotron-4-mini-hindi-4b-instruct',
    category: 'llm',
    type: 'chat',
    parameters: '4B',
    description: 'Bilingual Hindi-English'
  },

  // Vision-Language Models (VLM)
  {
    name: 'Cosmos-Reason2-8B',
    id: 'nvidia/cosmos-reason2-8b',
    category: 'vlm',
    type: 'vision',
    description: 'Physical world understanding from video/images'
  },
  {
    name: 'Cosmos-Reason1-7B',
    id: 'nvidia/cosmos-reason1-7b',
    category: 'vlm',
    type: 'vision',
    description: 'Physical AI and robotics'
  },
  {
    name: 'Cosmos-Nemotron-34B',
    id: 'nvidia/cosmos-nemotron-34b',
    category: 'vlm',
    type: 'vision',
    description: 'Text/image/video understanding'
  },
  {
    name: 'Llama-3.1-Nemotron-Nano-VL-8B-v1',
    id: 'nvidia/llama-3.1-nemotron-nano-vl-8b-v1',
    category: 'vlm',
    type: 'vision',
    description: 'Multi-modal understanding'
  },
  {
    name: 'Nemotron-Nano-12B-v2-VL',
    id: 'nvidia/nemotron-nano-12b-v2-vl',
    category: 'vlm',
    type: 'vision',
    description: 'Multi-image/video understanding'
  },

  // Video Generation Models
  {
    name: 'Cosmos-Transfer2.5-2B',
    id: 'nvidia/cosmos-transfer2_5-2b',
    category: 'video-generation',
    type: 'video',
    description: 'Physics-aware video generation'
  },
  {
    name: 'Cosmos-Transfer1-7B',
    id: 'nvidia/cosmos-transfer1-7b',
    category: 'video-generation',
    type: 'video',
    description: 'Physics-aware world states'
  },
  {
    name: 'Cosmos-Predict1-5B',
    id: 'nvidia/cosmos-predict1-5b',
    category: 'video-generation',
    type: 'video',
    description: 'Future frame prediction'
  },

  // Embedding Models
  {
    name: 'Llama-Nemotron-Embed-1B-v2',
    id: 'nvidia/llama-nemotron-embed-1b-v2',
    category: 'embedding',
    type: 'embedding',
    languages: ['26 languages'],
    description: 'Long-document QA retrieval'
  },
  {
    name: 'Llama-Nemotron-Embed-VL-1B-v2',
    id: 'nvidia/llama-nemotron-embed-vl-1b-v2',
    category: 'embedding',
    type: 'embedding',
    languages: ['Multimodal'],
    description: 'Text queries, image documents'
  },
  {
    name: 'Llama-3.2-NV-EmbedQA-1B-v2',
    id: 'nvidia/llama-3_2-nv-embedqa-1b-v2',
    category: 'embedding',
    type: 'embedding',
    languages: ['Multilingual'],
    description: 'QA retrieval, long context'
  },
  {
    name: 'Llama-3.2-Nemoretriever-300M-Embed-v2',
    id: 'nvidia/llama-3_2-nemoretriever-300m-embed-v2',
    category: 'embedding',
    type: 'embedding',
    languages: ['26 languages'],
    description: 'Long-document retrieval'
  },
  {
    name: 'Llama-3.2-Nemoretriever-300M-Embed-v1',
    id: 'nvidia/llama-3_2-nemoretriever-300m-embed-v1',
    category: 'embedding',
    type: 'embedding',
    languages: ['26 languages'],
    description: 'Cross-lingual retrieval'
  },
  {
    name: 'NV-EmbedQA-E5-v5',
    id: 'nvidia/nv-embedqa-e5-v5',
    category: 'embedding',
    type: 'embedding',
    languages: ['English'],
    description: 'QA retrieval'
  },
  {
    name: 'NV-Embed-V1',
    id: 'nvidia/nv-embed-v1',
    category: 'embedding',
    type: 'embedding',
    languages: ['English'],
    description: 'Text embeddings'
  },
  {
    name: 'NV-EmbedCode-7B-v1',
    id: 'nvidia/nv-embedcode-7b-v1',
    category: 'embedding',
    type: 'embedding',
    languages: ['Code'],
    description: 'Code retrieval, text/code queries'
  },
  {
    name: 'NV-CLIP',
    id: 'nvidia/nvclip',
    category: 'embedding',
    type: 'embedding',
    languages: ['Multimodal'],
    description: 'Image and text embeddings'
  },
  {
    name: 'NV-DINOv2',
    id: 'nvidia/nv-dinov2',
    category: 'embedding',
    type: 'embedding',
    languages: ['Visual'],
    description: 'Image vector embeddings'
  },

  // Reranking Models
  {
    name: 'Llama-Nemotron-Rerank-1B-v2',
    id: 'nvidia/llama-nemotron-rerank-1b-v2',
    category: 'reranker',
    type: 'reranker',
    description: 'QA retrieval scoring'
  },
  {
    name: 'Llama-3.2-NV-RerankQA-1B-v2',
    id: 'nvidia/llama-3_2-nv-rerankqa-1b-v2',
    category: 'reranker',
    type: 'reranker',
    description: 'Multilingual QA reranking'
  },
  {
    name: 'Llama-3.2-Nemoretriever-500M-Rerank-v2',
    id: 'nvidia/llama-3_2-nemoretriever-500m-rerank-v2',
    category: 'reranker',
    type: 'reranker',
    description: 'Passage scoring'
  },
  {
    name: 'Rerank-QA-Mistral-4B',
    id: 'nvidia/rerank-qa-mistral-4b',
    category: 'reranker',
    type: 'reranker',
    description: 'GPU-accelerated scoring'
  },

  // Object Detection Models
  {
    name: 'Nemotron-Table-Structure-v1',
    id: 'nvidia/nemotron-table-structure-v1',
    category: 'object-detection',
    type: 'detection',
    description: 'Charts, tables, titles'
  },
  {
    name: 'Nemotron-Page-Elements-v3',
    id: 'nvidia/nemotron-page-elements-v3',
    category: 'object-detection',
    type: 'detection',
    description: 'Document elements'
  },
  {
    name: 'Nemotron-Graphic-Elements-v1',
    id: 'nvidia/nemotron-graphic-elements-v1',
    category: 'object-detection',
    type: 'detection',
    description: 'Charts, tables'
  },
  {
    name: 'Nemoretriever-Page-Elements-v3',
    id: 'nvidia/nemoretriever-page-elements-v3',
    category: 'object-detection',
    type: 'detection',
    description: 'Document detection'
  },
  {
    name: 'Nemoretriever-Table-Structure-v1',
    id: 'nvidia/nemoretriever-table-structure-v1',
    category: 'object-detection',
    type: 'detection',
    description: 'Table detection'
  },
  {
    name: 'Nemoretriever-Graphic-Elements-v1',
    id: 'nvidia/nemoretriever-graphic-elements-v1',
    category: 'object-detection',
    type: 'detection',
    description: 'Graphic elements'
  },
  {
    name: 'Nemoretriever-Page-Elements-v2',
    id: 'nvidia/nemoretriever-page-elements-v2',
    category: 'object-detection',
    type: 'detection',
    description: 'Page elements'
  },
  {
    name: 'NV-YOLOX-Page-Elements-v1',
    id: 'nvidia/nv-yolox-page-elements-v1',
    category: 'object-detection',
    type: 'detection',
    description: 'Document objects'
  },
  {
    name: 'NV-Grounding-DINO',
    id: 'nvidia/nv-grounding-dino',
    category: 'object-detection',
    type: 'detection',
    description: 'Zero-shot detection'
  },
  {
    name: 'Retail-Object-Detection',
    id: 'nvidia/retail-object-detection',
    category: 'object-detection',
    type: 'detection',
    description: 'Retail products'
  },
  {
    name: 'StreamPETR',
    id: 'nvidia/streampetr',
    category: 'object-detection',
    type: 'detection',
    description: '3D autonomous driving'
  },
  {
    name: 'BEVFormer',
    id: 'nvidia/bevformer',
    category: 'object-detection',
    type: 'detection',
    description: "Bird's-eye-view perception"
  },
  {
    name: 'SparseDrive',
    id: 'nvidia/sparsedrive',
    category: 'object-detection',
    type: 'detection',
    description: 'End-to-end driving stack'
  },

  // OCR Models
  {
    name: 'Nemoretriever-OCR-v1',
    id: 'nvidia/nemoretriever-ocr-v1',
    category: 'ocr',
    type: 'ocr',
    description: 'Fast text extraction'
  },
  {
    name: 'Nemoretriever-OCR',
    id: 'nvidia/nemoretriever-ocr',
    category: 'ocr',
    type: 'ocr',
    description: 'Image text extraction'
  },
  {
    name: 'Nemotron-Parse',
    id: 'nvidia/nemotron-parse',
    category: 'ocr',
    type: 'ocr',
    description: 'Text/metadata from images'
  },
  {
    name: 'Nemoretriever-Parse',
    id: 'nvidia/nemoretriever-parse',
    category: 'ocr',
    type: 'ocr',
    description: 'Vision-language extraction'
  },
  {
    name: 'OCDRNet',
    id: 'nvidia/ocdrnet',
    category: 'ocr',
    type: 'ocr',
    description: 'Optical character detection/recognition'
  },

  // ASR (Automatic Speech Recognition) Models
  {
    name: 'Parakeet-CTC-0.6B-ZH-TW',
    id: 'nvidia/parakeet-ctc-0_6b-zh-tw',
    category: 'asr',
    type: 'asr',
    languages: ['Mandarin', 'Taiwanese', 'English'],
    description: 'Transcription'
  },
  {
    name: 'Parakeet-CTC-0.6B-ZH-CN',
    id: 'nvidia/parakeet-ctc-0_6b-zh-cn',
    category: 'asr',
    type: 'asr',
    languages: ['Mandarin', 'English'],
    description: 'Transcription'
  },
  {
    name: 'Parakeet-CTC-0.6B-ES',
    id: 'nvidia/parakeet-ctc-0_6b-es',
    category: 'asr',
    type: 'asr',
    languages: ['Spanish', 'English'],
    description: 'Transcription'
  },
  {
    name: 'Parakeet-CTC-0.6B-VI',
    id: 'nvidia/parakeet-ctc-0_6b-vi',
    category: 'asr',
    type: 'asr',
    languages: ['Vietnamese', 'English'],
    description: 'Transcription'
  },
  {
    name: 'Parakeet-CTC-1.1B-ASR',
    id: 'nvidia/parakeet-ctc-1_1b-asr',
    category: 'asr',
    type: 'asr',
    languages: ['English'],
    description: 'Record-setting accuracy'
  },
  {
    name: 'Parakeet-CTC-0.6B-ASR',
    id: 'nvidia/parakeet-ctc-0_6b-asr',
    category: 'asr',
    type: 'asr',
    languages: ['English'],
    description: 'State-of-the-art speed'
  },
  {
    name: 'Parakeet-TDT-0.6B-v2',
    id: 'nvidia/parakeet-tdt-0_6b-v2',
    category: 'asr',
    type: 'asr',
    languages: ['English'],
    description: 'Optimized transcription'
  },
  {
    name: 'Parakeet-1.1B-RNNT-Multilingual-ASR',
    id: 'nvidia/parakeet-1_1b-rnnt-multilingual-asr',
    category: 'asr',
    type: 'asr',
    languages: ['25 languages'],
    description: 'Multilingual transcription'
  },
  {
    name: 'Canary-1B-ASR',
    id: 'nvidia/canary-1b-asr',
    category: 'asr',
    type: 'asr',
    languages: ['Multi-lingual'],
    description: 'Speech-to-text + translation'
  },

  // TTS (Text-to-Speech) Models
  {
    name: 'Magpie-TTS-Flow',
    id: 'nvidia/magpie-tts-flow',
    category: 'tts',
    type: 'tts',
    description: 'Expressive text-to-speech'
  },
  {
    name: 'Magpie-TTS-Zeroshot',
    id: 'nvidia/magpie-tts-zeroshot',
    category: 'tts',
    type: 'tts',
    description: 'Zero-shot TTS'
  },
  {
    name: 'Magpie-TTS-Multilingual',
    id: 'nvidia/magpie-tts-multilingual',
    category: 'tts',
    type: 'tts',
    description: 'Natural voices'
  },
  {
    name: 'StudioVoice',
    id: 'nvidia/studiovoice',
    category: 'audio-enhancement',
    type: 'audio',
    description: 'Studio quality speech'
  },

  // Audio Enhancement
  {
    name: 'Background Noise Removal',
    id: 'nvidia/bnr',
    category: 'audio-enhancement',
    type: 'audio',
    description: 'Speech intelligibility'
  },

  // Speech-to-Animation
  {
    name: 'Audio2Face-3D',
    id: 'nvidia/audio2face-3d',
    category: 'speech-to-animation',
    type: 'animation',
    description: 'Facial lipsyncing'
  },

  // Translation Models
  {
    name: 'Riva-Translate-4B-Instruct-v1.1',
    id: 'nvidia/riva-translate-4b-instruct-v1_1',
    category: 'translation',
    type: 'translation',
    languages: ['12 languages'],
    description: 'Translation with few-shot'
  },
  {
    name: 'Riva-Translate-1.6B',
    id: 'nvidia/riva-translate-1_6b',
    category: 'translation',
    type: 'translation',
    languages: ['36 languages'],
    description: 'Global interactions'
  },
  {
    name: 'Megatron-1B-NMT',
    id: 'nvidia/megatron-1b-nmt',
    category: 'translation',
    type: 'translation',
    languages: ['36 languages'],
    description: 'Neural machine translation'
  },

  // Safety & Guardrails Models
  {
    name: 'Llama-3.1-Nemotron-Safety-Guard-8B-v3',
    id: 'nvidia/llama-3_1-nemotron-safety-guard-8b-v3',
    category: 'safety',
    type: 'safety',
    description: 'Multilingual moderation'
  },
  {
    name: 'Nemotron-Content-Safety-Reasoning-4B',
    id: 'nvidia/nemotron-content-safety-reasoning-4b',
    category: 'safety',
    type: 'safety',
    description: 'Context-aware policies'
  },
  {
    name: 'Llama-3.1-Nemoguard-8B-Topic-Control',
    id: 'nvidia/llama-3_1-nemoguard-8b-topic-control',
    category: 'guardrails',
    type: 'guardrails',
    description: 'Topic control'
  },
  {
    name: 'Llama-3.1-Nemoguard-8B-Content-Safety',
    id: 'nvidia/llama-3_1-nemoguard-8b-content-safety',
    category: 'guardrails',
    type: 'guardrails',
    description: 'Content safety'
  },
  {
    name: 'Nemoguard-Jailbreak-Detect',
    id: 'nvidia/nemoguard-jailbreak-detect',
    category: 'guardrails',
    type: 'guardrails',
    description: 'Jailbreak detection'
  },
  {
    name: 'GLiNER-PII',
    id: 'nvidia/gliner-pii',
    category: 'safety',
    type: 'safety',
    description: 'Personally Identifiable Information detection'
  },

  // Reward Models
  {
    name: 'Llama-3.1-Nemotron-70B-Reward',
    id: 'nvidia/llama-3_1-nemotron-70b-reward',
    category: 'reward',
    type: 'reward',
    description: 'RLHF alignment'
  },

  // OpenUSD Models
  {
    name: 'USDCode',
    id: 'nvidia/usdcode',
    category: 'openusd',
    type: 'code',
    description: 'OpenUSD knowledge, USD-Python code'
  },
  {
    name: 'USDSearch',
    id: 'nvidia/usdsearch',
    category: 'openusd',
    type: 'other',
    description: '3D model/image search'
  },
  {
    name: 'USDValidate',
    id: 'nvidia/usdvalidate',
    category: 'openusd',
    type: 'other',
    description: 'Asset compatibility validation'
  },

  // Healthcare Models
  {
    name: 'MAISi',
    id: 'nvidia/maisi',
    category: 'healthcare',
    type: 'other',
    description: '3D CT Latent Diffusion'
  },
  {
    name: 'VISTA-3D',
    id: 'nvidia/vista-3d',
    category: 'healthcare',
    type: 'other',
    description: 'Human anatomy segmentation'
  },
  {
    name: 'GenMOL',
    id: 'nvidia/genmol-generate',
    category: 'healthcare',
    type: 'other',
    description: 'Molecular generation'
  },
  {
    name: 'MolMIM',
    id: 'nvidia/molmim-generate',
    category: 'healthcare',
    type: 'other',
    description: 'Controlled molecule generation'
  },

  // Weather & Climate Models
  {
    name: 'FourCastNet',
    id: 'nvidia/fourcastnet',
    category: 'weather',
    type: 'other',
    description: 'Global atmospheric dynamics'
  },
  {
    name: 'CorrDiff',
    id: 'nvidia/corrdiff',
    category: 'weather',
    type: 'other',
    description: 'High-resolution weather fields'
  },

  // Route Optimization
  {
    name: 'CuOpt',
    id: 'nvidia/nvidia-cuopt',
    category: 'route-optimization',
    type: 'other',
    description: 'Complex route optimization'
  },

  // Other Specialized Models
  {
    name: 'EyeContact',
    id: 'nvidia/eyecontact',
    category: 'other',
    type: 'other',
    description: 'Telepresence gaze redirection'
  },
  {
    name: 'Visual-ChangeNet',
    id: 'nvidia/visual-changenet',
    category: 'other',
    type: 'other',
    description: 'Pixel-level change maps'
  }
];

export const totalNvidiaModels = nvidiaModels.length;

export function getModelById(id: string): NVIDIAModel | undefined {
  return nvidiaModels.find(model => model.id === id);
}

export function getModelsByCategory(category: ModelCategory): NVIDIAModel[] {
  return nvidiaModels.filter(model => model.category === category);
}

export function getAllCategories(): ModelCategory[] {
  const categories = new Set(nvidiaModels.map(model => model.category));
  return Array.from(categories);
}

export function searchModels(query: string): NVIDIAModel[] {
  const lowerQuery = query.toLowerCase();
  return nvidiaModels.filter(model => 
    model.name.toLowerCase().includes(lowerQuery) ||
    model.id.toLowerCase().includes(lowerQuery) ||
    model.description.toLowerCase().includes(lowerQuery)
  );
}
