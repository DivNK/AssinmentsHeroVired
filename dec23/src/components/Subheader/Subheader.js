import React, { useEffect } from "react";
import "./subheader.css"
export default function Subheader()
{
    // let [hover,setHover]=useState(false)

    //inline styles
    // let myStyles={
    //     backgroundColor:"grey"
    // }
    // let hoverstyle=
    // {
    //     border: hover?"1px solid black":"none"
    // }
    // const handleHoverin=()=>
    // {
    //     setHover(true)
    // }
    // const handleHoverout=()=>
    // {
    //     setHover(false)
    // }

    useEffect(() => {
        let subheader = document.querySelector(".subheader")
        console.log(subheader.children);
        let childofSubheader = subheader.children;
        for (let i = 0; i < childofSubheader.length; i++){
            childofSubheader[i].addEventListener("mouseenter", () => {
                childofSubheader[i].style.border="1px solid white"
            })
        }
        for (let i = 0; i < childofSubheader.length; i++){
            childofSubheader[i].addEventListener("mouseleave", () => {
                childofSubheader[i].style.border="none"
            })
        }

    },[])
    return(
        <div className="subheader" >
            {/* <div onMouseEnter={handleHoverin} onMouseLeave={handleHoverout} style={hoverstyle}><i className="fa fa-bars"></i>  All</div> */}
            <div ><i className="fa fa-bars"></i>   All</div>
            {/* <div>  <i className="fa fa-bars"></i> All</div> */}
            <div>Todays deal</div>
            <div>Customer</div>
            <div>Resgistry</div>
            <div>Gift Cards</div>
    
           </div>
    );
}