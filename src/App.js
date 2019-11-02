import React from 'react';
// import './App.css';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import Content from './Componentes/Content';
import Chat from './Componentes/Chat/Chat';
import Home from './Componentes/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
     {/* <Chat></Chat> */}
  <Content></Content>
      <Footer></Footer>
      {/* <Home></Home> */}
    </div>
  );
}

export default App;
