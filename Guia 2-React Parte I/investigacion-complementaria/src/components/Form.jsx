import React,{ useState } from "react";
import Todo from "./Todo";

const Form = () => {

  var [llave]=useState(0);
  var [valor]=useState();

  //const [todo, setTodo] = useState({})
  const [todos, setTodos] = useState([
    { todo: "todo 1", llave:18 },
    { todo: "todo 2", llave:5 },
    { todo: "todo 3", llave:4 }
  ])

  /*const handleChange = e => {
    console.info([e.target.name])
    console.info(e.target.value)
    setTodo({ [e.target.name]: e.target.value },{"llave":6})
  }*/
  const cambioToDO=e=>{
    //nombreT=e.target.name;
    valor=e.target.value;
  }
  const cambioLlave=e=>{
    //nombre=e.target.name;
    llave=e.target.value;
  }
  const handleClick = e => {
    let props={
      todo: valor,
      llave: llave,
    }
    //setTodo(props)
    console.log(props.llave)
      if (Object.keys(props.todo).length===0 || props.todo.trim()==='') {
          alert('el campo no puede estar vacio')
          return          
      }
      console.info(todos);
      setTodos([...todos,props])
  }

  const deleteTodo=indice=>{
      const newTodos=[...todos]
      newTodos.splice(indice,1)
      setTodos(newTodos)
  }

  return (
    <>
      <form onSubmit={e => e.preventDefault()}>
        <label>Agregar tarea</label>
        <br />
        <input type="text" name="todo" onChange={cambioToDO} />
        <label>Agregar Número</label>
        <br />
        <input type="number" name="llave" onChange={cambioLlave}/>
        <button onClick={handleClick}>Agregar</button>
      </form>
      {todos.map((value,index) => (
        <Todo todo={value.todo} key={index} index={index} llave={value.llave} deleteTodo={deleteTodo} />
      ))}
    </>
  )
}

export default Form;