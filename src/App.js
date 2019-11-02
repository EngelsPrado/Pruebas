import React from 'react';
// import './App.css';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import Content from './Componentes/Content';
import Chat from './Componentes/Chat/Chat';
import Home from './Componentes/Home/Home';
import {Router} from '@reach/router'

function App() {
  return (
    <div className="App">
      <Header></Header>
     {/* <Chat></Chat> */}
  {/* <Content></Content> */}
      
      {/* <Home></Home> */}

      <Router>
        <Content path='/' />
        <Home path="/home" />
  
     </Router>
     <Footer></Footer>
    </div>
  );
}

export default App;
