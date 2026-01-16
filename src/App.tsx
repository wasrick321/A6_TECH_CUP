import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/AppShell/AppShell'
import { HomePage } from './pages/HomePage/HomePage'

function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<HomePage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
