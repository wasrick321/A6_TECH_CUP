import type { Profile } from '../../types'

interface ProfileViewProps {
  profile: Profile
  onNavigateToDashboard: () => void
  onNavigateToPrevProfile: () => void
  onNavigateToNextProfile: () => void
}

export function ProfileView({
  profile,
  onNavigateToDashboard,
  onNavigateToPrevProfile,
  onNavigateToNextProfile,
}: ProfileViewProps) {
  return (
    <main className="profile-layout fade-in">
      <section className="profile-left">
        <div className="profile-image-frame glow">
          <img src={profile.image} alt={profile.name} />
        </div>
        <button className="btn pill secondary" type="button">
          {profile.tags[0]?.toUpperCase() || 'INNOVATOR'}
        </button>
        <button className="btn pill outline" type="button">
          {profile.tags[1]?.toUpperCase() || 'STRATEGIST'}
        </button>

       
      </section>

      <section className="profile-right">
        <div>
          <h1 className="profile-name">{profile.name.toUpperCase()}</h1>
          <h2 className="profile-role">{profile.role}</h2>

          <p className="profile-description">{profile.description}</p>

          <div className="profile-details">
            <div className="detail-section">
              <h4 className="detail-title">🏆 ACHIEVEMENTS</h4>
              <ul className="detail-list">
                {profile.achievements.map((ach, idx) => (
                  <li key={idx}>{ach}</li>
                ))}
              </ul>
            </div>

            <div className="detail-section">
              <h4 className="detail-title">✨ QUALITIES</h4>
              <div className="tags-list">
                {profile.qualities.map((q, idx) => (
                  <span key={idx} className="quality-tag">
                    {q}
                  </span>
                ))}
              </div>
            </div>

            <div className="detail-section">
              <h4 className="detail-title">🎯 HABITS</h4>
              <ul className="detail-list">
                {profile.habits.map((hab, idx) => (
                  <li key={idx}>{hab}</li>
                ))}
              </ul>
            </div>

            <div className="detail-section">
              <h4 className="detail-title">💫 PERSONALITY</h4>
              <div className="tags-list">
                {profile.personality.map((p, idx) => (
                  <span key={idx} className="personality-tag">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="stats-section">
            <h3 className="stats-title">CORE STATISTICS</h3>

            <div className="stat-row">
              <span>HUMOR</span>
              <div className="stat-bar">
                <div
                  className="stat-bar-fill"
                  style={{ width: `${profile.stats.velocity}%` }}
                />
              </div>
              <span className="stat-value">{profile.stats.velocity}/100</span>
            </div>

            <div className="stat-row">
              <span>NERDY</span>
              <div className="stat-bar">
                <div
                  className="stat-bar-fill"
                  style={{ width: `${profile.stats.impact}%` }}
                />
              </div>
              <span className="stat-value">{profile.stats.impact}/100</span>
            </div>

            <div className="stat-row">
              <span>CREATIVITY</span>
              <div className="stat-bar">
                <div
                  className="stat-bar-fill"
                  style={{ width: `${profile.stats.creativity}%` }}
                />
              </div>
              <span className="stat-value">{profile.stats.creativity}/100</span>
            </div>
          </div>
        </div>

        <div>
          <div className="profile-footer-actions">
            <button
              className="btn circular"
              type="button"
              onClick={onNavigateToPrevProfile}
            >
              ◀
            </button>
            <button
              className="btn circular"
              type="button"
              onClick={onNavigateToNextProfile}
            >
              ▶
            </button>
            <button className="btn circular yellow" type="button" />
            <button className="btn circular blue" type="button" />
          </div>

          <button
            className="btn back-btn-vibrant"
            type="button"
            onClick={onNavigateToDashboard}
          >
            ⬅ BACK TO LIST
          </button>
        </div>
      </section>
    </main>
  )
}
