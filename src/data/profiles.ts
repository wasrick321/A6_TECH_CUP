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
      image: '/profile_character_img/sadu.jpg',
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
    id: 'shubh',
    name: 'Shubh Surana',
    role: 'Elite Competitor',
    tags: ['champion', 'disciplined'],
    shortTag: 'GOLDEN',
    description: 'A dual gold medalist who exemplifies excellence through repetition and mastery. Shubh brings a championship mindset to every project, focusing on precision and high-standard execution.',
    stats: { velocity: 95, impact: 88, creativity: 82 },
    entry: '043',
    image: '/profile_character_img/shubh.jpg',
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
    image: '/profile_character_img/Pradyun Khot.jpg',
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
    image: '/profile_character_img/atharva dhobale.jpg',
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
    id: 'chitranshi',
    name: 'Chitranshi Katre',
    role: 'Academic Vanguard',
    tags: ['scholar', 'future-leader'],
    shortTag: 'ACADEMY',
    description: 'A high-achieving scholar who secured her place at Ramdeobaba University. Chitranshi is known for her structured approach to learning and her ability to master new disciplines quickly.',
    stats: { velocity: 82, impact: 85, creativity: 88 },
    entry: '047',
    image: '/profile_character_img/CHITRANSHI KATRE.jpg',
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
    image: '/profile_character_img/jigisha.jpg',
    achievements: [
      '1st Position in Regional Competitive Race',
      'Voted "Most Resilient Athlete" 2024',
      'Balanced rigorous sports training with technical studies'
    ],
    habits: ['Morning endurance training', 'Performance tracking', 'Mental visualization'],
    personality: ['High-energy', 'Competitive', 'Brave', 'Decisive'],
    qualities: ['Physical & Mental Speed', 'Competitive Edge', 'Focus', 'Endurance']
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
    image: '/profile_character_img/RAJVEERR AWACHAT.jpg',
    achievements: [
      'Final student transitioned in the major class shuffle (Adaptive specialist)',
      'Founded a successful tech-focused YouTube channel',
      'Placed in top 5 of three consecutive hackathons',
    ],
    habits: ['Daily content creation', 'Rapid ideation', 'Agile building'],
    personality: ['Energetic', 'Versatile', 'Communicative', 'Adaptive'],
    qualities: ['Storytelling', 'Resilience', 'Personal Branding', 'Social Intelligence']
  },
  ],
  sports: [
  {
    id: 'gangwani',
    name: 'Atharva Gangwani',
    role: 'Tug of War Champion',
    tags: ['powerhouse', 'team-anchor'],
    shortTag: 'FORCE',
    description: 'The ultimate anchor in high-stakes competition. Atharva is known for his immense stability, providing the steady foundation his team needs to pull through the toughest challenges.',
    stats: { velocity: 62, impact: 38, creativity: 70 }, // Low humor, Low nerdy (Pure Strength)
    entry: '105',
    image: '/profile_character_img/ATHARVA_GANGWANI.jpg',
    achievements: [
      'Gold Medalist in Regional Tug of War Championship',
      'Team Lead for strength-based competitive events',
      'Recognized for exceptional tactical positioning'
    ],
    habits: ['Grip strength drills', 'Team synchronization practice', 'High-protein diet'],
    personality: ['Determined', 'Reliable', 'Strong-willed', 'Patient'],
    qualities: ['Physical Power', 'Stability', 'Team Coordination', 'Endurance']
  },
  {
    id: 'ramnayan',
    name: 'Ramnayan Sharma',
    role: 'Versatile All-Rounder',
    tags: ['cricketer', 'multi-sport'],
    shortTag: 'VERSA',
    description: 'A dynamic athlete who dominates both the cricket pitch and the tug-of-war line. Ramnayan excels in transitioning between diverse roles, bringing all-rounder utility to every squad.',
    stats: { velocity: 86, impact: 65, creativity: 84 }, // High humor, Moderate nerdy
    entry: '106',
    image: '/profile_character_img/Ram nayan.jpg',
    achievements: [
      'Man of the Match in inter-college cricket tournament',
      'Key contributor to Tug of War victory streak',
      'Advanced technical skills in bowling and batting'
    ],
    habits: ['Net practice (3 hours daily)', 'Strategic game review', 'Agility training'],
    personality: ['Adaptable', 'Competitive', 'Social', 'Hard-working'],
    qualities: ['Versatility', 'Hand-Eye Coordination', 'Strategic Thinking', 'Agility']
  },
  {
    id: 'sachin',
    name: 'Sachin Mardikar',
    role: 'Dual-Field Specialist',
    tags: ['badminton', 'footballer'],
    shortTag: 'SWIFT',
    description: 'Combining the explosive speed of badminton with the tactical endurance of football. Sachin is a high-velocity player who thrives on the fast-paced transitions of competition.',
    stats: { velocity: 74, impact: 78, creativity: 89 }, // Balanced humor and nerdy
    entry: '107',
    image: '/profile_character_img/sachin.jpg',
    achievements: [
      'Top scorer in regional football league',
      'Winner of local Badminton singles tournament',
      'Achieved peak performance ranking in school athletics'
    ],
    habits: ['Reflex training drills', 'Daily cardio circuits', 'Footwork mastery'],
    personality: ['Energetic', 'Focused', 'Agile', 'Perceptive'],
    qualities: ['Reflexes', 'Precision', 'Multi-discipline mastery', 'Stamina']
  },
  {
    id: 'jiya',
    name: 'Jiya Vanjani',
    role: 'Rhythmic Performer',
    tags: ['dance', 'creative-lead'],
    shortTag: 'FLOW',
    description: 'A master of movement and expression. Jiya treats the stage like a canvas, blending technical precision with creative flair to win over audiences.',
    stats: { velocity: 92, impact: 52, creativity: 98 }, // Very high humor (Social), Low nerdy
    entry: '108',
    image: '/profile_character_img/ch1_girl.png',
    achievements: [
      '1st Place in Inter-City Dance Competition',
      'Choreographed winning routines for group events',
      'Trained in multiple classical and modern dance forms'
    ],
    habits: ['Choreography sessions', 'Daily flexibility routine', 'Music analysis'],
    personality: ['Expressive', 'Disciplined', 'Creative', 'Confident'],
    qualities: ['Artistic Vision', 'Flexibility', 'Stage Presence', 'Rhythm']
  },
  {
    id: 'katre_sports',
    name: 'Chitranshi Katre',
    role: 'Basketball Strategist',
    tags: ['hooper', 'academic-athlete'],
    shortTag: 'COURT',
    description: 'While recognized for her academic success, Chitranshi is equally formidable on the court. She applies her structured academic mindset to basketball.',
    stats: { velocity: 45, impact: 96, creativity: 84 }, // Low humor, Max nerdy (Academic focus)
    entry: '109',
    image: '/profile_character_img/CHITRANSHI KATRE.jpg',
    achievements: [
      'Lead guard for the college basketball team',
      'Top defensive stats in intra-mural tournament',
      'Balanced elite sports with high academic standing'
    ],
    habits: ['Free-throw drills', 'Defensive footwork', 'Early morning practice'],
    personality: ['Analytical', 'Tenacious', 'Organized', 'Coachable'],
    qualities: ['Court Vision', 'Defense', 'Discipline', 'Tactical Play']
  },
    {
  id: 'raghav',
  name: 'Raghav Chauksey',
  role: 'Pop-Culture Maverick',
  tags: ['guitarist', 'swimmer', 'enthusiast'],
  shortTag: 'CHORD',
  description: 'A versatile talent who balances the rhythmic precision of a guitarist with the endurance of a competitive swimmer. Raghav is the team’s go-to source for pop culture trends, seamlessly bridging the gap between artistic expression and modern media.',
  stats: { velocity: 92, impact: 78, creativity: 85 }, // High humor (Social/Pop-culture), High nerdy (Music/Tech theory)
  entry: '110',
  image: '/profile_character_img/RaghavChauksey.jpg',
  achievements: [
    'Lead guitarist for regional youth ensemble',
    'State-level swimming finalist (Freestyle)',
    'Curator of comprehensive pop-culture and media archives'
  ],
  habits: ['Morning swim laps', 'Daily guitar scales', 'Trend analysis & blogging'],
  personality: ['Outgoing', 'Observant', 'Rhythmic', 'Cultural'],
  qualities: ['Trend Awareness', 'Musicality', 'Physical Endurance', 'Social Versatility']
},
  ],
academics: [
  {
    id: 'sharanya',
    name: 'Sharanya Mahajan',
    role: 'Spark Innovator',
    tags: ['developer', 'learner', 'efficient'],
    shortTag: 'PROMPT',
    description: 'A dedicated developer known for completing projects with surgical precision. Sharanya possesses the rare ability to master new tech stacks instantly, making her the ultimate reliability asset for any technical squad.',
    stats: { velocity: 100, impact: 20, creativity: 90 }, // Moderate humor, High Nerdy (Technical focus)
    entry: '205',
    image: '/profile_character_img/sharanya.jpg',
    achievements: [
      'Completed all major assignments ahead of scheduled deadlines',
      'Mastered Java, Python, and C core architectures',
      'Lead debugger for complex group project modules',
      'Consistently recognized for clean, readable code'
    ],
    habits: ['Deep-dive documentation reading', 'Structured coding sprints', 'Rapid concept mapping', 'Code refactoring'],
    personality: ['Reliable', 'Quick-learner', 'Disciplined', 'Methodical'],
    qualities: ['Technical Precision', 'Academic Diligence', 'Logic Synthesis', 'Efficiency']
  },
  {
    id: 'purva',
    name: 'Purva Gattani',
    role: 'Creative Aesthetician',
    tags: ['art', 'craft', 'visuals'],
    shortTag: 'DRAFT',
    description: 'A visionary who turns abstract academic concepts into physical art. Purva brings a unique creative perspective to the group, proving that technical environments thrive when paired with high-level aesthetic design.',
    stats: { velocity: 70, impact: 68, creativity: 95 }, // High Social, High Creativity
    entry: '206',
    image: '/profile_character_img/purva.jpg',
    achievements: [
      'Excellence award in Art & Craft regional competitions',
      'Chief designer for student-led creative showcases',
      'Created visual identities for multiple academic projects',
      'Top-tier ranking in creative design modules'
    ],
    habits: ['Daily conceptual sketching', 'Creative trend research', 'Visual prototyping', 'Portfolio curation'],
    personality: ['Imaginative', 'Quiet', 'Perceptive', 'Artistic'],
    qualities: ['Visual Design', 'Aesthetic Logic', 'Originality', 'Spatial Awareness']
  },
  {
    id: 'vidhi',
    name: 'Vidhi Mantri',
    role: 'UX Architect',
    tags: ['ui-ux', 'design', 'psychology'],
    shortTag: 'PIXEL',
    description: 'Focuses on the vital intersection of technology and human interaction. Vidhi designs seamless digital experiences by combining technical logic with a deep understanding of user psychology.',
    stats: { velocity: 78, impact: 85, creativity: 96 }, // High Humor (Social), High Nerdy (UX Theory)
    entry: '207',
    image: '/profile_character_img/ch4_girl.png',
    achievements: [
      'Designed multiple award-winning UI/UX prototypes',
      'Certified specialist in user-centric design frameworks',
      'Conducted extensive user research for department apps',
      'Top marks in Human-Computer Interaction studies'
    ],
    habits: ['User journey mapping', 'Interface usability testing', 'Design system updates', 'Sketching wireframes'],
    personality: ['Empathetic', 'Detail-oriented', 'Communicative', 'Analytical'],
    qualities: ['User Psychology', 'Design Logic', 'Attention to Detail', 'Prototyping']
  },
  {
    id: 'krishna',
    name: 'Krishna Toshniwal',
    role: 'Algorithm Tactician',
    tags: ['coding', 'algorithms', 'competitor'],
    shortTag: 'INDEX',
    description: 'A true denizen of the competitive programming world. Krishna thrives in high-pressure environments, constantly pushing the limits of time and space complexity on global coding platforms.',
    stats: { velocity: 68, impact: 98, creativity: 82 }, // Extreme Nerdy (Technical Depth)
    entry: '208',
    image: '/profile_character_img/ch14_boy.png',
    achievements: [
      'Advanced rank in international coding contests',
      'Solved 500+ complex algorithmic problems',
      'Optimized legacy code structures for efficiency',
      'Winner of department-level "Logic-Thon"'
    ],
    habits: ['Daily problem solving', 'Algorithm whiteboarding', 'Complexity analysis', 'Tech forum contribution'],
    personality: ['Analytical', 'Persistent', 'Stoic', 'Goal-oriented'],
    qualities: ['Speed Coding', 'Mathematical Logic', 'Optimization', 'Tenacity']
  },
  {
    id: 'trupti',
    name: 'Trupti Tiwari',
    role: 'Scholastic Lead',
    tags: ['academic', 'focus', 'mentor'],
    shortTag: 'KNOWLEDGE',
    description: 'The standard-bearer for academic excellence. Trupti maintains a high-altitude GPA through a methodical and disciplined approach, serving as a knowledge hub for her peers.',
    stats: { velocity: 62, impact: 96, creativity: 80 }, // Max Nerdy (Academic focus)
    entry: '209',
    image: '/profile_character_img/ch5_girl.png',
    achievements: [
      'Maintained consistent 9+ SGPA across all semesters',
      'Subject Matter Expert in core technical theory',
      'Lead coordinator for peer-to-peer study groups',
      'Recognized for exceptional research documentation'
    ],
    habits: ['Meticulous note-taking', 'Active recall sessions', 'Weekly knowledge audits', 'Mentoring junior students'],
    personality: ['Disciplined', 'Knowledgeable', 'Patient', 'Structured'],
    qualities: ['Information Recall', 'Organization', 'Diligence', 'Critical Thinking']
  },
  {
    id: 'gauri',
    name: 'Gauri Agrawal',
    role: 'Logic Developer',
    tags: ['clean-code', 'software', 'builder'],
    shortTag: 'SYNTAX',
    description: 'A developer dedicated to the craft of clean architecture. Gauri focuses on writing efficient, readable code to solve real-world problems, ensuring that software remains scalable and elegant.',
    stats: { velocity: 72, impact: 88, creativity: 82 }, // Balanced stats
    entry: '210',
    image: '/profile_character_img/ch1_girl.png',
    achievements: [
      'Lead contributor to academic software frameworks',
      'Developed a full-stack solution for student management',
      'Excellence in software engineering principles',
      'Recognized for building highly intuitive app logic'
    ],
    habits: ['Clean code reviews', 'Logic building exercises', 'Module testing', 'Tech stack experimentation'],
    personality: ['Logical', 'Helpful', 'Focused', 'Pragmatic'],
    qualities: ['Software Architecture', 'Clarity', 'Modular Design', 'Deductive Reasoning']
  },
  {
    id: 'vedant_l',
    name: 'Vedant Lende',
    role: 'Systems Architect',
    tags: ['backend', 'tech', 'builder'],
    shortTag: 'BUILDER',
    description: 'A technical specialist focused on the engine under the hood. Vedant ensures that all technical frameworks are robust and scalable, specializing in systems-level coding and infrastructure.',
    stats: { velocity: 65, impact: 90, creativity: 84 }, // High Nerdy
    entry: '211',
    image: '/profile_character_img/ch15_boy.png',
    achievements: [
      'Optimized backend performance for group projects',
      'Built custom API structures for mobile applications',
      'Advanced proficiency in database management',
      'Winner of "Best Infrastructure" in regional hackathon'
    ],
    habits: ['Refactoring code', 'Technical literature review', 'System stress testing', 'Debugging sessions'],
    personality: ['Systematic', 'Ambitious', 'Resilient', 'Observant'],
    qualities: ['Back-end Logic', 'Stability', 'System Design', 'Technical Depth']
  }
],
  fun: [
    {
  id: 'divyansh',
  name: 'Divyansh Wasnik',
  role: 'Lead Visionary',
  tags: ['leadership', '3D'],
  shortTag: 'LEAD',
  description:
    'The driving force behind the aesthetic and the team. Blends high-end 3D graphics with seamless UI while taking full ownership of the mission.',
  stats: { velocity: 92, impact: 95, creativity: 94 },
  entry: '302',
  image: '/images/448.png',
  achievements: [
    'Master of 3D environments',
    'Intuitive UI designer',
    'Strategic project lead',
  ],
  habits: ['Proactive problem solving', 'Polishing pixels', 'Team mentoring'],
  personality: ['Responsible', 'Ambitious', 'Technical', 'Visionary'],
  qualities: ['Leadership', 'Technical depth', 'Initiative', 'Precision'],
},
    {
  id: 'samrudhi',
  name: 'Samrudhi Madankar',
  role: 'Structural Architect',
  tags: ['structure', 'multitask'],
  shortTag: 'CORE',
  description:
    'The calm in the center of the storm. Expertly juggles complex tasks while building the solid foundation that keeps the entire site standing.',
  stats: { velocity: 30, impact: 90, creativity: 100 },
  entry: '303',
  image: '/images/133.png',
  achievements: [
    'Complex site architecture',
    'Efficiency optimization',
    'Multi-tasking specialist',
  ],
  habits: ['Systematic planning', 'Deep work sessions', 'Staying composed'],
  personality: ['Calm', 'Peaceful', 'Reliable', 'Organized'],
  qualities: ['Stability', 'Efficiency', 'Structural thinking', 'Patience'],
},
    {
  id: 'manaswi',
  name: 'Manaswi Wasu',
  role: 'Content Alchemist',
  tags: ['ideation', 'content'],
  shortTag: 'IDEA',
  description:
    'A quiet powerhouse who thrives under the moonlight. Transforms abstract thoughts into compelling content while the rest of the world sleeps.',
  stats: { velocity: 78, impact: 86, creativity: 98 },
  entry: '304',
  image: '/images/025.png',
  achievements: [
    'Viral conceptual frameworks',
    'Narrative design expert',
    'Midnight breakthrough specialist',
  ],
  habits: ['Late-night brainstorming', 'Deep research', 'Observation'],
  personality: ['Introverted', 'Thoughtful', 'Creative', 'Observant'],
  qualities: ['Deep ideation', 'Writing mastery', 'Originality', 'Focus'],
},
    {
  id: 'simran',
  name: 'Simran Ghadwe',
  role: 'Visual Stylist',
  tags: ['figma', 'creative'],
  shortTag: 'ZEN',
  description:
    'Moves through Figma with effortless grace. Creates the perfect creative backdrop and atmosphere with a smart, calculated design approach.',
  stats: { velocity: 84, impact: 87, creativity: 92 },
  entry: '306',
  image: '/images/359.png',
  achievements: [
    'Figma component mastery',
    'Atmospheric backdrop design',
    'Minimalist aesthetic lead',
  ],
  habits: ['Design system curation', 'Continuous learning', 'Mindful creation'],
  personality: ['Calm', 'Smart', 'Creative', 'Analytical'],
  qualities: ['Aesthetic sense', 'Figma proficiency', 'Intelligence', 'Balance'],
},
    {
  id: 'rajveerr',
  name: 'Rajveerr Awachat',
  role: 'Resource Catalyst',
  tags: ['branding', 'network'],
  shortTag: 'PLUG',
  description:
    'The man with the plan and the contacts. Distills a brand into a single logo while leveraging a massive network to get anything done.',
  stats: { velocity: 94, impact: 89, creativity: 85 },
  entry: '305',
  image: '/images/143.png',
  achievements: [
    'Iconic brand identity design',
    'Master networker',
    'Rapid resource procurement',
  ],
  habits: ['Constant networking', 'Sketching concepts', 'Rapid execution'],
  personality: ['Energetic', 'Resourceful', 'Extroverted', 'Determined'],
  qualities: ['Social intelligence', 'Visual shorthand', 'Agility', 'Hustle'],
},   
  ],
}
