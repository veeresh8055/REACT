import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import CreateRecipe from './pages/CreateRecipe.jsx'
import Recipes from './pages/Recipes.jsx'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 pb-10 pt-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateRecipe />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
