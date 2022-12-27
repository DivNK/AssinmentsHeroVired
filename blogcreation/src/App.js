import React from "react";
import "./App.css";

import logo from './component/pic_main.jpg';
import logo1 from './component/pic_trulli.jpg';

import { useRef } from "react";

function App() {
  const home =useRef(null);
    const pg1 =useRef(null);
    const login =useRef(null);

    const scrolltosec = (eleRef) => {
      console.log("test")
window.scrollTo({
top: eleRef.current.offsetTop,
behavior:"smooth",

});
    };
  return (
<div>
<div ref={home} className="home">
    <img src={logo} className="imghome"/>
    
    
    <div className="header">
      <ul>
        <li onClick={()=>scrolltosec(home)} className="link">Home</li>
        <li onClick={()=>scrolltosec(pg1)} className="link">Page1</li>
        <li onClick={()=>scrolltosec(login)} className="link">Login</li>
        </ul>
    </div>


    <h1 className="htext">Sometimes the most scenic roads in life are the detours you didn’t mean to take</h1>
   <div className="containerlocal">
   
        
    <img src="https://images.unsplash.com/photo-1568849676085-51415703900f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" className="imghome"/>
<div class="text">
    We were caught in the rat race, feeling trapped by our lives and constantly searching for something more. We  have always lived a life less ordinary.
But it wasn’t until 2008 that we finally found what we had been searching for all along…our passion.

That passion turned out to be travel. And it paid off too! We’ve not only been able to make a living out of our travels.
</div>

</div></div>
<br>
  </br>
  <br>
  </br>
  <br>
  </br>
  <br>
  </br>
<div ref={pg1} className="pg1">

<div className="header">
      <ul>
        <li onClick={()=>scrolltosec(home)} className="link">Home</li>
        <li onClick={()=>scrolltosec(pg1)} className="link">Page1</li>
        <li onClick={()=>scrolltosec(login)} className="link">Login</li>
        </ul>
    </div>
    <h1 className="htext">Pondicherry - French Riviera of the East</h1>
    

    <p >If Jaipur is the Pink City and Jodphur is the Blue City, then Pondicherry is certainly the Yellow City. Pondicherry was like a dream. A beautiful dream that was full of clean sandy beaches, laid back colourful streets and European architecture.</p>
        
       <p>I kept asking myself  ‘Am I in India or France?’.</p> 
        
       <p> It’s quite a bizarre feeling seeing all French on street signs, cafés and from people’s mouths here! But, the food was to die for. A perfect taste of home and welcome comfort food.
        
        They even had a mini Notre-dame, but here it was a lovely shade of salmon pink and was framed with palm trees.
        
        It was like it had its own mood, a rhythm. As you walk around the laid back atmosphere is catching.
        
        The people are so friendly and it’s far less touristy than Goa in the West. This was one of my favourite places in South India.
        
    </p> 
    <p> Pondicherry is a paradise for food lovers. You will find a variety of restaurants, cafes, and bars in Pondicherry offering authentic cuisine. Some of the restaurant where I tried their foods are:
        </p>

    <div className="container" >
        <div className="center" >
         
            <img src={logo1} alt="Paradise" />
          
      
    </div></div>
       
    <h2>Must Try Eateries</h2>
    
<ul>
<li><a href="https://www.lavillashanti.com/en"> Villa Shanti </a> The ambiance of this place is just amazing. This restaurant offers multi-cuisine. We tried there Ravioli & Stuffed Chicken Breast. </li>
<li><a href="https://cityseeker.com/puducherry/728492-le-cafe">Le Cafe, Promenade </a> This is the only cafe where I keep visiting every evening during my trip. This cafe is White Town’s only cafe which is located on the waterfront and is open for 24 hours. This cafe is maintained by the government. We love the place because of the atmosphere and breathtaking view.  </li>
<li><a href="https://www.zomato.com/puducherry/gelateria-montecatini-terme-white-town">Gelateria Montecatini Terme (GMT) </a> If you have a sweet tooth, don’t forget to try authentic Italian style gelato available in various flavors such as mango, guava, pineapple, etc. </li>
<li><a href="https://www.zomato.com/cafextasi">Tanto Pizzeria and Cafe Xtasi </a> is one of the best places to enjoy mouth-watering wood-fired Pizza. </li>
</ul>       
    <p>

    <a href="https://www.facebook.com/tblogger/" class="fa fa-facebook"></a>
    <a href="https://twitter.com/thetblogger" class="fa fa-twitter"></a>
    <a href="https://www.instagram.com/travelbloggeres/" class="fa fa-instagram"></a>
      
    </p>
    </div>
<div ref={login} className="login">
<div className="header">
      <ul>
        <li onClick={()=>scrolltosec(home)} className="link">Home</li>
        <li onClick={()=>scrolltosec(pg1)} className="link">Page1</li>
        <li onClick={()=>scrolltosec(login)} className="link">Login</li>
        </ul>
    </div>
    
    <form id="payment">
    <fieldset>
        <legend >Personal Details</legend>
        <table >
            <tr>
                <td >
                <label for="nm">UserName </label></td>
                <td >
                    <input type="text" name="nm"/>
                </td>
            </tr>
            <tr>
                <td >
                <label for="email">Email </label></td>
                <td >
                    <input type="email" name="email"/>
                </td>
            </tr>
            <tr>
                <td >
                <label for="phn">Contact </label></td>
                <td >
                    <input type="number" name="phn"/>
                </td>
            </tr>
        </table>
    </fieldset>
    <fieldset>
        <legend>Delivery Information</legend>
    <table>
        <tr>
            <td>
                <label for="addr">Address</label>
            </td>
            <td>
                <textarea name="addr"></textarea>
            </td>
        </tr>
        <tr>
            <td >
            <label for="pin">Pin Code </label></td>
            <td >
                <input type="number" name="pin"/>
            </td>
        </tr>
        <tr>
            <td>
                <label for="cntry">Country</label>
            </td>
            <td>
                <datalist namr="cntry"></datalist>
                <select name="cntry">
                    <option value="usa">USA</option>
                    <option value="china">China</option>
                    <option value="india">India</option>
                </select>
            </td>
        </tr>
        
    </table>
    </fieldset><br></br>
    <center> <button value="Submit">Submit</button>   </center>
</form>


    </div>

   



</div>
  );
}

export default App;
