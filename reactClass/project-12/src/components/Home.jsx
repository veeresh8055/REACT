import React, { useContext } from 'react'
import { ProductContext } from '../ProductContext'
import Card from './Card'

const Home = () => {
  const { products, search } = useContext(ProductContext)
   
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  ) 

  return (
    <main className="home">
      <section className="home__grid" aria-label="Product list">
        {filteredProducts?.map((product, index) => (
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
