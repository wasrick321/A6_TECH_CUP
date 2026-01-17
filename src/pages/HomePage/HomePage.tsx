import { useMemo, useState } from 'react'
import type { CategoryKey, View } from '../../types'
import { MEMORY_PERCENT } from '../../constants'
import { PROFILE_DATA } from '../../data/profiles'
import { TopBar } from '../../components/TopBar/TopBar'
import { WelcomeView } from '../../components/WelcomeView/WelcomeView'
import { CategoriesView } from '../../components/CategoriesView/CategoriesView'
import { DashboardView } from '../../components/DashboardView/DashboardView'
import { ProfileView } from '../../components/ProfileView/ProfileView'

const DATA = PROFILE_DATA

export function HomePage() {
  const [view, setView] = useState<View>('welcome')
  const [category, setCategory] = useState<CategoryKey>('achievers')
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const profiles = DATA[category]
  const filteredProfiles = profiles

  const selectedProfile = useMemo(() => {
    if (!selectedId) return profiles[0]
    return profiles.find((p) => p.id === selectedId) ?? profiles[0]
  }, [profiles, selectedId])

  const handleOpenDashboard = (nextCategory: CategoryKey) => {
    setCategory(nextCategory)
    setView('dashboard')
  }

  const handleOpenProfile = (id: string) => {
    setSelectedId(id)
    setView('profile')
  }

  const goPrevProfile = () => {
    const idx = profiles.findIndex((p) => p.id === selectedProfile.id)
    const prev = (idx - 1 + profiles.length) % profiles.length
    setSelectedId(profiles[prev]?.id ?? profiles[0].id)
  }

  const goNextProfile = () => {
    const idx = profiles.findIndex((p) => p.id === selectedProfile.id)
    const next = (idx + 1) % profiles.length
    setSelectedId(profiles[next]?.id ?? profiles[0].id)
  }

  return (
    /* Changed from <div> to <main> for better SEO */
    <main className="outer-frame wide">
      
      {/* Semantic Header for SEO */}
      <header>
        <TopBar view={view} selectedProfile={view === 'profile' ? selectedProfile : null} />
      </header>

      {/* Main Content Area */}
      <section aria-label="Main Content">
        {view === 'welcome' && (
          <WelcomeView onNavigateToCategories={() => setView('categories')} />
        )}

        {view === 'categories' && (
          <CategoriesView
            onNavigateToWelcome={() => setView('welcome')}
            onNavigateToDashboard={handleOpenDashboard}
          />
        )}

        {view === 'dashboard' && (
          <DashboardView
            category={category}
            profiles={filteredProfiles}
            memoryPercent={MEMORY_PERCENT}
            onNavigateToCategories={() => setView('categories')}
            onNavigateToProfile={handleOpenProfile}
            onCategoryChange={handleOpenDashboard}
          />
        )}

        {view === 'profile' && (
          <ProfileView
            profile={selectedProfile}
            onNavigateToDashboard={() => setView('dashboard')}
            onNavigateToPrevProfile={goPrevProfile}
            onNavigateToNextProfile={goNextProfile}
          />
        )}
      </section>

      {/* Semantic Footer for SEO */}
      <footer style={{ textAlign: 'center', padding: '10px', opacity: 0.6, fontSize: '12px' }}>
        <p>&copy; 2026 Phase 2 Project. All rights reserved. Optimized for SEO.</p>
      </footer>
    </main>
  )
}
