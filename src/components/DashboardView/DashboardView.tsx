import type { CategoryKey, Profile } from '../../types'
import { CATEGORY_LABELS } from '../../constants'

interface DashboardViewProps {
  category: CategoryKey
  profiles: Profile[]
  memoryPercent: number
  onNavigateToCategories: () => void
  onNavigateToProfile: (id: string) => void
  onCategoryChange: (category: CategoryKey) => void
}

export function DashboardView({
  category,
  profiles,
  memoryPercent,
  onNavigateToCategories,
  onNavigateToProfile,
  onCategoryChange,
}: DashboardViewProps) {
  return (
    <div className="layout fade-in">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="logo-circle glow">
            <img src="/images/A6_logo.png" alt="A6 Logo" />
          </div>
        </div>

        <nav className="sidebar-nav">
          <button
            type="button"
            className={`sidebar-link ${category === 'achievers' ? 'active' : ''}`}
            onClick={() => onCategoryChange('achievers')}
          >
            ⭐ ACHIEVERS
          </button>
          <button
            type="button"
            className={`sidebar-link ${category === 'sports' ? 'active' : ''}`}
            onClick={() => onCategoryChange('sports')}
          >
            🏆 SPORTS
          </button>
          <button
            type="button"
            className={`sidebar-link ${category === 'academics' ? 'active' : ''}`}
            onClick={() => onCategoryChange('academics')}
          >
            📚 ACADEMICS
          </button>
          <button
            type="button"
            className={`sidebar-link ${category === 'fun' ? 'active' : ''}`}
            onClick={() => onCategoryChange('fun')}
          >
            🎉 FUN MOMENTS
          </button>
        </nav>

        <div className="sidebar-footer">
          <div className="memory-label">
            <span>MEMORY BANK</span>
            <span>{memoryPercent}%</span>
          </div>
          <div className="memory-bar">
            <div
              className="memory-bar-fill"
              style={{ width: `${memoryPercent}%` }}
            />
          </div>
          <button
            className="btn scanner-btn"
            type="button"
            onClick={onNavigateToCategories}
          >
            🔍 SCANNER
          </button>
        </div>
      </aside>

      <main className="content">
        <header className="content-header">
          <div className="content-title">
            <span role="img" aria-hidden="true">
              📊
            </span>
            <h1>{CATEGORY_LABELS[category]}</h1>
          </div>
          <div className="content-header-actions">
            <button className="btn pill accent" type="button">
              EXPEDITE SCAN
            </button>
            <button className="btn pill outline" type="button">
              SYNC ARCHIVE
            </button>
          </div>
        </header>

        <div className="filter-row">
          <button className="chip active" type="button">
            ALL TYPES
          </button>
        </div>

        <section className="card-grid">
          {profiles.map((p) => (
            <article
              key={p.id}
              className="profile-card"
              onClick={() => onNavigateToProfile(p.id)}
            >
              <div className="profile-card-header">
                <span>#{p.entry}</span>
                <span>{CATEGORY_LABELS[category]}</span>
              </div>
              <div className="profile-card-main">
                <div className="profile-card-name">{p.name.toUpperCase()}</div>
                <div className="profile-card-role">{p.role}</div>
              </div>
              <div className="profile-card-tag">{p.shortTag}</div>
            </article>
          ))}
        </section>

        <button
          className="btn back-btn-vibrant lower"
          type="button"
          onClick={onNavigateToCategories}
        >
          ⬅ BACK
        </button>
      </main>
    </div>
  )
}
