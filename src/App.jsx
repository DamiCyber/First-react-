import React from 'react';
import Nav from "./component/Nav";
import Counter from './component/Counter';
import Home from './component/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import About from "./component/About"
function App() {
  return (
    <>
      <Routes path="/" element={<Nav />}>
        <Route path='/' element={<Navbar />} />
        <Route path='/' element={<Counter />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;



