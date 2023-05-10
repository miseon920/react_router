import React, { useEffect } from "react";
import {
    useParams,
    useLocation,
    useSearchParams,
    useNavigate,
} from "react-router-dom";

const MemberItem = () => {
    //const params = useParams(); //{id: '1'}
    const { id } = useParams(); //path 변수를 id로 넣어주었기 때문에 비구조할당으로 이렇게 적을 수 있음
    //const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    //const params = Object.fromEntries([...searchParams]);
    //console.log('Mounted:', params);
    /*
    const pageId = searchParams.get("id");
    const name = searchParams.get("name");
    */
    useEffect(() => {
        //console.log(params,'파람'); //{id: '1'}
        console.log(id, "id"); //id값인 1,2,3,... 이 찍힘
        //console.log(location); // {pathname: '/member/2', search: '', hash: '', state: null, key: 'default'}
        //console.log("id :", pageId, "/ name : ", name);
        console.log(searchParams,'써치 파람'); // URLSearchParams {}
        /*
            쿼리 스트링이 있다면 
            console.log(searchParams.get('name')); // '어떤이름값' 이런식으로 가져올수 있다
            console.log(searchParams.entries()); // ▶ Iterator {}
            console.log([...searchParams]);
            console.log(Object.fromEntries([...searchParams])); // ▶ { id: 'id값', name: '네임값' }
        */
    }, []);
    //[searchParams]을 넣게 되면 값이 바뀔때 마다 가져오게 됨

    return <div>{id}member의 상세페이지</div>;
};

export default MemberItem;
