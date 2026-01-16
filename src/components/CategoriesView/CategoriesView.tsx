import type { CategoryKey } from '../../types'

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
        <div className="nav-search">
          <input type="text" placeholder="Search..." disabled />
          <span className="search-icon">🔍</span>
        </div>
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
            <img
              className="pokeball-image"
              src="/images/ball1.png"
              alt="Achievers Pokéball"
            />
            <span className="pokeball-label">ACHIEVERS</span>
          </button>

          <button
            type="button"
            className="pokeball-card"
            onClick={() => onNavigateToDashboard('sports')}
          >
            <img
              className="pokeball-image"
              src="/images/ball2.png"
              alt="Sports Pokéball"
            />
            <span className="pokeball-label">SPORTS</span>
          </button>

          <button
            type="button"
            className="pokeball-card"
            onClick={() => onNavigateToDashboard('academics')}
          >
            <img
              className="pokeball-image"
              src="/images/ball3.png"
              alt="Academic Pokéball"
            />
            <span className="pokeball-label">ACADEMIC PERFORMANCE</span>
          </button>

          <button
            type="button"
            className="pokeball-card"
            onClick={() => onNavigateToDashboard('fun')}
          >
            <img
              className="pokeball-image"
              src="/images/ball4.png"
              alt="Fun Pokéball"
            />
            <span className="pokeball-label">FUN MOMENTS</span>
          </button>
        </div>

        <button
          className="btn back-btn-vibrant"
          type="button"
          onClick={onNavigateToWelcome}
        >
          ⬅ BACK
        </button>
      </section>
    </main>
  )
}
