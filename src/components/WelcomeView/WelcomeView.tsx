interface WelcomeViewProps {
  onNavigateToCategories: () => void
}

export function WelcomeView({ onNavigateToCategories }: WelcomeViewProps) {
  return (
    <main className="main-screen welcome-screen fade-in">
      <nav className="top-nav">
        <button className="nav-link active" type="button">
          DASHBOARD
        </button>
        <button
          className="nav-link"
          type="button"
          onClick={onNavigateToCategories}
        >
          PROFILES
        </button>
      </nav>

      <section className="welcome-content">
        <div className="welcome-logo">
          <div className="logo-circle glow">
            <img src="/images/A6_logo.png" alt="A6 Logo" />
          </div>
        </div>

        <div className="welcome-text">
          <p className="welcome-subtitle">WELCOME TO</p>
          <h1 className="welcome-title">A6 DEX!</h1>
          <button
            className="btn primary large"
            type="button"
            onClick={onNavigateToCategories}
          >
            EXPLORE!
          </button>
        </div>
      </section>
    </main>
  )
}
