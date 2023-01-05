import React ,{useEffect, useState,useContext} from "react";
import "./header.css"
import DataContext from "../../Context/DataContext";
export default function Header()

{
    const [select,setSelect]=useState(0)
    const [frmb,setFrmb]=useState(0)
    const [mic,setMic]=useState(0)
    const [bell,setBell]=useState(0)
    const [butt,setButt]=useState(0)
    const [dis,setDis]=useState(1)
    let ctx = useContext(DataContext);
    useEffect( ()=>{
        let hrinp = document.querySelector(".frmin")
       
        hrinp.addEventListener("focus",()=>{
            console.log("selected")
            setSelect(1)
        })
        hrinp.addEventListener("focusout",()=>{
            console.log("selected")
            setSelect(0)
        })
        let hr_sec3 = document.querySelector(".ardfa")
        hr_sec3.addEventListener("mouseenter",()=>{
            console.log("selected1")
            setFrmb(1)
        })
        hr_sec3.addEventListener("mouseleave",()=>{
            console.log("selected1")
            setFrmb(0)
        })
        let hr_mic = document.querySelector(".ar-mic")
        hr_mic.addEventListener("mouseenter",()=>{
            console.log("selected1")
            setMic(1)
        })
        hr_mic.addEventListener("mouseleave",()=>{
            console.log("selected1")
            setMic(0)
        })
        let hr_bell = document.querySelector(".ard-bell")
        hr_bell.addEventListener("mouseenter",()=>{
            console.log("selected1")
            setBell(1)
        })
        hr_bell.addEventListener("mouseleave",()=>{
            console.log("selected1")
            setBell(0)
        })
        let hr_b = document.querySelector(".frmbutton")
        hr_b.addEventListener("mouseenter",()=>{
            console.log("selected1")
            setButt(1)
        })
        hr_b.addEventListener("mouseleave",()=>{
            console.log("selected1")
            setButt(0)
        })
        // let hr_ard = document.querySelector(".around")
       
        // hr_ard.addEventListener("click",()=>{
        //     console.log("selected12")
        //     console.log(ctx.clicked);
        //     // console.log(dis);
        //     if (ctx.clicked==0){
        //         console.log("if");
        //         ctx.setClicked(1)
        //     }
        //     if (ctx.clicked==1){console.log("else");
        //     ctx.setClicked(0)
        //     console.log(ctx.clicked);
        //     }
        
        // }
        // )

        
    },[]
    )
   
    return(<div className="header">
    <div className="container_header">
        <div className="sec1">
            <div className="around"><i className="fa-light fa-bars fa-2x"></i></div>
        <div className="ard">
       
            <img src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg" width="85"/>
        </div>
        </div>
        <div className="sec2">
        <div className="cont2">
            <form className="frmsrch">
            <i className="fa fa-search fa-lg" aria-hidden="true" style={{visibility: select ? 'visible' : 'hidden' }} ></i>
            <input className="frmin" type="text" placeholder="Search" style={{fontSize:15}}></input>
        </form>
        <button className="frmbutton"><i className="fa fa-search fa-lg"></i></button>
        <div className="ar-mic">
       
       <img src="https://cdn.iconscout.com/icon/free/png-256/microphone-2087963-1768174.png" width="25"/></div>
        </div>
        </div>
        <div className="sec3">
            <div>
        <div className="ardfa">
            <i class="fal fa-video-plus fa-2x" width="25"></i>
            
        </div>
        </div>
        
        <div className="ard-bell">
        <i class="fa-light fa-bell fa-2x"></i>
        </div>
        <div className="ard">
       
       <img src="https://cdn.iconscout.com/icon/free/png-128/avatar-365-456317.png" width="25"/>
   </div>
        
        </div>
        
    </div>  
    {frmb==1?<p style={{marginLeft:'92%' ,backgroundColor:'grey',borderRadius:'4px',width:'40px'}}>Create</p>:<></>}
    {mic==1?<p style={{marginLeft:'70%' ,backgroundColor:'grey',borderRadius:'4px',width:'120px'}}>Search with your voice</p>:<></>}
    {bell==1?<p style={{marginLeft:'93%' ,backgroundColor:'grey',borderRadius:'4px',width:'80px'}}>Notifications</p>:<></>}
    {butt==1?<p style={{marginLeft:'66%' ,backgroundColor:'grey',borderRadius:'4px',width:'80px'}}>Search</p>:<></>}
    </div>
    )
}
