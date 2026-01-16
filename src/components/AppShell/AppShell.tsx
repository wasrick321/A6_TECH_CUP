import { Outlet } from 'react-router-dom'
import styles from './AppShell.module.css'

/**
 * Minimal shell that just centers the Pokédex frame on the page.
 * All of the visual chrome comes from the A6 Dex layouts themselves.
 */
export function AppShell() {
  return (
    <div className={styles.shell}>
      <Outlet />
    </div>
  )
}
