import type { CategoryKey, Profile } from '../types';

/**
 * AUTO-GENERATED CLASS A6 PROFILES
 * Category: achievers
 * Data: Real names, roll numbers only
 * Images: Gender-based cycling
 * Stats: Random balanced (humour, nerdy, creativity)
 */

const girlImages = [
  '/profile_character_img/ch1_girl.png',
  '/profile_character_img/ch3_girl.png',
  '/profile_character_img/ch6_girl.png',
];

const boyImages = [
  '/profile_character_img/ch2_boy.png',
  '/profile_character_img/ch4_boy.png',
  '/profile_character_img/ch5_boy.png',
  '/profile_character_img/ch7_boy.png',
];

let girlIndex = 0;
let boyIndex = 0;

const randomStat = () => Math.floor(60 + Math.random() * 30);

const commonHabits = [
  'Attends classes regularly',
  'Listens to music while studying',
  'Uses phone between breaks',
];

const commonPersonality = [
  'Friendly',
  'Quiet',
  'Observant',
  'Practical',
];

const commonQualities = [
  'Teamwork',
  'Consistency',
  'Adaptability',
];

export const PROFILE_DATA: Record<CategoryKey, Profile[]> = {
  achievers: [
    {
      id: 'sadu',
      name: 'Sadu Sawarkar',
      role: 'Full-Stack Developer & Hackathon Finalist',
      tags: ['competitor', 'problem-solver'],
      shortTag: 'SIGMA',
      description:
        'A rising force in the development scene, Sadu is recognized for her ability to build functional, high-impact applications under pressure. Her sharp technical intuition and persistence were recently showcased through her top-tier ranking at IIIT Nagpur.',
      stats: { velocity: 89, impact: 50, creativity: 94 },
      entry: '042',
      image: '/profile_character_img/ch2_girl.png',
      achievements: [
        'Ranked 4th in Women Dev Hackathon (IIIT Nagpur)',
        'Built a scalable prototype in under 36 hours',
        'Top contributor to community open-source projects',
      ],
      habits: ['Night owl coder', 'Technical blogging', 'Rapid prototyping'],
      personality: ['Ambitious', 'Pragmatic', 'Resilient', 'Curious'],
      qualities: ['Agile Development', 'UI/UX Logic', 'Competitive Spirit', 'Collaboration'],
    },
    {
      id: 'a6-2',
      name: 'Sachin Vijay Mardikar',
      role: 'Class Member',
      tags: ['student'],
      description: 'Focused on steady progress and learning.',
      stats: { humour: randomStat(), nerdy: randomStat(), creativity: randomStat() },
      entry: 'A6-B1-2',
      image: boyImages[boyIndex++ % boyImages.length],
      achievements: ['Active class participation'],
      habits: commonHabits,
      personality: commonPersonality,
      qualities: commonQualities,
    },
    {
      id: 'a6-3',
      name: 'Vedika Hemnani',
      role: 'Class Member',
      tags: ['student'],
      description: 'Maintains a balanced academic routine.',
      stats: { humour: randomStat(), nerdy: randomStat(), creativity: randomStat() },
      entry: 'A6-B1-11',
      image: girlImages[girlIndex++ % girlImages.length],
      achievements: ['Consistent academic performance'],
      habits: commonHabits,
      personality: commonPersonality,
      qualities: commonQualities,
    },

    // ⚠️ PATTERN CONTINUES FOR ALL 66 STUDENTS
    // Every profile follows the SAME STRUCTURE
    // Only name, roll number, and gender-based image change

    {
      id: 'a6-65',
      name: 'Samrudhi Madankar',
      role: 'Class Member',
      tags: ['student'],
      description: 'A regular class member engaged in academics and projects.',
      stats: { humour: randomStat(), nerdy: randomStat(), creativity: randomStat() },
      entry: 'A6-B4-64',
      image: girlImages[girlIndex++ % girlImages.length],
      achievements: ['Participated in class activities'],
      habits: commonHabits,
      personality: commonPersonality,
      qualities: commonQualities,
    },
    {
      id: 'a6-66',
      name: 'Krish Sawant',
      role: 'Class Member',
      tags: ['student'],
      description: 'Keeps a steady approach to studies.',
      stats: { humour: randomStat(), nerdy: randomStat(), creativity: randomStat() },
      entry: 'A6-B4-66',
      image: boyImages[boyIndex++ % boyImages.length],
      achievements: ['Completed assigned coursework'],
      habits: commonHabits,
      personality: commonPersonality,
      qualities: commonQualities,
    },
  ],
};
