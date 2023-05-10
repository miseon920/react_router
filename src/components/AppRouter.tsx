import React from 'react'
import { Routes, Route } from "react-router-dom";
import Main from '../pages/Main';
import Sub from '../pages/Sub';
import Member from '../pages/Member';
import About from './About';
import Map from './Map';
import MemberItem from './MemberItem';
import NotFound from './NotFound';


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
            <Route path="/member/*" element={<Member />}>
                {/* 여러 라우팅을 매칭하고 싶은 경우 URL 뒤에 * 을 사용한다. */}
                <Route path=":id" element={<MemberItem />} />   
            {/* /:  -> Path Variable  */}
            </Route>
            {/* 중첩라우팅시  상세페이지에서 리스트가 안보이고 싶을때  /member/* 이런식으로 /*을 붙여주면 된다. */}
            <Route path="/*" element={<NotFound />} />
        </Routes>
    </>
  )
}

export default AppRouter