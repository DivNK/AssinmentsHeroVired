import React ,{useEffect,useContext} from "react";
import './App.css';
import Header from './component/Header/Header';
import Lmenu from './component/Menu/Lmenu';
import DataContext from "./Context/DataContext.js";
import Main from "./component/Main/Main";
import Submain from "./component/Main/Submain"

function App() {
  let ctx = useContext(DataContext);
  console.log("In app");
  console.log(ctx);
  return (
 <>
 <Header></Header>
 <div className="top">
 <Lmenu></Lmenu>
 {/* {ctx.clicked==1? <Lmenu></Lmenu>:null} */}
 <Submain></Submain>
 

 </div></>
  );
}

export default App;
