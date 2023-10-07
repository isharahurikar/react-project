import React ,{useState } from 'react'

export default function Counter() {
    const[count,setCount]= useState(0) 
  return (
    <div>
      the count is {count} 
      <br/>
      <button onclick={()=> setCount(count+1)}>Increment</button>
      <button onclick={()=> setCount(count+1)}>Decrement</button>

    </div>
  )
}
