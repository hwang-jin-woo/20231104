import { Link,useNavigate } from "react-router-dom";
import styled from "styled-components"
import "./faq.css";
import { useState } from "react";
const Container=styled.div`
`


export function FAQ(){
  const navigate = useNavigate();
  const [inputValue,setInputValue]=useState("");
  const mbClick = () => {
    navigate('/Mb');
  };
  const pageClick = () => {
    navigate('/Mypage');
  };
  const AdminClick = () => {
    navigate('/Admin');
  };
  return<>
      <Container>    
        <div className="search">
          <input className="srch" value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)} placeholder="검색어를 입력하세요." />
            <button className="btn"onClick={()=>{
              setInputValue("");
              navigate(`/search?keyword=${inputValue}`);
            }}>검색</button>
        </div>
      <main id="app">  
        <div className="ap">
          <div className="form">
            <div className="login-id-wrap">
              <input placeholder="아이디" type="text" className="input-id"></input>
            </div>
            <div className="login-pw-wrap">
              <input placeholder="비밀번호" type="password" className="input-pw"></input>
            </div>
            <div className="login-btn-wrap">
              <button className="login-btn"onClick={AdminClick}>로그인</button>
            </div>
            <div className="under-login">
              <span className="stay-check">
                <input type="checkbox" name="stay-btn" value="stay" className="stay-checkbox" />로그인 상태 유지
              </span>
              <br />
              <span className="ip-check">
                <input type="checkbox" name="stay-btn" value="stay" className="ip-checkbox" />IP 보안 
              </span>
            </div>
            <div className="login-btn1">         
            <button onClick={mbClick}>회원가입</button>        
            <button onClick={pageClick}>내정보수정</button>        
            </div>       
            <span className="h1">
              <h1>게시판</h1>
            </span>
          </div>                
        </div>
      </main>
    </Container>  
  </>
}
