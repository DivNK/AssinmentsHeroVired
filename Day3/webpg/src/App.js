
import './App.css';
import ListItems from './Components/ListItems';
import './Components/NewHeading';
import NewHeading from './Components/NewHeading';
import Statevalue from './Components/Statevalue';
import Statevaluefun from './Components/Statevaluefun';
import React ,{useState}from "react";
import Sitems from './Components/Sitems';
import Sdk from './Components/Sdk';
import Cart from './Components/Cart';
// import itm from './Components/StateChange';

function App() {
  const Types=["Starters","Drinks"]
  
 
  // setSitems(setSitems.qty+1)

  // let ListEntire =[
  //   {
  //     title:"Starters",
  //     items:[
  //       {
  //         name:"Momo",
  //         price:290
  //       },
  //       {
  //         name:"Onion Rings",
  //         price:260
  //       },
  //       {
  //         name:"Spring Onion",
  //         price:250
  //       },
  //       {
  //         name:"Platters",
  //         price:350
  //       }
  //     ]
  //   },
  //   {
  //     title:"Main Course",
  //     items:[
  //       {
  //         name:"Momo",
  //         price:290
  //       },
  //       {
  //         name:"Onion Rings",
  //         price:260
  //       },
  //       {
  //         name:"Spring Onion",
  //         price:250
  //       },
  //       {
  //         name:"Platters",
  //         price:350
  //       }
  //     ]
  //   }
  // ]
  return (
    <div className="App"  >
      
 
        <NewHeading title = {Types[0]}></NewHeading>
        
    {/* {
      Sitems.map( i => <ListItems nm={i.name} pz={i.price} ty={i.V_NG}> </ListItems> )
    }  */}
           

           {
 
 Sitems.map( i => <ListItems item={i}> </ListItems> )
} 
         <NewHeading title = {Types[1]}></NewHeading>
         {/* {
      Sdk.map( i => <ListItems nm={i.name} pz={i.price} ty={i.V_NG}> </ListItems> )
    } */}
        {   
 
  Sdk.map( i => <ListItems item={i}> </ListItems> )
 } 
 {/* <Statevalue></Statevalue> 
 <Statevaluefun></Statevaluefun>  */}

<Cart val1="1" val2="2"></Cart>
    </div>
  );
}


export default App;
