import React from 'react'

const Card = ({ name, price, image, rating = 0 }) => {
  const safeRating = Math.max(0, Math.min(5, Number(rating) || 0))
  const fullStars = Math.floor(safeRating)
  const hasHalfStar = safeRating - fullStars >= 0.5

  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        <img className="product-card__image" src={image} alt={name} />
        <div className="product-card__badge">Premium Pick</div>
      </div>

      <div className="product-card__body">
        <div className="product-card__header">
          <h3 className="product-card__title">{name}</h3>
          <div className="product-card__price">${price}</div>
        </div>

        <div className="product-card__meta">
          <div className="product-card__rating" aria-label={`Rating ${safeRating} out of 5`}>
            <span className="product-card__stars" aria-hidden="true">
              {'★'.repeat(fullStars)}
              {hasHalfStar ? '⯨' : ''}
              {'☆'.repeat(5 - fullStars - (hasHalfStar ? 1 : 0))}
            </span>
            <span className="product-card__rating-value">{safeRating.toFixed(1)}</span>
          </div>

          <span className="product-card__chip">In stock</span>
        </div>
      </div>
    </article>
  )
}

export default Card
