'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Code, Cpu, Brain, Users, Database, Cloud, Bot, Zap, MessageSquare } from 'lucide-react';

const Skills = () => {
  const skillsData = [
    {
      category: 'Programming Languages',
      icon: <Code className="h-5 w-5" />,
      skills: [
        'Python',
        'C/C++',
        'JavaScript',
        'HTML/CSS',
      ],
      color: 'bg-blue-50 text-blue-600 border border-blue-200',
    },
    {
      category: 'ML/NLP Frameworks',
      icon: <Brain className="h-5 w-5" />,
      skills: [
        'PyTorch',
        'Scikit-learn',
        'HuggingFace',
        'LangChain',
        'LlamaIndex',
        'TensorFlow',
        'Transformers',
      ],
      color: 'bg-purple-50 text-purple-600 border border-purple-200',
    },
    {
      category: 'LLM Providers & APIs',
      icon: <MessageSquare className="h-5 w-5" />,
      skills: [
        'OpenAI (ChatGPT, Whisper)',
        'Claude (Anthropic)',
        'Groq',
        'Mistral',
        'Vercel AI SDK',
      ],
      color: 'bg-indigo-50 text-indigo-600 border border-indigo-200',
    },
    {
      category: 'AI Agents & Tools',
      icon: <Bot className="h-5 w-5" />,
      skills: [
        'AI Agents',
        'Prompt Engineering',
        'Tool Routing & Calling',
        'RAG Systems',
        'Function Calling',
      ],
      color: 'bg-cyan-50 text-cyan-600 border border-cyan-200',
    },
    {
      category: 'Vector/Data Stores',
      icon: <Database className="h-5 w-5" />,
      skills: [
        'Weaviate',
        'Pinecone',
        'ChromaDB',
        'Neo4j',
        'Supabase',
        'PostgreSQL',
      ],
      color: 'bg-green-50 text-green-600 border border-green-200',
    },
    {
      category: 'Cloud/MLOps',
      icon: <Cloud className="h-5 w-5" />,
      skills: [
        'AWS (Bedrock, SageMaker, S3)',
        'GCP',
        'Docker',
        'FastAPI',
        'MLOps',
      ],
      color: 'bg-orange-50 text-orange-600 border border-orange-200',
    },
    {
      category: 'Data Science Libraries',
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        'Pandas',
        'NumPy',
        'Matplotlib',
        'CUDA',
        'Jupyter',
      ],
      color: 'bg-emerald-50 text-emerald-600 border border-emerald-200',
    },
    {
      category: 'Soft Skills',
      icon: <Users className="h-5 w-5" />,
      skills: [
        'Research',
        'Problem-Solving',
        'Team Collaboration',
        'Technical Writing',
        'Presentation',
        'Adaptability',
        'Critical Thinking',
      ],
      color: 'bg-rose-50 text-rose-600 border border-rose-200',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="mx-auto w-full max-w-6xl">
      <motion.div
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skillsData.map((skillGroup, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="h-full transition-shadow hover:shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <div className={`rounded-md p-2 ${skillGroup.color}`}>
                    {skillGroup.icon}
                  </div>
                  {skillGroup.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs hover:bg-accent/80"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;