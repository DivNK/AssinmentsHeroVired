import './temp.css'
import Sitems from './Sitems';
import Sdk from './Sdk';
import React ,{useState}from "react";
import Cart from './Cart';
// import itm from './Components/StateChange';

function ListItems({item})
{
  const [itm,setItm] =useState(0)
  
  
  const buy =(name) =>
  { 
     console.log("item before"+itm)
     setItm(itm+1)
     Sitems.map((i,index)=> {
      
    if(i.name==name)
    {
       i.qty=i.qty+1
     
      
      
       
      console.log("Name"+i.name)
      console.log(i.qty)
    }  
    
   }) 
   Sdk.map(i=> {
    if(i.name==name) 
    {
      i.qty=i.qty+1
      
      console.log(i.name)
      console.log(i.qty)     
    }
   })
  //  setSitems(Sitems) 
   console.log("item after"+itm)
  }
  const rvm =(name) =>
  { 
     console.log("item before"+itm)
     if(itm==0)
     {
      alert("No items Found")
     }else{
     setItm(itm-1)
     }
     Sitems.map((i,index)=> {
      
    if(i.name==name)
    {
       i.qty=i.qty+1
      
      
       
      console.log("Name"+i.name)
      console.log(i.qty)
    }  
    
   }) 
   Sdk.map(i=> {
    if(i.name==name) 
    {
      i.qty=i.qty+1
      console.log(i.name)
      console.log(i.qty)     
    }
   })
  //  setSitems(Sitems) 
   console.log("item after"+itm)
  }
        
 
          
    
       if(item.V_NG=="Veg" || item.V_NG=="Cold" )
        {
          return(
            
                <table> 
                <tr className="fmtG">
                <td className="pic">  <img src="https://www.shutterstock.com/image-illustration/pure-veg-icon-logo-symbol-600w-2190482501.jpg" height="60%"></img>  </td>
              <td className="nm">{item.name} </td> 
              <td className="nm">{itm} </td> 
              <td className="nm">INR {item.price} </td> 
            
              
              <td className><button  onClick={()=>buy(item.name)} >Add</button></td>
              <td><button  onClick={()=>rvm(item.name)} >Remove</button></td></tr>
              
             
              </table>
        );}  
        else
        { 
         
          return(
            
                <table>
            <tr className="fmtR">
            <td className="pic"> <img src="https://www.kindpng.com/picc/m/151-1515155_veg-icon-png-non-veg-symbol-png-transparent.png" height="60%"></img> </td>
            <td className="nm">{item.name} </td> 
            <td className="nm">{itm} </td> 
            <td className="nm">INR {item.price} </td> 
            
              
            <td className><button  onClick={()=>buy(item.name)} >Add</button></td>
              <td><button  onClick={()=>rvm(item.name)} >Remove</button></td></tr>
            </table>
        
           );   
        }  
        }
        
     
 
 
        
        
      

export default ListItems;