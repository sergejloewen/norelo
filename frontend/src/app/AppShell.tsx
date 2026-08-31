import { NavLink, Outlet } from 'react-router-dom'

export function AppShell() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-brand">Norelo</div>

        <div className="app-user">
          User
        </div>
      </header>

      <div className="app-body">
        <aside className="app-sidebar">
          <nav>
            <NavLink to="/" end>
              Dashboard
            </NavLink>

            <NavLink to="/projects">
              Projects
            </NavLink>

            <NavLink to="/tasks">
              Tasks
            </NavLink>
          </nav>

          <nav>
            <NavLink to="/settings">
              Settings
            </NavLink>
          </nav>
        </aside>

        <section className="app-content">
          <Outlet />
        </section>
      </div>
    </div>
  )
}