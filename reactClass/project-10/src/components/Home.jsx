import React from 'react'
import Card from './Card'

const Home = ({ productData, user, products }) => {
  return (
    <div>
      <h4>ProductData: {productData}</h4>
      <p>User: {user}</p>
      <hr />
      <h5>Products</h5>
      <Card products={products} />
    </div>
  )
}

export default Home