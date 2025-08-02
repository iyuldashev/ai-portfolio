import { tool } from 'ai';
import { z } from 'zod';

export const getResearch = tool({
  description:
    'This tool shows my research publications and achievements. Use it when the user asks about research, publications, papers, or academic work.',
  parameters: z.object({}),
  execute: async () => {
    return "Here are my research publications and achievements! I have published 4 papers including SCIE journals (IEEE Access under review, Energies published), conference papers (KIOTS with Excellent Paper Award), and KCI journals. My research focuses on LLMs for low-resource languages, healthcare AI applications, and energy management systems using machine learning.";
  },
});