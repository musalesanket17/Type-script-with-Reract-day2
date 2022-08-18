import { useState } from "react"
import { setTextRange } from "typescript"
import {v4 as uuid} from "uuid"

export const Todos=()=>{
    const [text,setText] = useState("")
    const [data,setData] = useState<TodoArr[]>([])
 
     type TodoArr = {
        id:string,
        status:boolean,
        title:string
     }
    
     const HandleAdd = ()=>{
         const payload={
            title:text,
            status:false,
            id:uuid()
         }
         setData([...data,payload])
    }
 console.log(data)
    return(
        <>
        <h1>TODOS LIST</h1>
        <input value={text} onChange={e => setText(e.target.value)}/>
        <button onClick={HandleAdd} >Add Todo</button>
        {
            data.map((el)=><div  key={el.id}> 
            <h1>{el.title} </h1>
             <h2>{el.status?"Done" : "Not done"}</h2> 
             </div>)
        }
        </>
    )
}