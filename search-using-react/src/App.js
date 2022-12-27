
import { useState } from 'react';
import './App.css';
import JSON from "./MOCK_DATA.json"
function App() {
  const [srchval,setSrchval]=useState("")
  return (
<div className='App'>
<form className='main-container'><br></br>
<p>Enter the stock to search</p>
  <input className='in-search' type="text" placeholder='Enter Stock Name' onChange={(e)=>{setSrchval(e.target.value)}}/></form>
  <div className='table-class'>
  <table>
      <th>Stock Name</th>
      <th>Sector</th>
      <th>Current Price</th>
  {JSON.map((val)=>{
    if(val.Stocks.toLowerCase().includes(srchval.toLowerCase()))
    { return (
      <tr>
        <td className='td-class'>{val.Stocks}</td>
        <td className='td-class'>{val.Sector}</td>
        <td>{val.Price}</td>
      </tr>
   
      );}
   
  }

  )}

  </table>
  </div>
</div>

  );
}

export default App;
