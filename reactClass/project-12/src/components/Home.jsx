import React, { useContext } from 'react'
import { ProductContext } from '../ProductContext'
import Card from './Card'

const Home = () => {
  const { products } = useContext(ProductContext)

  return (
    <main className="home">
      <section className="home__grid" aria-label="Product list">
        {products?.map((product, index) => (
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

export default Home
