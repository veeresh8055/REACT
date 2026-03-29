import { useRecipeContext } from '../context/RecipeContext.jsx'

function Home() {
  const { recipes } = useRecipeContext()

  return (
    <section>
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-white">All Recipes</h1>
        <p className="text-slate-300">
          Browse every recipe you have added in one place.
        </p>
      </div>

      {recipes.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/60 p-8 text-center text-slate-300">
          No recipes yet. Go to Create and add your first one.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <article
              key={recipe.id}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-lg transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/40"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="h-44 w-full object-cover"
              />
              <div className="space-y-3 p-5">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="line-clamp-1 text-xl font-semibold text-white">
                    {recipe.title}
                  </h2>
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-teal-300">
                    {recipe.category}
                  </span>
                </div>
                <p className="text-sm text-slate-300">Chef: {recipe.chef}</p>
                <p className="line-clamp-3 text-sm text-slate-200">
                  {recipe.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default Home
