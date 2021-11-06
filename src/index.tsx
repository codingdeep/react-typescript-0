import React, {useState} from "react";
import ReactDom from 'react-dom'
type FormEvent = React.FormEvent<HTMLFormElement>;
interface Todos {
    id: number,
    text: string,
    isComplete: boolean
}
export default function App():JSX.Element{
    const [value,setValue] = useState<string>("");
    const [todos,setTodos] = useState([])
    const handleSubmit=(e:FormEvent):void=>{
        e.preventDefault();
        //setValue("")
        addTodos(value)
    }

    const addTodos = (text: string)=>{
        const newTodos:Todos[] = [...todos,{text,complete: true,id:todos.length+1}];
        setTodos(newTodos)
    }

    return(
        <div>
            <h1>Hello Mr. Rubel</h1>
            <form onSubmit={handleSubmit}>
                <input value={value} type="text" onChange={(e)=>setValue(e.target.value)}/>
                <button>Submit</button>
            </form>
            <section>
                <h3>Todo listing</h3>
                <ul>
                    {todos.map((todo:Todos)=>{
                        return(
                            <li>
                                <span>{`${todo.id})`}</span>
                                <span>{todo.text}</span>
                                <button onClick={()=>setTodos(todos.filter((t:Todos)=>t.id != todo.id))}>Delete</button>
                            </li>
                        )
                    })}

                </ul>
            </section>
        </div>
    )
}

const root = document.getElementById('app-root');
ReactDom.render(<App/>, root)


