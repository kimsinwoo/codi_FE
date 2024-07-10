import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import MainPage from './components/MainPage';
import NavBar from './components/NavBar';
import { useState } from 'react';

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [isSelect, setIsSelect] = useState(false)
  return (
    <Routes>
      <Route 
        path="/" 
        element={
        <div>
          <NavBar setIsSelect={setIsSelect} isLogin={isLogin} isSelect={isSelect} />
          <MainPage/>
        </div>} 
      />
    </Routes>
  );
}

export default App;
