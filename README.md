## react router + typescript

1. npx create-react-app . --template typescript
2. 
    - npm install react-router-dom @types/react-router-dom
    - 타입스크립트 사용시 @types/moduleName 을 추가로 설치 해야한다.

3. index.js BrowserRouter로 app 감싸기
4. 라우트를 사용할 부분에 import { Routes, Route } from "react-router-dom";
    - Routes : 여러 Route를 감싸서 그 중 규칙이 일치하는 라우트 하나만을 렌더링 시켜주는 역할
    - Route : path 속성에는 경로, element 속성에는 컴포넌트 이름을 넣어준다
5. gnb 등에 a 태그 대신 Link 태그를 이용하여 to로 경로를 지정해 준다.
    - import { Link } from "react-router-dom";
        > <pre><Link to="/">홈</Link></pre>
    - import { NavLink } from "react-router-dom";
        - active 효과를 줄 수 있다.
        - className={({ isActive }) => (isActive ? "원하는클래스" : "")} : 클래스를 주어 스타일을 적용 할 수 있다.
        > <pre><NavLink to="/about">About</NavLink></pre>