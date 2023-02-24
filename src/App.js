// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //sark mode is enable or note
  //alert state
  const[alert, setAlert] = useState(null);
  //method showAlert function ja alert msg show korte use
  const showAlert =(message, type)=>{
    setAlert({
      //age allert null cilo akn allert object husebe kaj korbe
      msg: message,
      type: type
    })
//time 1.5 sec por off hoa jabe auto allert
    setTimeout(() => {
      setAlert(null);

    },1500);

  }

  const toggleMode = ()=>{

    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
      //alert show
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
      document.title = 'TextUtils - Light Mode';

      //avabe auto add's add korte pari

      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
    }

    else{
      //setmode function () dia call korte hobe
      setMode('light');
      document.body.style.backgroundColor ='white';
        //alert show
      showAlert("Light mode has been enabled", "success");

    }
    

  }


  return (
    // <>
    // <h1>HI I Am Faruq hossain</h1>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React Faruq hossain
    //     </a>
    //   </header>
    // </div>
    // </>
    <>

<Router>
<Navbar title="TextUtil" mode={mode} toggleMode={toggleMode}/>


{/*props holo component er vitore ja info dibo tai e
 ai j title ta navbar theke pass korci aitai proops 
akta page theke onno page e sho kora */}


<Alert alert={alert}/>

<div className="container my-3">
  {/* about auto open hbe no reload */}
  
  <Switch>
        <Route exact path="/about">
          <About />
        </Route>


        <Route  exact path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below"  mode={mode} />
        </Route>
  </Switch>
  {/* <About/> */}

  </div>


</Router>
    </>

  );
}


// props 
//props holo property 
//costom component banai tahole take onek kicu dite pari ja se use korte pare nijer vitore

export default App;
