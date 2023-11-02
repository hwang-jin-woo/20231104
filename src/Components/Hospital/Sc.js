import styled from "styled-components"
import "./sc.css";
import { Link,useNavigate } from "react-router-dom";
import sc1 from "./sc.jpg"
import sc2 from "./sc1.jpg"
import sc3 from "./sc2.jpg"
import sc4 from "./sc3.jpg"
import { useState } from "react";


const Container=styled.div`
`


export function Sc(){
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
              <h1>검색</h1>
            </span>
          </div>                
          <ul className="buttons">        
            <li><Link to={"/home"}><button  className="button" ><h2>가까운병원</h2></button></Link></li>
            <li><Link to={"/home"}><button  className="button"><h2>인기병원</h2></button></Link></li>
            <li><Link to={"/home"}><button className="button"><h2>내가 가본 병원</h2></button></Link></li>
            <li><Link to={"/home"}><button className="button"><h2>병원정보</h2></button></Link></li>        
          </ul>
          <div className="scimage">
            <img src={sc1} alt="sc"  />
            <img src={sc2}  alt="sc"  />
            <img src={sc3}  alt="sc"  />
            <img src={sc4}  alt="sc"  />
          </div>
        </div>
      </main>
    </Container>  
  </>
}