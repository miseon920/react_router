import React from 'react'
import { Routes, Route } from "react-router-dom";
import Main from '../pages/Main';
import Sub from '../pages/Sub';
import Member from '../pages/Member';
import About from './About';
import Map from './Map';
import MemberItem from './MemberItem';


const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route index element={<Main/>} />
            {/* about Outlet 사용하여 중첩 해봄 = 레이아웃사용시 많이 사용함 */}
            <Route path="/sub" element={<Sub />}>
                <Route path="about" element={<About/>} /> 
                <Route path="map" element={<Map/>} /> 
            </Route>
            <Route path="/member" element={<Member />} >
                <Route path=":memberId" element={<MemberItem/>} />  
            </Route>                  
        </Routes>
    </>
  )
}

export default AppRouter