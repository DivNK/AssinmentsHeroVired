import React,{useState,useEffect} from "react";
import "./main.css"
import axios from "axios";


// whenever this component is rendered on dom the api is called once
//whenever data is provided by api we will store in state
//we will manupulate the data to shos them in from end
export default function Main(){
let [data,setData]=useState([]);
useEffect(()=>{

    let fetchdate=async()=>{
        try{
        let res1=await axios.get("https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=25&key=AIzaSyCy2YpmeCeraJe4PT82dRXI1zfsXMkSlHo");
        // console.log(res.data.items.snippet.thumbnails.standard.url);
        // let res=await axios.get("https://dummyjson.com/products");
        // console.log(res.data.products);
        setData(res1.data.items)
        console.log(res1.data.items)
    }catch (error) 
    {
        console.log(error);
    }
    }
    fetchdate()
},[])

return(<div className="card-cont">
{data.length && data.map((ele) =>  <div className="card">
    <div className="image-card">
            <img src={ele.snippet.thumbnails.standard.url} title={ele.snippet.descrition} alt="product" width="200px"/>
        </div>
        <div className="card-content">
            
            <div className="title">{ele.snippet.title}</div>
            <div className="row">
            
                <span className="txt">{ele.snippet.channelTitle} </span>
                <span className="mrps"> </span>
            </div>

     </div>
     </div>

  )}</div>)

}

