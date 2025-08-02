import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Izzatillo Yuldashev. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Izzatillo Yuldashev, an AI/ML Engineer with hands-on experience in training and deploying LLMs, developing NLP solutions, and integrating AI models into real-world applications. Recently completed my Master's in Computer Engineering at Pukyong National University in Busan, South Korea. I work on fine-tuning open-source LLMs, building RAG systems, and developing multilingual AI applications.",
    };
  },
});
