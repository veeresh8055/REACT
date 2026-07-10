import React, { useContext } from 'react'
import { ProductContext } from '../ProductContext'
import Card from './Card'

const Electronics = () => {
  const { products } = useContext(ProductContext)
  const electronicsProducts = products.filter((product) => product.category === 'electronics')

  return (
    <main className="home">
      <section className="home__hero">
        <p className="home__eyebrow">Electronics collection</p>
        <h1 className="home__title">Filtered electronics products.</h1>
      </section>

      <section className="home__grid" aria-label="Electronics products list">
        {electronicsProducts.map((product, index) => (
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

export default Electronics
