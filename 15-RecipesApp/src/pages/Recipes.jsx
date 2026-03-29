import { useMemo, useState } from 'react'
import { useRecipeContext } from '../context/RecipeContext.jsx'

const defaultCategories = ['Breakfast', 'Lunch', 'Dinner', 'Dessert']

function Recipes() {
  const { recipes } = useRecipeContext()
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = useMemo(() => {
    const dynamicCategories = recipes.map((recipe) => recipe.category)
    return ['All', ...new Set([...defaultCategories, ...dynamicCategories])]
  }, [recipes])

  const filteredRecipes =
    selectedCategory === 'All'
      ? recipes
      : recipes.filter((recipe) => recipe.category === selectedCategory)

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Filter Recipes
        </h1>
        <p className="text-slate-300">
          Select a category to quickly find what you want to cook.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            className={[
              'rounded-full px-4 py-2 text-sm font-medium transition',
              selectedCategory === category
                ? 'bg-teal-400 text-slate-900 shadow-md shadow-teal-500/20'
                : 'bg-slate-900 text-slate-200 hover:bg-slate-800',
            ].join(' ')}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredRecipes.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/60 p-8 text-center text-slate-300">
          No recipes found for this category.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {filteredRecipes.map((recipe) => (
            <article
              key={recipe.id}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-lg transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/40"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="h-48 w-full object-cover"
              />
              <div className="space-y-3 p-5">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-xl font-semibold text-white">{recipe.title}</h2>
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-teal-300">
                    {recipe.category}
                  </span>
                </div>
                <p className="text-sm text-slate-300">Chef: {recipe.chef}</p>
                <p className="text-sm text-slate-200">{recipe.description}</p>
                <div>
                  <h3 className="mb-2 text-sm font-semibold text-slate-100">
                    Ingredients
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {recipe.ingredients.map((ingredient) => (
                      <span
                        key={ingredient}
                        className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-200"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default Recipes
