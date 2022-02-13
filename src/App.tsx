import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './shared/Header/Header';
import BookPage from './pages/BookPage/BookPage';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/:title' element={<BookPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
