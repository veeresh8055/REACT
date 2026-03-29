import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Create', path: '/create' },
  { label: 'Recipes', path: '/recipes' },
]

function Navbar() {
  const getLinkStyles = ({ isActive }) =>
    [
      'rounded-full px-4 py-2 text-sm font-medium transition',
      isActive
        ? 'bg-teal-400 text-slate-900 shadow-md shadow-teal-500/20'
        : 'text-slate-300 hover:bg-slate-800 hover:text-white',
    ].join(' ')

  return (
    <header className="sticky top-0 z-10 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <NavLink
          to="/"
          className="text-lg font-semibold tracking-wide text-white hover:text-teal-300"
        >
          Recipe Manager
        </NavLink>

        <div className="flex flex-wrap gap-2">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={getLinkStyles}>
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
