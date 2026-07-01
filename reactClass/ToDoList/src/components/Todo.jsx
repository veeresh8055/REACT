import React,{useState} from 'react'

const Todo = () => {
    const [inputVal, setInputVal] = useState('')     
    const [todoList, setTodoList] = useState([])
    
    function addTodo(){
         setTodoList(  (pre)=> [...pre , inputVal.trim() ])
         setInputVal('')
    }

    function deleteTodo( index ){
         let newTodos = todoList.filter( (el , i) => i != index )
         setTodoList(newTodos)
        }



  return (
    <div className='todoCard'>
        <div className="todoInput">
            <input type="text" placeholder='add task'  value={inputVal} 
              onChange={(e)=>setInputVal(e.target.value)}
            />
            <button onClick={addTodo}>Add task</button>
        </div>
        <div className="todoList">
                {
                    todoList.map((el , i )=>    <p className='todo'>  text <span onClick={()=>deleteTodo(i)}> * </span> </p>)
                }

                
        </div>
    </div>
  )
}

export default Todo