import React from 'react'
import { Outlet } from 'react-router-dom';

const Sub = () => {
  return (
    <div>Sub
        <Outlet/>
        {/*Outlet 중첩 라우터 후 outlet을 쓰고 불러오면 중첩으로 부를 수 있다. - 레이아웃 만들때 거의 사용*/}
    </div>
  )
}

export default Sub