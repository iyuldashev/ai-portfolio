import Image from 'next/image';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// Enhanced project content array with all projects
const PROJECT_CONTENT = [
  {
    src: '',
    title: 'Real-time Voice AI Customer Support Agent',
    category: 'Voice AI',
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Developing a real-time voice-enabled AI customer support agent integrating LiveKit WebRTC, OpenAI, and STT/TTS technologies.
          </span>{' '}
          Supports concurrent voice conversations with advanced audio visualization. Built for multilingual support with focus on Uzbek language integration.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {['LiveKit WebRTC', 'OpenAI API', 'Speech-to-Text', 'Text-to-Speech', 'Python', 'FastAPI', 'Real-time Audio', 'Multilingual AI'].map((tech) => (
            <span key={tech} className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-6">
          <a href="#" className="inline-flex items-center gap-1 text-orange-600 hover:underline">
            Demo <ChevronRight className="h-4 w-4" />
          </a>
          <a href="https://github.com/iyuldashev/voice-ai-support" target="_blank" className="inline-flex items-center gap-1 text-orange-600 hover:underline">
            GitHub <ChevronRight className="h-4 w-4" />
          </a>
        </div>
        <div className="md:w-1/2 md:h-1/2 h-64 w-full mx-auto mt-6 bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center">
          <span className="text-white text-lg font-semibold">Voice AI Interface</span>
        </div>
      </div>
    ),
  },
  {
    src: '',
    title: 'RAG for Hospital System',
    category: 'Healthcare AI',
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Developed a Retrieval-Augmented Generation (RAG) chatbot using LangChain for real-time, context-aware healthcare interactions.
          </span>{' '}
          Integrated Neo4j Knowledge Graph to unify and efficiently query patient, physician, and insurance data. Built and deployed scalable backend APIs with FastAPI and Docker.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {['LangChain', 'Neo4j', 'FastAPI', 'Docker', 'Python', 'RAG', 'Knowledge Graph', 'Healthcare AI'].map((tech) => (
            <span key={tech} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-6">
          <a href="https://github.com/iyuldashev/rag-hospital-system" target="_blank" className="inline-flex items-center gap-1 text-blue-600 hover:underline">
            GitHub <ChevronRight className="h-4 w-4" />
          </a>
        </div>
        <div className="md:w-1/2 md:h-1/2 h-64 w-full mx-auto mt-6 bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center">
          <span className="text-white text-lg font-semibold">RAG Hospital System</span>
        </div>
      </div>
    ),
  },
  {
    src: '',
    title: 'Fine-Tuning LLMs for Low-Resource Languages',
    category: 'NLP Research',
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Developed and fine-tuned open-source Large Language Models (LLMs) to improve language understanding and generation for low-resource languages, specifically Uzbek.
          </span>{' '}
          Collected, curated, and preprocessed domain-specific datasets. Enhanced linguistic accuracy and performance for practical applications such as translation, sentiment analysis, and conversational AI.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {['PyTorch', 'HuggingFace', 'Transformers', 'Python', 'CUDA', 'Low-Resource NLP', 'Fine-tuning', 'Multilingual AI'].map((tech) => (
            <span key={tech} className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-6">
          <a href="#" className="inline-flex items-center gap-1 text-purple-600 hover:underline">
            Research Paper <ChevronRight className="h-4 w-4" />
          </a>
          <a href="https://github.com/iyuldashev/llm-uzbek-finetuning" target="_blank" className="inline-flex items-center gap-1 text-purple-600 hover:underline">
            GitHub <ChevronRight className="h-4 w-4" />
          </a>
        </div>
        <div className="md:w-1/2 md:h-1/2 h-64 w-full mx-auto mt-6 bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center">
          <span className="text-white text-lg font-semibold">Fine-tuning Process</span>
        </div>
      </div>
    ),
  },
  {
    src: '',
    title: 'AI-Based Factory Energy Management System (FEMS)',
    category: 'Industrial AI',
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Implemented predictive models such as LSTM to forecast energy consumption in industrial settings.
          </span>{' '}
          Developed a comprehensive data pipeline for preprocessing and analyzing energy usage data to improve model accuracy and performance. Achieved enhanced energy efficiency and cost optimization through reliable energy consumption forecasts.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {['LSTM', 'TensorFlow', 'Python', 'Pandas', 'NumPy', 'Time Series Analysis', 'Industrial IoT', 'Energy Optimization'].map((tech) => (
            <span key={tech} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-6">
          <a href="#" className="inline-flex items-center gap-1 text-green-600 hover:underline">
            Publication <ChevronRight className="h-4 w-4" />
          </a>
          <a href="https://github.com/iyuldashev/fems-ai" target="_blank" className="inline-flex items-center gap-1 text-green-600 hover:underline">
            GitHub <ChevronRight className="h-4 w-4" />
          </a>
        </div>
        <div className="md:w-1/2 md:h-1/2 h-64 w-full mx-auto mt-6 bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center">
          <span className="text-white text-lg font-semibold">Energy Management System</span>
        </div>
      </div>
    ),
  },
  {
    src: '',
    title: 'Health Monitoring with Fine-Tuned LLMs',
    category: 'Healthcare AI',
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Comparative analysis of fine-tuned and non-fine-tuned Large Language Models for health monitoring applications.
          </span>{' '}
          Developed specialized models for healthcare data analysis and patient monitoring systems. Research resulted in an excellent paper award at KIOTS conference.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {['PyTorch', 'HuggingFace', 'Healthcare AI', 'Model Comparison', 'Python', 'Medical NLP', 'Fine-tuning', 'Research'].map((tech) => (
            <span key={tech} className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-6">
          <a href="#" className="inline-flex items-center gap-1 text-red-600 hover:underline">
            Conference Paper <ChevronRight className="h-4 w-4" />
          </a>
          <a href="https://github.com/iyuldashev/health-monitoring-llm" target="_blank" className="inline-flex items-center gap-1 text-red-600 hover:underline">
            GitHub <ChevronRight className="h-4 w-4" />
          </a>
        </div>
        <div className="md:w-1/2 md:h-1/2 h-64 w-full mx-auto mt-6 bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center">
          <span className="text-white text-lg font-semibold">Health Monitoring Dashboard</span>
        </div>
      </div>
    ),
  },
  {
    src: '',
    title: 'Power Load Forecasting Optimization',
    category: 'Energy Systems',
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Optimized machine learning models and data denoising algorithms for accurate power load forecasting.
          </span>{' '}
          Developed advanced preprocessing techniques and model architectures to improve prediction accuracy in energy systems. Published in Energies journal (SCIE).
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {['Machine Learning', 'Data Denoising', 'Time Series', 'Python', 'Scikit-learn', 'Signal Processing', 'Energy Systems', 'Forecasting'].map((tech) => (
            <span key={tech} className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-6">
          <a href="https://www.mdpi.com/1996-1073/17/21/5513" target="_blank" className="inline-flex items-center gap-1 text-indigo-600 hover:underline">
            SCIE Publication <ChevronRight className="h-4 w-4" />
          </a>
          <a href="https://github.com/iyuldashev/power-load-forecasting" target="_blank" className="inline-flex items-center gap-1 text-indigo-600 hover:underline">
            GitHub <ChevronRight className="h-4 w-4" />
          </a>
        </div>
        <div className="md:w-1/2 md:h-1/2 h-64 w-full mx-auto mt-6 bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center">
          <span className="text-white text-lg font-semibold">Power Load Forecasting</span>
        </div>
      </div>
    ),
  },
];

export { PROJECT_CONTENT };