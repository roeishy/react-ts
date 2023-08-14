import React , {useRef} from 'react'
import "./styles.css"

interface Props{
  todo:string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputFeild = ({todo, setTodo, handleAdd}: Props) => {
  const inputref = useRef<HTMLInputElement>(null)
  return (
    <form className='input'
      onSubmit={(e) =>{
        handleAdd(e)
        inputref.current?.blur();
      }}>
        <input type='input'
          ref={inputref} 
          value={todo}
          onChange={
            (e)=>setTodo(e.target.value)
          } 
          placeholder='Enter a task' className='input__box' />
        <button className='input__submit' type='submit'>
            Go
        </button>
    </form>
  )
}

//export default InputFeild
export {InputFeild};
