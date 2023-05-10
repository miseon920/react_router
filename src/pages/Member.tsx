import React from 'react';
import { Outlet, Link } from 'react-router-dom';
//import { Routes, Route } from "react-router-dom";
//import MemberItem from '../components/MemberItem';


const Member = () => {
  return (
    <>
    <div>
        <ul>
            <li>
            <Link to="1">Member #1</Link>
            </li>
            <li>
            <Link to="2">Member #2</Link>
            </li>
            <li>
            <Link to="3">Member #3</Link>
            </li>
            <li>
            <Link to="4">Member #4</Link>
            </li>
        </ul>
        <Outlet/>
    </div>
    {/* <Routes>
        <Route path=":memberId" element={<MemberItem/>} />  
    </Routes> 
        - Outlet 없이 붙일경우 이렇게 붙일 수도 있음
    */}
    </>
  )
}

export default Member