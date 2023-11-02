import styled from "styled-components"
import "./mg.css";
import { Link,useNavigate } from "react-router-dom";
import mg1 from "./mg1.jpg"
import mg2 from "./mg2.jpg"
import mg3 from "./mg3.png"
import mg4 from "./mg4.jpg"
import { useState } from "react";

const Container=styled.div`
`





export function Mg(){
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

  const handleOpenNewTab = (url) => {
    window.open(url, "_blank", "noopener, noreferrer");
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
              <h1>나의관리</h1>
            </span>
          </div>                
          <ul className="buttons">        
            <li><button className="button"onClick={() => handleOpenNewTab("https://www.hira.or.kr/dummy.do?pgmid=HIRAA030009200000")}><h2>병원내역 조회</h2></button></li>
            <li><button className="button"onClick= {() => handleOpenNewTab("https://www.kahp.or.kr/ho/medi/intro.do")}><h2>건강검진</h2></button></li>
            <li><Link to={"/home"}><button className="button"><h2>BMI측정</h2></button></Link></li>
            <li><Link to={"/home"}><button className="button"><h2>병원정보</h2></button></Link></li>        
          </ul>
          <div className="mgimage">
            <img src={mg1} alt="sc"  />
            <img src={mg2}  alt="sc"  />
            <img src={mg3}  alt="sc"  />
            <img src={mg4}  alt="sc"  />
          </div>
        </div>
      </main>
    </Container>  
  </>
}