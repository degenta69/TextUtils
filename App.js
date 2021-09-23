import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  const [alert, setalert] = useState(null);
  const callAlert =(message, type)=>{
   setalert({ 
     msg: message,
     type: type})
     setTimeout(() => {
       setalert(null);
     }, 1500);
  }
  const [darkMode, setdarkMode] = useState('light');
  const toggleMode= ()=>{
    if(darkMode==='dark'){
      setdarkMode('light');
      document.body.style.backgroundColor= "white";
      callAlert("NICE, light mode on","success");
    }
    else{
      setdarkMode('dark');
      document.body.style.backgroundColor= "#2b2c2d";
      callAlert(",bulls get attracted by the red color","danger");
    }
  }

  // const [colour, setColour] = useState("yellow")

  //   const coustmColor= (event)=>{
  //     let val= event.target.value;
  //       setdarkMode(val);
  //       setColour(val);
  //       console.log(colour);
  //       document.body.style.backgroundColor= colour;
  //   }
  //   const handleChange=(event)=>{
  //     setColour(event.target.value);
  //   }
  // value={colour} handleChange={handleChange} coustmColor={coustmColor}


  return (
    <>
    <Router>
      <Navbar title="TextUtils" toggleMode={toggleMode} mode={darkMode}  />  
      <Alert alert={alert}/>
      <div className="container">
        <Switch>
          <Route path="/about">
            <About mode={darkMode}/>
          </Route>
          <Route path="/">  
          {/* always use exact path instead of path */}
            <TextForm heading="TEXT" mode={darkMode} callAlert={callAlert}/>
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
