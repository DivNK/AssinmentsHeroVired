
import './App.css';
import Home from './component/Home';
import Abtus from './component/Abtus';
import ContactUs from './component/ContactUs';
import { BrowserRouter as Router, Route, Routes,Link, Switch} 
        from "react-router-dom";
import Header from './component/Header';

function App() {
  return (
  <div className='App'>
<Header></Header>
<div className='container'>
<Router>
<div className='main' >
    <p><Link to="/">Home</Link></p>
    <p><Link to="Abt">About Us</Link></p>
    <p><Link to="cnt">Contact Us</Link></p>
    </div>
  <Routes>
<Route exact path="/" element={<Home></Home>}/>
<Route exact path="Abt" element={<Abtus></Abtus>}/>
<Route exact path="cnt" element={<ContactUs></ContactUs>}/>
</Routes>




</Router>
</div>
</div>

// {/* <Home></Home> */}
// {/* <Abtus></Abtus>
// <ContactUs></ContactUs> */}

  );
}

export default App;
