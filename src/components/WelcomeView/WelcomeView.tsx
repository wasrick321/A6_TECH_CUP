interface WelcomeViewProps {
  onNavigateToCategories: () => void
}

export function WelcomeView({ onNavigateToCategories }: WelcomeViewProps) {
  return (
    <main className="main-screen welcome-screen fade-in">
      {/* Video Background */}
     <img 
  src="/videos/13940.gif" 
  className="welcome-video-bg"
  alt="Background"
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 0,
    borderRadius: 'inherit',
    transform: 'scale(1.3)'
  }}
/>

      {/* Dark Overlay for text readability */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
          borderRadius: 'inherit'
        }}
      />

      <nav className="top-nav" style={{ position: 'relative', zIndex: 2 }}>
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

      <section className="welcome-content" style={{ position: 'relative', zIndex: 2 }}>
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
