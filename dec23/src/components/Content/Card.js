import React,{useState} from "react";
import "./main.css"

export default function Card({val}){
    let[counter,setCounter] =useState(0);
    let[cart,setcart] =useState(0);
const increment=()=>{
    setCounter(counter+1)
}
const decrement=()=>{
    if(counter<=1)
    {
        setcart(0);
    }
  setCounter(counter-1)
  

}
const chng=()=>{
    setcart(1);
    setCounter(counter+1)

}
let rating= ((Math.round((val.rating/5)*10)/10)*5)
let res=rating.toString().replace(".","-")
    // let result = {"images/" + res +"star.jpg"}
    let result = `images/${res}star.jpg`
    let mrp=Math.round((val.price*val.discountPercentage)/100+val.price)
return(
    <div className="card">
    <div className="image-card">
            <img src={val.thumbnail} alt="product"/>
        </div>
        <div className="card-content">
            <div className="disbx">{Math.round(val.discountPercentage)}% Off</div>
            
            <div className="title">{val.title}</div>
            <div className="row">
                <span className="price">{'\u20B9'}  {val.price}</span>
                <span className="txt"> M.R.P.: </span>
                <span className="mrps"> {mrp} </span>
            </div>
        <div className="row1">
       
    
            <img src={result} alt="rating" ></img>    
      
        <div className="row2">
                   { cart==0?<button onClick={chng}>Add cart</button>:<></>}
                    {cart ==1? <><button className="addcrt" onClick={decrement}>-</button> {counter} </>:<></>}
                   {/* { cart==1?<p>{counter}</p>:<></>} */}
                 {cart ==1? <button className="addcrt" onClick={increment}>+</button>:<></>}
        </div>
     </div>
     </div>
     </div>
)

}