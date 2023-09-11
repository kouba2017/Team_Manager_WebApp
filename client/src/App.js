import { Route, Routes } from 'react-router-dom';
import './App.css';
import DisplayAll from './views/DisplayAll';
import Login_Register from './views/Login_Register';
import Register from './components/Register';
import Create from './components/Create';
import React,{ useState } from 'react';

function App() {
  const [playerList,setPlayerList]=useState([])
  return (
    <div className="App">
      <Routes>
        <Route element={<Register/>} path='/register' />
        <Route element={<Login_Register/>} path='/' />
        <Route element={<DisplayAll/>} path='/teams' />
        <Route element={<Create playerList={playerList} setPlayerList={setPlayerList} />} path='/addPlayer' />
      </Routes>
    </div>
  );
}

export default App;
