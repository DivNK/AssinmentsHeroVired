import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [temp,setTemp]=useState(10)
  const [color,setColor]=useState("rgba(0, 0, 255 ,1)")
  
  const inctemp=()=>
  {
    console.log("inside");
    switch (temp+1)
    {
      
      case 11:setColor("rgba(0, 0, 255 ,.8)");break
      case 12:setColor("rgba(0, 0, 255 ,.5)");break
      case 13:setColor("rgba(0, 0, 255 ,.3)");break
      case 14:setColor("rgba(255, 0, 0, .1)");break
      case 16:setColor("rgba(255, 0, 0, .3)");break
      case 17:setColor("rgba(255, 0, 0, .5)");break
      case 18:setColor("rgba(255, 0, 0, .7)");break
      case 19:setColor("rgba(255, 0, 0, .9)");break
      case 20:setColor("rgba(255, 0, 0, 1)");break
      case 21:setColor("rgba(255, 0, 0, 1)");break
      case 22:setColor("rgba(240, 0, 0, 1)");break
      case 23:setColor("rgba(225, 0, 0, 1)");break
      case 24:setColor("rgba(210, 0, 0, 1)");break
      case 25:setColor("rgba(195, 0, 0, 1)");break


    }

    if(temp-1<10)
    {
      setColor("rgba(0, 0, 255 ,1)")
    }else if (temp-1>25)
    {
      setColor("rgba(195, 0, 0, 1)")
    }
    setTemp(temp+1);
  }
  const dectemp=()=>
  {
    switch (temp-1)
    {
      
      case 11:setColor("rgba(0, 0, 255 ,.8)");break
      case 12:setColor("rgba(0, 0, 255 ,.5)");break
      case 13:setColor("rgba(0, 0, 255 ,.3)");break
      case 14:setColor("rgba(255, 0, 0, .1)");break
      case 16:setColor("rgba(255, 0, 0, .3)");break
      case 17:setColor("rgba(255, 0, 0, .5)");break
      case 18:setColor("rgba(255, 0, 0, .7)");break
      case 19:setColor("rgba(255, 0, 0, .9)");break
      case 20:setColor("rgba(255, 0, 0, 1)");break
      case 21:setColor("rgba(255, 0, 0, 1)");break
      case 22:setColor("rgba(240, 0, 0, 1)");break
      case 23:setColor("rgba(225, 0, 0, 1)");break
      case 24:setColor("rgba(210, 0, 0, 1)");break
      case 25:setColor("rgba(195, 0, 0, 1)");break


    }
    if(temp-1<10)
    {
      setColor("rgba(0, 0, 255 ,1)")
    }else if (temp-1>25)
    {
      setColor("rgba(195, 0, 0, 1)")
    }
    setTemp(temp-1)
  }
  return (
   <div className='app-container'>
    <div className='temp-cont'>
      <div className='temp-dis-component' style={{background: `${color}`}}>{temp}°C</div>

    </div>
<div className='button-class'>
<button onClick={dectemp}>-</button>
  <button onClick={inctemp}>+</button>
 
</div>
   </div>

  );
}

export default App;
