import type { Profile } from '../../types'

interface TopBarProps {
  view: 'welcome' | 'categories' | 'dashboard' | 'profile'
  selectedProfile?: Profile | null
}

export function TopBar({ view, selectedProfile }: TopBarProps) {
  return (
    <header className="top-bar">
      <div className="window-dots">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
      </div>
      <div className="top-bar-title">
        {view === 'profile' ? 'SYSTEM ONLINE' : 'A6 DEX'}
      </div>
      <div className="top-bar-right">
        {view === 'profile' && selectedProfile
          ? `ENTRY #${selectedProfile.entry}`
          : 'LIVE FEED'}
      </div>
    </header>
  )
}
