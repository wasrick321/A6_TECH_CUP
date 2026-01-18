export interface JourneyPhase {
  id: number
  phase: string
  date: string
  title: string
  content: string
  techStack: string[]
  pokemonImg: string
  color: string
}

export const journeyData: JourneyPhase[] = [
  {
    id: 1,
    phase: "PHASE_01",
    date: "Jan 14, 2026",
    title: "THE GENESIS",
    content: "The concept was born. We rejected the standard directory format for a gamified identity system. A6 was envisioned as the ultimate Pokedex for human profiles.",
    techStack: ["Figma", "Ideation", "Concept"],
    pokemonImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    color: "#2ecc71"
  },
  {
    id: 2,
    phase: "PHASE_02",
    date: "Jan 15, 2026",
    title: "CORE SYSTEMS",
    content: "Building the React architecture. Type safety with TypeScript ensured the grid-based dashboard was robust and responsive. Component library established.",
    techStack: ["React", "TypeScript", "Vite", "3D Graphics"],
    pokemonImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    color: "#3498db"
  },
  {
    id: 3,
    phase: "PHASE_03",
    date: "Jan 16, 2026",
    title: "VISUAL MASTERY",
    content: "Pokéballs came to life in 3D. Custom WebGL components rendered spinning pokéballs with glassmorphism effects. The UI started to feel premium.",
    techStack: ["Three.js", "React Three Fiber", "GLSL", "CSS"],
    pokemonImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    color: "#e74c3c"
  },
  {
    id: 4,
    phase: "PHASE_04",
    date: "Jan 17, 2026",
    title: "PROFILE ENGINE",
    content: "Deployed 20+ profiles across 4 categories. Each profile became an interactive card with scaled images, custom animations, and rich metadata displays.",
    techStack: ["Component Design", "Data Structures", "State Management"],
    pokemonImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    color: "#f39c12"
  },
  {
    id: 5,
    phase: "PHASE_05",
    date: "Jan 20, 2026",
    title: "EMBATTLE",
    content: "The rehearsal phase. We are stress-testing the live demo, sharpening our speech, and preparing to defend our code logic against the judges. The fire is lit. Every detail matters. We are ready for battle.",
    techStack: ["Rehearsal", "Debug", "QA Testing", "Refinement"],
    pokemonImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    color: "#ff9f43"
  },
  {
    id: 6,
    phase: "PHASE_06",
    date: "Jan 21, 2026",
    title: "FINAL FORM",
    content: "This is it. We aren't just here to participate; we are here to dominate. With the craziest UI and the smoothest presentation, we are taking the win against all other sections. Every interaction is polished. Every animation is purposeful. Victory is the only option. We are unstoppable.",
    techStack: ["Victory", "Championship", "Excellence", "Triumph"],
    pokemonImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    color: "#ee5253"
  }
]
