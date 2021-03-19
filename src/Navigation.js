import React from 'react'
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";
import Main from './Main';
  
export default function Navigation() {
    return (
       <Router>
           <Route exact path="/">
               <Main/>
           </Route>
           <Route path="/about">
               <About/>
           </Route>
           <Route path="/contact">
               <ContactUs/>
           </Route>
       </Router>
    )
}
function About(){
    return <div>Welcome to my site</div>
}
const ContactUs =()=> <div>Contact us</div>
