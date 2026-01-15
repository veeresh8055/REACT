
const App = () => {
    // Rendereing all the datatypes in javascript in the react dom [view of a website ]
  let n = 10 ;
  let s = "hello react";
  let b = true ;  // here null true and undefined are not show oon the view page beacuse these are the keywords in javascript . keywords are not render on the browser 
  let nu= null ;
  let un = undefined ;

  // non primitive datatype

  let arr = [1,2,3,"hello ", 2,true , null , "centre ", ' 211'];

  //  objects are not render on view its shows error "Objects are not valid as a React child"
  let obj = {}


 
  return (
    <>
  
        <h1>number : {n}</h1>
        <h1>String : {s}</h1>
        <h1>Boolean  : {b}</h1>
        <h1>null : {nu}</h1>
        <h1>undefined : {un}</h1>
        <p>here boolean , null and undefined are not view on browser because these are the keywords in Javascript so we only use them in our code not to show on the browser ... </p>
        <br />
        <br />
        <br />
        <h1>Array : {arr}</h1>
        <h1>Objects : {}</h1>
        <p>here, directly we are not render the objects it gives us error "Objects are not valid as a React child"</p>

    </>
  )
}

export default App