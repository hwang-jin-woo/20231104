import styled from "styled-components"
import "./home.css";
import { useState } from "react";
import { Link, useNavigate} from "react-router-dom"
const Container=styled.div`


`

export function Home(){
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
              <h1>진료예약</h1>
            </span>
          </div>                
          <ul className="buttons">        
            <li><Link to={"/home"}><button className="button"><h2>예약하기</h2></button></Link></li>
            <li><Link to={"/mg"}><button className="button"><h2>예약확인</h2></button></Link></li>
            <li><Link to={"/home"}><button className="button"><h2>예약자 현황</h2></button></Link></li>
            <li><Link to={"/home"}><button className="button"><h2>병원정보</h2></button></Link></li>        
          </ul>
        </div>
        <div className="tap-panels">
          <div className="tab-panel">
            <div className="date">날짜:<input type="date" /></div>
            <div>
              <tr>
                <td>병원선택</td>
                <td>
                  <select name="nation">
                    <option value="">병원을 선택하세요.</option>
                    <optgroup label="병원">
                      <option value="medc" >내과</option>
                      <option value="surg">외과</option>
                      <option value="dent">치과</option>
                    </optgroup>
                  </select>
                </td>
              </tr>
            </div>
            <div><input type="text" /></div>
            <div>예약하기<input type="submit" value="Submit" /></div>
          </div>
        </div>
      </main>
    </Container>  
  </>
}