'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Award, BookOpen, ExternalLink, Trophy } from 'lucide-react';

const Research = () => {
  const publications = [
    {
      title: "Adaptation of Open-Source LLMs for Low-Resource Languages",
      authors: "Yuldashev Izzatillo Hakimjon Ugli, Yanxia Li, Tae-Kook Kim",
      journal: "IEEE Access",
      year: "2025",
      status: "Under Review",
      type: "SCIE",
      category: "NLP Research",
      description: "Research on fine-tuning open-source Large Language Models for low-resource languages, specifically focusing on Uzbek language applications.",
      icon: <BookOpen className="h-5 w-5" />,
      color: "bg-blue-50 text-blue-600 border border-blue-200",
    },
    {
      title: "Comparative Analysis of Fine-Tuned and Non-Fine-Tuned LLMs for Health Monitoring",
      authors: "Yuldashev Izzatillo Hakimjon Ugli, Bo Peng, Yanxia Li, Ilyosbek Rakhimjon-Ugli Numonov, TaeO Lee, Shakhidani Aknur, Tae-Kook Kim",
      journal: "2024 Korean Institute of Internet of Things (KIOTS) Integrated Conference",
      year: "2024",
      status: "Published",
      type: "Conference",
      category: "Healthcare AI",
      award: "Excellent Paper Award",
      description: "Comparative study of LLM performance in healthcare applications, analyzing the effectiveness of fine-tuned vs. non-fine-tuned models.",
      icon: <Trophy className="h-5 w-5" />,
      color: "bg-green-50 text-green-600 border border-green-200",
    },
    {
      title: "Development of an AI-Based Energy Management System for Factory Power Saving",
      authors: "Ilyosbek Rakhimjon-Ugli Numonov, Yuldashev Izzatillo Hakimjon Ugli, Bo Peng, Yanxia Li, TaeO Lee, Tae-Kook Kim",
      journal: "IoT Convergence Journal",
      year: "2024",
      status: "Published",
      type: "KCI",
      category: "Industrial AI",
      volume: "Vol. 10, No. 6, pp. 49–55",
      description: "Development of AI-based systems for optimizing energy consumption in industrial factory environments.",
      icon: <BookOpen className="h-5 w-5" />,
      color: "bg-orange-50 text-orange-600 border border-orange-200",
    },
    {
      title: "Optimizing Models and Data Denoising Algorithms for Power Load Forecasting",
      authors: "Yanxia Li, Yuldashev Izzatillo Hakimjon Ugli, Ilyosbek Numonov Rakhimjon Ugli, Taeo Lee, and Tae-Kook Kim",
      journal: "Energies",
      year: "2024",
      status: "Published",
      type: "SCIE",
      category: "Energy Systems",
      volume: "17(21), 5513, MDPI",
      description: "Research on optimizing machine learning models and data preprocessing techniques for improved power load forecasting accuracy.",
      link: "https://www.mdpi.com/1996-1073/17/21/5513",
      icon: <BookOpen className="h-5 w-5" />,
      color: "bg-purple-50 text-purple-600 border border-purple-200",
    },
  ];

  const achievements = [
    {
      title: "Excellent Paper Award",
      organization: "2024 KIOTS Integrated Academic Conference",
      description: "For outstanding research on comparative analysis of LLMs for health monitoring",
      icon: <Award className="h-5 w-5" />,
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
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Publications Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Publications</h3>
          <div className="grid grid-cols-1 gap-6">
            {publications.map((pub, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="transition-shadow hover:shadow-lg">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3 flex-1">
                        <div className={`rounded-md p-2 ${pub.color} flex-shrink-0`}>
                          {pub.icon}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg leading-tight mb-2">
                            {pub.title}
                            {pub.link && (
                              <a
                                href={pub.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 inline-flex items-center text-blue-600 hover:text-blue-800"
                              >
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            )}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground mb-2">
                            {pub.authors}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge variant="secondary" className="text-xs">
                              {pub.journal}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {pub.year}
                            </Badge>
                            <Badge 
                              variant={pub.status === 'Published' ? 'default' : 'secondary'} 
                              className="text-xs"
                            >
                              {pub.status}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {pub.type}
                            </Badge>
                            {pub.award && (
                              <Badge className="text-xs bg-yellow-100 text-yellow-800">
                                🏆 {pub.award}
                              </Badge>
                            )}
                          </div>
                          {pub.volume && (
                            <p className="text-sm text-muted-foreground mb-2">
                              {pub.volume}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {pub.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Awards & Achievements Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Awards & Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="rounded-md p-2 bg-yellow-50 text-yellow-600 border border-yellow-200">
                        {achievement.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          {achievement.organization}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Research;