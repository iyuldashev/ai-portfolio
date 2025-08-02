
import { tool } from "ai";
import { z } from "zod";


export const getProjects = tool({
  description:
    "This tool will show a list of all projects made by Izzatillo",
  parameters: z.object({}),
  execute: async () => {
    return "Here are all the projects made by Izzatillo (above)! These include RAG systems for healthcare, fine-tuning LLMs for low-resource languages, AI-based energy management systems, voice AI applications, and published research in SCIE journals. Feel free to ask me more about any specific project!";
  },
});