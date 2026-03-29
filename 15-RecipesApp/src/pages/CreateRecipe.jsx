import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { useRecipeContext } from '../context/RecipeContext'

const initialValues = {
  image: '',
  title: '',
  description: '',
  chef: '',
  ingredients: '',
  category: '',
}

function CreateRecipe() {
  const { addRecipe } = useRecipeContext()
  const [message, setMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
  })

  const onSubmit = (formData) => {
    const ingredientsArray = formData.ingredients
      .split(',')
      .map((ingredient) => ingredient.trim())
      .filter(Boolean)

    if (ingredientsArray.length === 0) {
      setError('ingredients', {
        type: 'manual',
        message: 'Add at least one ingredient separated by commas.',
      })
      return
    }

    const recipe = {
      id: nanoid(),
      image: formData.image.trim(),
      title: formData.title.trim(),
      description: formData.description.trim(),
      chef: formData.chef.trim(),
      ingredients: ingredientsArray,
      category: formData.category.trim(),
    }

    addRecipe(recipe)
    setMessage('Recipe added successfully')
    reset(initialValues)
  }

  const inputClassName =
    'w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30'

  return (
    <section className="mx-auto max-w-3xl">
      <div className="mb-6 space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Create Recipe
        </h1>
        <p className="text-slate-300">
          Fill in the details below and save your recipe.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/30"
      >
        <div className="space-y-2">
          <label htmlFor="image" className="text-sm font-medium text-slate-200">
            Image URL
          </label>
          <input
            id="image"
            type="text"
            {...register('image', { required: 'Image URL is required' })}
            className={inputClassName}
            placeholder="https://example.com/recipe-image.jpg"
          />
          {errors.image ? (
            <p className="text-sm text-rose-400">{errors.image.message}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label htmlFor="title" className="text-sm font-medium text-slate-200">
            Recipe Title
          </label>
          <input
            id="title"
            type="text"
            {...register('title', { required: 'Recipe title is required' })}
            className={inputClassName}
            placeholder="Spicy Veggie Pasta"
          />
          {errors.title ? (
            <p className="text-sm text-rose-400">{errors.title.message}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="description"
            className="text-sm font-medium text-slate-200"
          >
            Description
          </label>
          <input
            id="description"
            type="text"
            {...register('description', { required: 'Description is required' })}
            className={inputClassName}
            placeholder="Describe the dish and why it is special."
          />
          {errors.description ? (
            <p className="text-sm text-rose-400">{errors.description.message}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label htmlFor="chef" className="text-sm font-medium text-slate-200">
            Chef Name
          </label>
          <input
            id="chef"
            type="text"
            {...register('chef', { required: 'Chef name is required' })}
            className={inputClassName}
            placeholder="Chef Alex"
          />
          {errors.chef ? (
            <p className="text-sm text-rose-400">{errors.chef.message}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="ingredients"
            className="text-sm font-medium text-slate-200"
          >
            Ingredients (comma separated)
          </label>
          <input
            id="ingredients"
            type="text"
            {...register('ingredients', {
              required: 'Ingredients are required',
            })}
            className={inputClassName}
            placeholder="Pasta, Tomato, Garlic, Olive Oil"
          />
          {errors.ingredients ? (
            <p className="text-sm text-rose-400">{errors.ingredients.message}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="category"
            className="text-sm font-medium text-slate-200"
          >
            Category (Breakfast / Lunch / Dinner / Dessert)
          </label>
          <input
            id="category"
            type="text"
            {...register('category', { required: 'Category is required' })}
            className={inputClassName}
            placeholder="Breakfast"
          />
          {errors.category ? (
            <p className="text-sm text-rose-400">{errors.category.message}</p>
          ) : null}
        </div>

        <button
          type="submit"
          className="rounded-xl bg-teal-400 px-5 py-3 font-semibold text-slate-900 transition hover:bg-teal-300"
        >
          Save Recipe
        </button>

        {message ? (
          <p className="text-sm font-medium text-emerald-400">{message}</p>
        ) : null}
      </form>
    </section>
  )
}

export default CreateRecipe
