import { useState } from "react";

function Statevaluefun()
{
 const [qty , setQty] = useState(0)
 const buy =() =>{
    setQty(qty+1)
 }
 const rum =() =>{
    if(qty==0)
    {
        alert("Quantity 0")
    }else{
    setQty(qty-1)
    }
 }
 return(
    <>
        <h1>Items ordered {qty}</h1>
       
        <button type='button' onClick={buy}>Add more</button>
        <button type='button' onClick={rum}>Remove</button>
        </>
 )
}

export default Statevaluefun;