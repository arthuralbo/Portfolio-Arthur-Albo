
// Fix: Added React import to resolve "Cannot find namespace 'React'" error when using React.ReactNode
import React from 'react';

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  date: string;
  learning: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

export interface ProjectItem {
  title: string;
  description: string;
  stack: string[];
  githubUrl: string;
  demoUrl: string;
  image: string;
}
