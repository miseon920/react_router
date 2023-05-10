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
        - className={({ isActive }) => (isActive ? "원하는클래스" : "")} : 클래스를 주어 스타일을 적용 할 수 있다. 쓰지않을 경우 기본 active 효과가 붙는다.
        > 
        ```<NavLink to="/about">About</NavLink>```

6. 중첩라우팅 
    >
        <Route path="/sub" element={<Sub />}>
            <Route path="about" element={<About/>} /> 
        </Route>
    - sub/about 으로 접근 가능 sub주소와 컴포넌트도 함께 사용한다.
    - 부모인 sub 에서 import { Outlet } from 'react-router-dom'; 한 후 자식 about가 보여줄 위치에 ```<Outlet/>``` 을 쓴다.      
    - 보통 공통 레이아웃 사용을 위해 사용한다.


<https://velog.io/@reasonz/2022.07.14-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%9D%BC%EC%9A%B0%ED%84%B0-%EC%A4%91%EC%B2%A9-%EB%9D%BC%EC%9A%B0%ED%8C%85-nested-routes-outlet>

<https://jinyisland.kr/post/react-router/>

6. router props

   1. useParams : URL로 넘어온 파라미터값을 확인할 때 사용

   2. useLocation : 현재 url의 경로가 어딘지와 url로 넘어온 queryString의 값이 무엇인지를 확인할 때 사용

   3. useSearchParams : 웹페이지에 데이터를 전달할수 있는 방법 중 하나, ?뒤에 Query String 으로 key=value 형태로 전달 할 수 있음

    - 🙄useLocation 보다 useSearchParams를 사용하는 이유는 useLocation은 location 객체를 리턴하는 반면에 useSearchParams를 이용하면 URLSearchParams 객체를 가져오며 쿼리 스트링을 변경할 수 있기 때문에 더 유용하다. 

    <https://reactrouter.com/en/main/hooks/use-search-params>

    <https://velog.io/@hdmoon127/Query-String-feat.-useLocation-useSearchParams>
   
   4. useNavigate : 페이지를 이동하라 수 있는 함수를 반환, Link 사용없이 강제로 페이지 이동 - 검색옵션은 navigate를 통해서만 가능함
    - 첫 번째 인자로는 주소를 받으며 두 번째 인자로 { replace, state } 인수를 사용
        - replace (true or false) 
            > 
            - true를 쓰면 이동할 주소로 이동한후 뒤로가기가 안된다. 뒤로가기를 누르면 메인페이지("/")로 돌아가게된다.

            - false를 누르면 뒤로가기가 가능한데 이게 기본값이다.

        - state (any)
            >
            -  state: { ...list } > props로 받은 것이나 state를 넘길 수 있다.
            - 이때 넘겨준 state를 받을때 useLocation으로 받을 수 있다.
    - window의 history 를 이용한 navigate 기능도 할 수 있다.

5. useRoutes - routes를 구성
    - routes라는 배열에 사용할 컴포넌트를 할당하여 사용
    - child의 child도 정의할 수 있다. 자식 컴포넌트들을 더 렌더링해야하는 경우에 renderRoutes를 사용하는데, 이 때 전달되는 파라미터는 3가지이다.(path,element,children) => routes는 useRoutes를 감싼 wrapper이라 본인이 선호하는 것을 사용하면 됨

        ```
        let element = useRoutes([
		// Route에서 사용하는 props의 요소들과 동일
            { path: "/", element: <Main /> },
            { path: "dashboard", element: <Dashboard /> },
            {
            path: "member",
            element: <Member />,
                // 중첩 라우트의 경우도 Route에서와 같이 children이라는 property를 사용
            children: [
                { path: ":id", element: <MemberItem /> },
                { path: "about", element: <MemberAbout /> }
            ]
            },
            // NotFound 페이지
            { path: "*", element: <NotFound /> }
        ]);
            
            // element를 return함으로써 적절한 계층으로 구성된 element가 렌더링 될 수 있도록 함
        return element;
        ```

        <https://velog.io/@soryeongk/ReactRouterDomV6>