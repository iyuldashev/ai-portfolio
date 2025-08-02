
import { tool } from "ai";
import { z } from "zod";


export const getCrazy = tool({
  description:
    "This tool will show the adventurous thing I've done. use it when the user asks something like : 'What's the craziest thing you've ever done?' or about hobbies",
  parameters: z.object({}),
  execute: async () => {
    return "Above is a photo of me hiking in South Korea! During my Master's degree at Pukyong National University in Busan, I hiked almost all the high mountains in South Korea. It was an incredible way to explore the beautiful Korean landscape while taking breaks from my AI/ML research. The mountain trails there are stunning and offer amazing views of the countryside!";
  },
});