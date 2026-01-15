export type CategoryKey = 'achievers' | 'sports' | 'academics' | 'fun'

export type Profile = {
  id: string
  name: string
  role: string
  tags: string[]
  shortTag: string
  description: string
  stats: { velocity: number; impact: number; creativity: number }
  entry: string
  image: string
  achievements: string[]
  habits: string[]
  personality: string[]
  qualities: string[]
}

export type View = 'welcome' | 'categories' | 'dashboard' | 'profile'
