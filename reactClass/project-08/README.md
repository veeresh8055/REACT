# States in Rect 
 1. class component
 2. functional components 

 ## class components 
 ``` js 
 this.state = {
    name: "John",
    age: 30
  };

  function changeName(){
    setState({ name: "Jane" });
  }

return (
    <div>
      <h1>{this.state.name}</h1>
      <h2>{this.state.age}</h2>
      <button onClick={changeName}>Change Name</button>
    </div>
  );

  ```

  ## functional components 
  ``` js 
  const [name, setName] = useState("John");
  const [age, setAge] = useState(30);
  ```