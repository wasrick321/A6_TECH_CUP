import type { CategoryKey } from '../../types'
import { Pokiball3D } from '../Pokiball3D/Pokiball3D'
import { Pokiball3DBlue } from '../Pokiball3D/Pokiball3DBlue'
import { Pokiball3DUltra } from '../Pokiball3D/Pokiball3DUltra'
import { Pokiball3DNet } from '../Pokiball3D/Pokiball3DNet'

interface CategoriesViewProps {
  onNavigateToWelcome: () => void
  onNavigateToDashboard: (category: CategoryKey) => void
}

export function CategoriesView({
  onNavigateToWelcome,
  onNavigateToDashboard,
}: CategoriesViewProps) {
  return (
    <main className="main-screen fade-in">
      <nav className="top-nav">
        <button
          className="nav-link"
          type="button"
          onClick={onNavigateToWelcome}
        >
          DASHBOARD
        </button>
        <button className="nav-link active" type="button">
          PROFILES
        </button>
        
      </nav>

      <section className="category-screen">
        <h2 className="section-title">SELECT CATEGORY</h2>
        <div className="title-underline" />

        <div className="category-grid">
          <button
            type="button"
            className="pokeball-card"
            onClick={() => onNavigateToDashboard('achievers')}
          >
            <div className="pokeball-image" style={{ position: 'relative' }}>
              <Pokiball3D />
            </div>
            <span className="pokeball-label">ACHIEVERS</span>
          </button>

          <button
            type="button"
            className="pokeball-card"
            onClick={() => onNavigateToDashboard('sports')}
          >
            <div className="pokeball-image" style={{ position: 'relative' }}>
              <Pokiball3DBlue />
            </div>
            <span className="pokeball-label">SPORTS</span>
          </button>

          <button
            type="button"
            className="pokeball-card"
            onClick={() => onNavigateToDashboard('academics')}
          >
            <div className="pokeball-image" style={{ position: 'relative' }}>
              <Pokiball3DUltra />
            </div>
            <span className="pokeball-label">ACADEMIC PERFORMANCE</span>
          </button>

          <button
            type="button"
            className="pokeball-card"
            onClick={() => onNavigateToDashboard('fun')}
          >
            <div className="pokeball-image" style={{ position: 'relative' }}>
              <Pokiball3DNet />
            </div>
            <span className="pokeball-label">CONTRIBUTORS</span>
          </button>
        </div>

        
      </section>
    </main>
  )
}
