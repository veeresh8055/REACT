import React, { useContext } from 'react'
import { ProductContext } from '../ProductContext'
import Card from './Card'

const Women = () => {
  const { products } = useContext(ProductContext)
  const womenProducts = products.filter((product) => product.category === "women's clothing")

  return (
    <main className="home">
      <section className="home__hero">
        <p className="home__eyebrow">Women's collection</p>
        <h1 className="home__title">Filtered women’s clothing products.</h1>
      </section>

      <section className="home__grid" aria-label="Women products list">
        {womenProducts.map((product, index) => (
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

export default Women
