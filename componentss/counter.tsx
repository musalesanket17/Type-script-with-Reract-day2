import { useState } from "react"
 type counterprops = {
     init:number,
     children:JSX.Element | JSX.Element[]
 }
export const Counter=(props : counterprops)=>{
     const {init,children} = props
    const [counter,setCounter] = useState(init)

    return(
        <>
         <h1>{counter}</h1>
         {children}
         <button onClick={()=> setCounter(counter+1)} >INcrement</button>
         <button onClick={()=> setCounter(counter-1)} >Decrement</button>
        </>
    )
}