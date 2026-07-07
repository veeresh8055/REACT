import React from 'react'

const Home = ( props  )  => {
  return (
    <div>
        <p> DATA     {  props.productData  }</p>
        <p> USER     {  props.user  }</p>
    </div>
  )
}

export default Home