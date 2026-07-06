import React, { useState } from 'react'

const controlledForm = () => {
     const [email, setEmail] = useState("")
   const [username, setusername] = useState("")
   const [password, setpassword] = useState("")

   const [userDetails, setuserDetails] = useState([])
   const [user, setuser] = useState({})
    
   function handleForm(e){
    e.preventDefault() ;
     let userData =  { email , username , password }
     setuser(userData)

   }

   console.log(user)


  return (
    <form action=""  onSubmit={handleForm}>
       <input type="text"  placeholder='Email'  value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type="text" placeholder='Username'  value={username} onChange={(e)=>setusername(e.target.value)} />
      <input type="text" placeholder='Password' value={password} onChange={(e)=>setpassword(e.target.value)} />
      <button>Submit</button>
    </form>
  )
}

export default controlledForm