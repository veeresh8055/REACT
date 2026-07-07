import React from 'react'

const Card = ({ products }) => {
  return (
    <div className="card">
      <ul>
        {products.map((product) => (
          <li key={product.id}>Name: {product.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Card