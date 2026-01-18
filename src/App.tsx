import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/AppShell/AppShell'
import { HomePage } from './pages/HomePage/HomePage'
import { PokedexHolo } from './pages/PokedexHolo/PokedexHolo'

function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<HomePage />} />
        <Route path="blog" element={<PokedexHolo />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
