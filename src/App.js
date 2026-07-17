
import './App.css';
import React from 'react';
import { Home } from './Home';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { SearchProvider } from './SearchContext';

function App() {


  return (
      <SearchProvider>
    <div className="App">
         <div className="loader">
    <div className="holdload"><img src="imgs/baglogo.png" alt="loading..." className="loading"/>
        <div className="loadtext">awaiting...</div>
    </div>
</div>

      <Home/>
      <Navbar/>
      <Footer/>
      
    </div>
    </SearchProvider>

  );

}

export default App;
