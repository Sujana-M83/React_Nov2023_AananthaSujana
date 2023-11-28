import './App.css';
import React from 'react';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Registration from './components/Registration';
import About from './components/About';
import Contact from './components/Contact';
import Help from './components/Help';
import Menu from './components/Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext } from 'react';
export const Context=createContext(null);
function App() {
  return (
    <div className="App">
      <Context.Provider value={"094 711 80 97"}>
      <BrowserRouter>
        <Routes>
          {/* Set the default route to the Login page */}
          <Route path="/" element={<Registration />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/m" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/con" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
      </Context.Provider>
    </div>
    
  );
}

export default App;
