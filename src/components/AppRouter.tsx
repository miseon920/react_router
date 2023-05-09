import React from 'react'
import { Routes, Route } from "react-router-dom";
import Main from '../pages/Main';
import Sub from '../pages/Sub';

const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/home' element={<Main/>} />
            <Route path='/sub' element={<Sub/>} />
        </Routes>
    </>
  )
}

export default AppRouter