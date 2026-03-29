import { createContext, useContext, useEffect, useState } from 'react'

const RecipeContext = createContext(null)
const STORAGE_KEY = 'recipe-manager-recipes'

const getStoredRecipes = () => {
  if (typeof window === 'undefined') return []

  try {
    const storedRecipes = window.localStorage.getItem(STORAGE_KEY)
    if (!storedRecipes) return []
    const parsedRecipes = JSON.parse(storedRecipes)
    return Array.isArray(parsedRecipes) ? parsedRecipes : []
  } catch {
    return []
  }
}

export function RecipeProvider({ children }) {
  const [recipes, setRecipes] = useState(getStoredRecipes)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes])

  const addRecipe = (recipe) => {
    setRecipes((previousRecipes) => [recipe, ...previousRecipes])
  }

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe }}>
      {children}
    </RecipeContext.Provider>
  )
}

export function useRecipeContext() {
  const context = useContext(RecipeContext)

  if (!context) {
    throw new Error('useRecipeContext must be used within a RecipeProvider')
  }

  return context
}

export default RecipeContext
