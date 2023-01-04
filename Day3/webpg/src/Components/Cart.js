import Sitems from './Sitems';
import Sdk from './Sdk';
import './temp.css'
import { useState } from 'react';
function Cart(props)
{
  const [total,setTotal]= useState(0)
  let qtyall=0
   
 
    Sitems.map( i => qtyall=qtyall+i.qty )
   console.log("Cart"+qtyall)
  //  setTotal(qtyall) 
  
 
return(
<h2 style={{textAlign:'center'}}>Cart
<center>
<table className='cartTable' style={{textAlign:'center'}}>

        
                <th className='cartTable'>Total Items</th>
                <th className='cartTable'>Total Amount</th>
                <tr className='cartTable'>
                <td className='cartTable'>{total}</td>
                <td className='cartTable'>{props.val2}</td></tr>
    
 

  </table></center></h2>
)
}
export default Cart;