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
      id: 'alex',
      name: 'Alexi Campbel',
      role: 'Tech Innovator',
      tags: ['innovator', 'strategist'],
      shortTag: 'ALPHA',
      description:
        'A visionary leader who transforms complex challenges into elegant solutions. Known for breakthrough innovations and strategic thinking that drives teams forward.',
      stats: { velocity: 86, impact: 92, creativity: 78 },
      entry: '041',
      image: '/profile_character_img/ch1_girl.png',
      achievements: [
        'Led 3 major product launches',
        'Winner of Tech Excellence Award 2024',
        'Published 12 research papers',
      ],
      habits: ['Early riser (5 AM)', 'Daily meditation', 'Code reviews before coffee'],
      personality: ['Analytical', 'Driven', 'Collaborative', 'Detail-oriented'],
      qualities: ['Problem-solving', 'Leadership', 'Innovation', 'Resilience'],
    },
    {
      id: 'maya',
      name: 'Maya Chen',
      role: 'Master Strategist',
      tags: ['strategist', 'analyst'],
      shortTag: 'ORACLE',
      description:
        'Reads systems and people like a map. Connects scattered ideas into sharp strategies that actually ship and scale. The go-to person for impossible deadlines.',
      stats: { velocity: 80, impact: 95, creativity: 88 },
      entry: '042',
      image: '/profile_character_img/ch6_girl.png',
      achievements: [
        'Increased team efficiency by 40%',
        'Strategic consultant for Fortune 500',
        'Built 5 successful startups',
      ],
      habits: ['Strategic planning sessions', 'Weekly team syncs', 'Reading industry reports'],
      personality: ['Strategic', 'Calm under pressure', 'Empathetic', 'Visionary'],
      qualities: ['Strategic thinking', 'Communication', 'Risk assessment', 'Team building'],
    },
    {
      id: 'jordan',
      name: 'Jordan Kim',
      role: 'Creative Architect',
      tags: ['innovator', 'designer'],
      shortTag: 'SPARK',
      description:
        'Builds experiences that feel effortless on the surface and engineered underneath. Always two steps ahead on aesthetics and user experience.',
      stats: { velocity: 76, impact: 84, creativity: 93 },
      entry: '043',
      image: '/profile_character_img/ch2_boy.png',
      achievements: [
        'Design award winner 3 years running',
        'Created 50+ successful UI/UX designs',
        'Featured in Design Magazine',
      ],
      habits: ['Sketching daily', 'Design system updates', 'User testing sessions'],
      personality: ['Creative', 'Perfectionist', 'User-focused', 'Experimental'],
      qualities: ['Visual design', 'User empathy', 'Prototyping', 'Aesthetic sense'],
    },
    {
      id: 'riley',
      name: 'Riley Park',
      role: 'Volt Tactic',
      tags: ['wildcard'],
      shortTag: 'STORM',
      description:
        'Unpredictable, electric, and impossible to ignore. Turns ordinary plans into lightning moments the team remembers. The energy source of every project.',
      stats: { velocity: 90, impact: 88, creativity: 91 },
      entry: '044',
      image: '/profile_character_img/ch4_boy.png',
      achievements: [
        'Launched viral marketing campaigns',
        'Built community of 100K+ followers',
        'Turned around failing projects',
      ],
      habits: ['Brainstorming sessions', 'Networking events', 'Rapid prototyping'],
      personality: ['Energetic', 'Spontaneous', 'Charismatic', 'Adaptive'],
      qualities: ['Energy', 'Innovation', 'Networking', 'Quick thinking'],
    },
  ],
  sports: [
    {
      id: 'cameron',
      name: 'Cameron Black',
      role: 'Field Commander',
      tags: ['captain', 'sports'],
      shortTag: 'CLUTCH',
      description:
        'Holds the squad together under pressure and makes the tough calls when the clock runs out. Natural leader who elevates everyone around them.',
      stats: { velocity: 88, impact: 90, creativity: 72 },
      entry: '101',
      image: '/profile_character_img/ch5_boy.png',
      achievements: [
        'Championship MVP 3 times',
        'Led team to 5 consecutive wins',
        'All-Star selection 4 years',
      ],
      habits: ['Morning training', 'Team strategy reviews', 'Post-game analysis'],
      personality: ['Leader', 'Competitive', 'Supportive', 'Focused'],
      qualities: ['Leadership', 'Tactical thinking', 'Team motivation', 'Pressure handling'],
    },
    {
      id: 'sam',
      name: 'Sarah Taylor',
      role: 'Offense Specialist',
      tags: ['offense'],
      shortTag: 'LASER',
      description:
        'Deadly accuracy from range and an instinct for finding the smallest scoring window. The finisher who delivers when it matters most.',
      stats: { velocity: 82, impact: 87, creativity: 70 },
      entry: '102',
      image: '/profile_character_img/ch6_girl.png',
      achievements: [
        'Top scorer 2 seasons',
        'Record-breaking accuracy',
        'Rookie of the Year',
      ],
      habits: ['Target practice', 'Film study', 'Precision drills'],
      personality: ['Precise', 'Confident', 'Determined', 'Calm'],
      qualities: ['Accuracy', 'Focus', 'Timing', 'Composure'],
    },
    {
      id: 'drew',
      name: 'Drew Martinez',
      role: 'Defense Anchor',
      tags: ['defense'],
      shortTag: 'SHIELD',
      description:
        'Reads the game three moves ahead and shuts down anything that looks like a threat. The immovable force protecting the team.',
      stats: { velocity: 74, impact: 85, creativity: 65 },
      entry: '103',
      image: '/profile_character_img/ch7_boy.png',
      achievements: [
        'Best defender award',
        'Zero goals allowed streak',
        'Defensive player of year',
      ],
      habits: ['Defensive drills', 'Game tape analysis', 'Strength training'],
      personality: ['Protective', 'Alert', 'Disciplined', 'Reliable'],
      qualities: ['Positioning', 'Anticipation', 'Strength', 'Awareness'],
    },
    {
      id: 'casey',
      name: 'Casey Morgan',
      role: 'Stamina Core',
      tags: ['endurance'],
      shortTag: 'RALLY',
      description:
        'Never runs out of gas. When everyone slows down, this one quietly takes over. The engine that never quits.',
      stats: { velocity: 90, impact: 80, creativity: 68 },
      entry: '104',
      image: '/profile_character_img/ch1_girl.png',
      achievements: [
        'Marathon runner',
        'Endurance record holder',
        'Ironman competitor',
      ],
      habits: ['Long distance runs', 'Endurance training', 'Recovery routines'],
      personality: ['Persistent', 'Resilient', 'Patient', 'Strong-willed'],
      qualities: ['Stamina', 'Endurance', 'Mental toughness', 'Consistency'],
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
