import type { CategoryKey, Profile } from '../types'

/**
 * PROFILE DATA - Edit profiles here!
 * 
 * Location: src/data/profiles.ts
 * 
 * To add/edit actual person info:
 * 1. Update the DATA object below with real names, roles, descriptions
 * 2. Update the 'image' field to point to their character image:
 *    - Images should be in: public/profile_character_img/
 *    - Format: ch1_girl.png, ch2_boy.png, etc.
 * 3. Fill in achievements, habits, personality, and qualities arrays
 * 4. Adjust stats (velocity, impact, creativity) as needed
 * 
 * Each category has 4 profiles. Make sure each profile has a unique image path.
 */
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
      stats: { velocity: 89, impact: 85, creativity: 94 },
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
    [
  {
    id: 'shubh',
    name: 'Shubh Surana',
    role: 'Elite Competitor',
    tags: ['champion', 'disciplined'],
    shortTag: 'GOLDEN',
    description: 'A dual gold medalist who exemplifies excellence through repetition and mastery. Shubh brings a championship mindset to every project, focusing on precision and high-standard execution.',
    stats: { velocity: 95, impact: 88, creativity: 82 },
    entry: '043',
    image: '/profile_character_img/ch3_boy.png',
    achievements: [
      'Double Gold Medalist in academic excellence',
      'Consistent top-tier performer in state competitions',
      'Mentored junior peers in competitive strategy'
    ],
    habits: ['Routine-driven', 'Meticulous documentation', 'Goal setting'],
    personality: ['Focused', 'Disciplined', 'Stoic', 'Excellence-oriented'],
    qualities: ['Precision', 'Persistence', 'Mental Fortitude', 'Leadership']
  },
  {
    id: 'pradyun',
    name: 'Pradyun Khot',
    role: 'Algorithm Specialist',
    tags: ['logic-king', 'problem-solver'],
    shortTag: 'BINARY',
    description: 'A logic powerhouse ranked #1 on LeetCode. Pradyun specializes in optimizing complex systems and solving "impossible" computational problems with unmatched speed.',
    stats: { velocity: 99, impact: 91, creativity: 85 },
    entry: '044',
    image: '/profile_character_img/ch4_boy.png',
    achievements: [
      'Ranked #1 globally on LeetCode platform',
      'Solved over 2000+ complex algorithmic challenges',
      'Winner of multiple regional coding contests'
    ],
    habits: ['Speed-coding drills', 'System design reading', 'Logical puzzles'],
    personality: ['Brilliant', 'Quiet', 'Analytical', 'Efficient'],
    qualities: ['Algorithmic Logic', 'Speed', 'Optimization', 'Deep Focus']
  },
  {
    id: 'atharva',
    name: 'Atharva Dhobale',
    role: 'National Visionary',
    tags: ['laureate', 'strategist'],
    shortTag: 'ELITE',
    description: 'A National Award winner recognized for high-level contributions to his field. Atharva combines technical depth with a broad strategic perspective that commands attention on a national stage.',
    stats: { velocity: 84, impact: 98, creativity: 90 },
    entry: '045',
    image: '/profile_character_img/ch5_boy.png',
    achievements: [
      'National Award for Technical Excellence',
      'Keynote speaker at regional tech summits',
      'Architect of award-winning community projects'
    ],
    habits: ['Strategic planning', 'Public speaking practice', 'Networking'],
    personality: ['Charismatic', 'Insightful', 'Composed', 'Ambitious'],
    qualities: ['Strategic Vision', 'Integrity', 'Impact-driven', 'Influence']
  },
 {
    id: 'rajveerr',
    name: 'Rajveerr Awachat',
    role: 'Digital Creator & Adaptive Hacker',
    tags: ['influencer', 'builder', 'adaptor'],
    shortTag: 'MEDIA',
    description: 'Bridging the gap between content and code. Rajveerr is a prolific creator known for his resilience; famously the last person to be shifted during the class shuffle, he turned a late transition into a strategic advantage by mastering new group dynamics instantly.',
    stats: { velocity: 88, impact: 89, creativity: 96 },
    entry: '046',
    image: '/profile_character_img/ch6_boy.png',
    achievements: [
      'Final student transitioned in the major class shuffle (Adaptive specialist)',
      'Founded a successful tech-focused YouTube channel',
      'Placed in top 5 of three consecutive hackathons',
    ],
    habits: ['Daily content creation', 'Rapid ideation', 'Agile building'],
    personality: ['Energetic', 'Versatile', 'Communicative', 'Adaptive'],
    qualities: ['Storytelling', 'Resilience', 'Personal Branding', 'Social Intelligence']
  },
  {
    id: 'chitranshi',
    name: 'Chitranshi Katre',
    role: 'Academic Vanguard',
    tags: ['scholar', 'future-leader'],
    shortTag: 'ACADEMY',
    description: 'A high-achieving scholar who secured her place at Ramdeobaba University. Chitranshi is known for her structured approach to learning and her ability to master new disciplines quickly.',
    stats: { velocity: 82, impact: 85, creativity: 88 },
    entry: '047',
    image: '/profile_character_img/ch7_girl.png',
    achievements: [
      'Secured admission to Ramdeobaba University',
      'Maintained a 9.5+ GPA throughout preparatory years',
      'Lead coordinator for student academic circles'
    ],
    habits: ['Active recall study', 'Structured journaling', 'Time blocking'],
    personality: ['Organized', 'Inquisitive', 'Collaborative', 'Kind'],
    qualities: ['Information Synthesis', 'Diligence', 'Curiosity', 'Organization']
  },
  {
    id: 'jigisha',
    name: 'Jigisha Mandavkar',
    role: 'Dynamic Athlete',
    tags: ['sprinter', 'competitor'],
    shortTag: 'VITAL',
    description: 'A first-place competitor who brings the intensity of the racetrack to the tech world. Jigisha excels in high-pressure environments where split-second decisions make the difference.',
    stats: { velocity: 97, impact: 84, creativity: 80 },
    entry: '048',
    image: '/profile_character_img/ch8_girl.png',
    achievements: [
      '1st Position in Regional Competitive Race',
      'Voted "Most Resilient Athlete" 2024',
      'Balanced rigorous sports training with technical studies'
    ],
    habits: ['Morning endurance training', 'Performance tracking', 'Mental visualization'],
    personality: ['High-energy', 'Competitive', 'Brave', 'Decisive'],
    qualities: ['Physical & Mental Speed', 'Competitive Edge', 'Focus', 'Endurance']
   },
  ],
}
