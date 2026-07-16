
import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Home } from './Home';
import { Navbar } from './Navbar';
import { Footer } from './Footer';


function App() {


  return (
    <div className="App">
         <div className="loader">
    <div className="holdload"><img src="imgs/baglogo.png" className="loading"/>
        <div className="loadtext">awaiting...</div>
    </div>
</div>
      <Home/>
      <Navbar/>
      <Footer/>
    </div>
  );
}

export default App;
