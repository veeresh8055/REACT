import React, { useContext } from 'react'
import { ProductContext } from '../ProductContext'
import Card from './Card'

const Men = () => {
  const { products, search } = useContext(ProductContext)
  const menProducts = products.filter(
    (product) =>
      product.category === "men's clothing" &&
      product.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="home">
      <section className="home__hero">
        <p className="home__eyebrow">Men's collection</p>
        <h1 className="home__title">Filtered men’s clothing products.</h1>
      </section>

      <section className="home__grid" aria-label="Men products list">
        {menProducts.map((product, index) => (
          <Card
            key={product.id ?? `${product.title}-${index}`}
            name={product.title}
            price={product.price}
            image={product.image}
            rating={product.rating?.rate ?? 0}
          />
        ))}
      </section>
    </main>
  )
}

export default Men
