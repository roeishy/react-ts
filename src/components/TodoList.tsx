import React from 'react'
import "./styles.css"
import { Todo } from '../model'


interface Props{
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}


const TodoList:React.FC<Props> = ({todos, setTodos}:Props) => {
    console.log("todos:",todos);
  return (
    <div className='todos'>

    </div>
  )
}

export {TodoList}
