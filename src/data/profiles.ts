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
    image: '/profile_character_img/ch3_boy.png',
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
    image: '/profile_character_img/ch4_boy.png',
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
    image: '/profile_character_img/ch5_boy.png',
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
    image: '/profile_character_img/ch7_girl.png',
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
  image: '/profile_character_img/ch8_boy.png',
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
      id: 'quinn',
      name: 'Quinn Anderson',
      role: 'Pattern Hunter',
      tags: ['analytics'],
      shortTag: 'INSIGHT',
      description:
        'Sees structure inside noise and transforms random numbers into crisp decisions. The data whisperer who finds patterns others miss.',
      stats: { velocity: 30, impact: 20, creativity: 100 },
      entry: '201',
      image: '/profile_character_img/ch2_boy.png',
      achievements: [
        'Summa Cum Laude graduate',
        'Published research in top journals',
        'Data science competition winner',
      ],
      habits: ['Daily data analysis', 'Reading research papers', 'Building models'],
      personality: ['Analytical', 'Curious', 'Methodical', 'Detail-focused'],
      qualities: ['Data analysis', 'Statistical thinking', 'Problem-solving', 'Research'],
    },
    {
      id: 'sage',
      name: 'Sage Williams',
      role: 'Knowledge Core',
      tags: ['research'],
      shortTag: 'ARCHIVE',
      description:
        'Deep research, tight notes, and recall that feels like cheating (but isn\'t). The walking encyclopedia of the team.',
      stats: { velocity: 70, impact: 92, creativity: 76 },
      entry: '202',
      image: '/profile_character_img/ch3_girl.png',
      achievements: [
        'PhD in Computer Science',
        '100+ research citations',
        'Academic excellence award',
      ],
      habits: ['Reading 2 hours daily', 'Note-taking system', 'Literature reviews'],
      personality: ['Scholarly', 'Thorough', 'Intellectual', 'Organized'],
      qualities: ['Research', 'Knowledge retention', 'Writing', 'Critical thinking'],
    },
    {
      id: 'finley',
      name: 'Finley Reed',
      role: 'Systems Builder',
      tags: ['tech'],
      shortTag: 'STACK',
      description:
        'Writes code that is both brutal and beautiful. Turns vague ideas into running systems. The architect of digital solutions.',
      stats: { velocity: 84, impact: 90, creativity: 88 },
      entry: '203',
      image: '/profile_character_img/ch4_boy.png',
      achievements: [
        'Built 20+ production systems',
        'Open source contributor',
        'Tech conference speaker',
      ],
      habits: ['Daily coding practice', 'Code reviews', 'System architecture planning'],
      personality: ['Technical', 'Precise', 'Innovative', 'Systematic'],
      qualities: ['Coding', 'System design', 'Debugging', 'Architecture'],
    },
    {
      id: 'avery',
      name: 'Avery Lee',
      role: 'Support Engine',
      tags: ['mentor'],
      shortTag: 'GUIDE',
      description:
        'The quiet force upgrading everyone else\'s grades, not just their own. The mentor who makes everyone better.',
      stats: { velocity: 72, impact: 86, creativity: 79 },
      entry: '204',
      image: '/profile_character_img/ch5_boy.png',
      achievements: [
        'Tutored 50+ students',
        'Peer mentor program leader',
        'Academic support award',
      ],
      habits: ['Study group sessions', 'Mentoring hours', 'Knowledge sharing'],
      personality: ['Supportive', 'Patient', 'Empathetic', 'Encouraging'],
      qualities: ['Teaching', 'Communication', 'Patience', 'Empathy'],
    },
  ],
  fun: [
    {
      id: 'zoe',
      name: 'Zoe Mitchell',
      role: 'Mood Booster',
      tags: ['fun'],
      shortTag: 'VIBE',
      description:
        'Delivers the exact meme at the exact second the group chat needs it. The energy source who keeps spirits high and laughter flowing.',
      stats: { velocity: 88, impact: 80, creativity: 96 },
      entry: '301',
      image: '/profile_character_img/ch6_girl.png',
      achievements: [
        'Viral meme creator',
        'Social media influencer',
        'Comedy content creator',
      ],
      habits: ['Daily meme creation', 'Trend watching', 'Social media engagement'],
      personality: ['Humorous', 'Energetic', 'Creative', 'Social'],
      qualities: ['Humor', 'Creativity', 'Social awareness', 'Entertainment'],
    },
    {
      id: 'jamie',
      name: 'Jamie Foster',
      role: 'Beat Curator',
      tags: ['music'],
      shortTag: 'LOOP',
      description:
        'Owns the aux, the playlists, and the memory of every track that shaped the semester. The soundtrack architect of every moment.',
      stats: { velocity: 79, impact: 83, creativity: 92 },
      entry: '302',
      image: '/profile_character_img/ch7_boy.png',
      achievements: [
        'DJ at major events',
        'Playlist curator for 1000+',
        'Music production releases',
      ],
      habits: ['Daily music discovery', 'Playlist creation', 'Sound mixing'],
      personality: ['Musical', 'Trendy', 'Expressive', 'Rhythmic'],
      qualities: ['Music knowledge', 'Curation', 'Sound design', 'Taste'],
    },
    {
      id: 'skylar',
      name: 'Skylar Gray',
      role: 'Narrative Engine',
      tags: ['stories'],
      shortTag: 'VERSION',
      description:
        'Turns simple days into legendary stories that get retold for years. The storyteller who makes every moment memorable.',
      stats: { velocity: 75, impact: 82, creativity: 94 },
      entry: '303',
      image: '/profile_character_img/ch1_girl.png',
      achievements: [
        'Published short stories',
        'Storytelling competition winner',
        'Podcast host',
      ],
      habits: ['Daily journaling', 'Story writing', 'Narrative practice'],
      personality: ['Imaginative', 'Expressive', 'Charismatic', 'Observant'],
      qualities: ['Storytelling', 'Writing', 'Imagination', 'Communication'],
    },
    {
      id: 'parker',
      name: 'Parker Brooks',
      role: 'Chaos Architect',
      tags: ['pranks'],
      shortTag: 'GLITCH',
      description:
        'Never mean, always clever. Tiny pranks that keep the group awake and laughing. The master of harmless mischief.',
      stats: { velocity: 82, impact: 78, creativity: 95 },
      entry: '304',
      image: '/profile_character_img/ch2_boy.png',
      achievements: [
        'Epic prank coordinator',
        'Comedy event organizer',
        'Team morale booster',
      ],
      habits: ['Prank planning', 'Comedy research', 'Surprise execution'],
      personality: ['Playful', 'Clever', 'Mischievous', 'Lighthearted'],
      qualities: ['Creativity', 'Timing', 'Humor', 'Surprise'],
    },
  ],
}
