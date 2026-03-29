import React from 'react'
import {useForm } from 'react-hook-form'

const Create = () => {
 const {register , handlesubmit }=useForm();
//  const submitHandler = ()=>{

//  }

    return (
   <form >
      <input {...register("image")} type='url' placeholder="Enter  Image URL" className=' border-b  block  outline-0 p-2' />
        <small className='text-red-500'>This is Error</small>
      
      <input {...register("title")} type='text' placeholder="Recipe Title" className=' border-b  block  outline-0 p-2' />
        <small className='text-red-500'>This is Error</small>
      
      <textarea {...register("description")}  placeholder="Enter Description" className=' border-b  block  outline-0 p-2' />
      <small className='text-red-500'>This is Error</small>
      
      <textarea {...register("ingredients")}  placeholder="write Ingredients separated by comma(,)" className=' border-b  block  outline-0 p-2' />
      <small className='text-red-500'>This is Error</small>

      <textarea {...register("instruction")}  placeholder="write Ingredients separated by comma(,)" className=' border-b  block  outline-0 p-2' />
      <small className='text-red-500'>This is Error</small>
  
      <button className='block mt-5 bg-gray-600 rounded text-amber-200 px-4 py-2 '>Save Recipe</button>
   </form>
  )
}

export default Create
