## react router + typescript

1. npx create-react-app . --template typescript
2. 
    - npm install react-router-dom @types/react-router-dom
    - 타입스크립트 사용시 @types/moduleName 을 추가로 설치 해야한다.

3. index.js BrowserRouter로 app 감싸기
    - BrowserRouter: History 객체를 생성하고, 초기 위치를 상태로 만들고, URL을 참조한다.

4. 라우트를 사용할 부분에 import { Routes, Route } from "react-router-dom";
    - Routes : 여러 Route를 감싸서 그 중 규칙이 일치하는 라우트 하나만을 렌더링 시켜주는 역할
        - Route Config라는 경로 객체 트리를 생성한다. Route는 Routes 안에서만 유효하다.
    - Route : path 속성에는 경로, element 속성에는 컴포넌트 이름을 넣어준다
        - path가 현재 URL과 일치하면 element가 렌더링된다.
        - path를 지정하지 않고 index를 쓰면 인덱스가 된다.
    
    <https://charles098.tistory.com/182>
        
5. gnb 등에 a 태그 대신 Link 태그를 이용하여 to로 경로를 지정해 준다.
    - import { Link } from "react-router-dom";
        > 
        ```<Link to="/">홈</Link>```
    - import { NavLink } from "react-router-dom";
        - active 효과를 줄 수 있다.
        - className={({ isActive }) => (isActive ? "원하는클래스" : "")} : 클래스를 주어 스타일을 적용 할 수 있다.
        > 
        ```<NavLink to="/about">About</NavLink>```

6. 중첩라우팅 
    >
        <Route path="/sub" element={<Sub />}>
            <Route path="about" element={<About/>} /> 
        </Route>
    - sub/about 으로 접근 가능 sub주소와 컴포넌트도 함께 사용한다.
    - 부모인 sub 에서 import { Outlet } from 'react-router-dom'; 한 후 자식 about가 보여줄 위치에 ```<Outlet/>``` 을 쓴다.      


<https://velog.io/@reasonz/2022.07.14-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%9D%BC%EC%9A%B0%ED%84%B0-%EC%A4%91%EC%B2%A9-%EB%9D%BC%EC%9A%B0%ED%8C%85-nested-routes-outlet>

<https://jinyisland.kr/post/react-router/>