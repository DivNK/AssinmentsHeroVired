import React,{useState,useEffect} from "react";
import "./main.css"
import axios from "axios";
import Card from "./Card";

// whenever this component is rendered on dom the api is called once
//whenever data is provided by api we will store in state
//we will manupulate the data to shos them in from end
export default function Main(){
let [data,setData]=useState([]);
useEffect(()=>{

    let fetchdate=async()=>{
        try{
        let res=await axios.get("https://dummyjson.com/products");
        console.log(res.data);
        setData(res.data.products)
    }catch (error)
    {
        console.log(error);
    }
    }
    fetchdate()
},[])

   
    return(<div className="cont">
    {data.length && data.map((ele) => <Card val={ele}></Card>

      )}</div>)
}

