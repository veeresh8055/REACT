import { useEffect } from 'react'
import axios from '../utils/axios'

const Home = () => {
   
    async function getData() {
         try{
           let {data} = await axios('/products')
           console.log(data[products])
         }catch{
            console.log(error)
         }
    }

useEffect(()=>{
    console.log("mounted ")
    getData();
   return console.log("unmounted...")
},[]);

  return (
    <div>Home</div>
  )
}

export default Home