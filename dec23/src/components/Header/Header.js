import React ,{useEffect} from "react";
import "./header.css"
export default function Headers()
{
    useEffect(() => {
        let header = document.querySelector(".section1")
        console.log(header.children);
        let childofheader = header.children;
        for (let i = 0; i < childofheader.length; i++){
            childofheader[i].addEventListener("mouseenter", () => {
                childofheader[i].style.border="1px solid white"
            })
        }
        for (let i = 0; i < childofheader.length; i++){
            childofheader[i].addEventListener("mouseleave", () => {
                childofheader[i].style.border="none"
            })
        }
        let header1 = document.querySelector(".section3")
        console.log(header1.children);
         let childofheader1 = header1.children;
        for (let i = 0; i < childofheader1.length; i++){
            childofheader1[i].addEventListener("mouseenter", () => {
                childofheader1[i].style.border="1px solid white"
            })
        }
        for (let i = 0; i < childofheader1.length; i++){
            childofheader1[i].addEventListener("mouseleave", () => {
                childofheader1[i].style.border="none"
            })
        }

    },[])
    return(
        <div className="header">
        <div className="section1">
            <div className="logo">
                <img src="images/amazon.png" alt="amazon_logo" />
            </div>
        
            <div className="deliver">
                <div className="icon">
                    <i className="fa fa-map-marker"></i>
                </div>
                <div className="deliver-content">
                    <div>Deliver to</div>
                    <div>India</div>
                </div>
            </div>
            </div>
            <div className="section2">
                <div className="searchbox">
                    
                    <select name="dropdown" id="drpdwn">
                        <option value="All">All</option>
                        <option value="Groceries">Groceries</option>
                        <option value="smartphones">Smartphones</option>
                      </select>
                </div>
                <input className="searchbar"type="text"/>
           
            </div>
            
            <div className="section3">
                
                <div className="signin">
                    <button>Signin</button></div>
                <div className="orders">
                    <span>Returns</span>
                    <span>&orders</span>
                </div>
                <div className="cart">
                    <i className="fa fa-shopping-cart">Cart</i>
                </div>
       
           </div>
        </div>
    );
}

