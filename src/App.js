import React,{useContext} from 'react';
// import './App.css';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import Content from './Componentes/Content';
import Chat from './Componentes/Chat/Chat';
import Home from './Componentes/Home/Home';
import {Router,Redirect} from '@reach/router'
import Profile from './Componentes/Profile/Profile';



function App() {

  return (
    <div className="App">
      
      <Header></Header>
     {/* <Chat></Chat> */}
 
      <Router>
        <Content path='/' />
        <Home path="/home" />
        <Profile path="/profile" /> 
     </Router>
     <Footer></Footer>
    </div>
  );
}

export default App;
