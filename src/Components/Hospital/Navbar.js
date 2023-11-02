import { Outlet, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Link } from "react-router-dom"
import "./navbar.css";

const Container=styled.div`

`



export function Navbar(){
  const navigate=useNavigate();
  
  const mbClick = () => {
    navigate('/Mb');
  };
  const AdminClick = () => {
    navigate('/Admin');
  };


  return<>
    <Container>
      <nav>    
            <div className="na">
              <span className="brand-icon">HP</span>&nbsp;&nbsp;
              <h2>병원 예약시스템</h2> 
            </div>   
              <ul className="clearfix">
                  <li><Link to="./home">진료예약</Link>              
                      <ul>
                          <li><Link to="#">예약하기</Link></li>
                          <li><Link to="#">예약확인</Link></li>
                          <li><Link to="#">예약자현황</Link></li>
                          <li><Link to="#">병원정보</Link></li>
                      </ul>
                  </li>
                  <li><Link to="./mg">나의 관리</Link>
                      <ul>
                          <li><Link to="https://www.hira.or.kr/dummy.do?pgmid=HIRAA030009200000"target="_blank">병원내역조회</Link></li>
                          <li><Link to="https://www.kahp.or.kr/ho/medi/intro.do"target="_blank">건강검진</Link></li>
                          <li><Link to="">BMI측정</Link></li>
                      </ul>
                  </li>
                  <li><Link to="./sc">검색</Link>
                      <ul>
                          <li><Link to="">가까운병원</Link></li>
                          <li><Link to="">인기병원</Link></li>
                          <li><Link to="">내가 가본병원</Link></li>
                      </ul>
                  </li>
                  <li><Link to="./faq">FAQ</Link></li>
              </ul>
          </nav>


    <div id="sidebar">  
        <div class="barbrand">        
          <span class="Sidebabrand-icon">HP</span>
          <h2>병원 예약시스템</h2>
        </div>
        <div class="Sidebaicon1">
          <button onClick={AdminClick}>
            <iconify-icon icon="tdesign:login"width="160" height="50"></iconify-icon><h3>로그인</h3>
          </button>
          <button onClick={mbClick}>
            <iconify-icon icon="ph:user"  width="160" height="50"></iconify-icon><h3>회원가입</h3>
          </button>
        </div>
        <ul id="Sidebamenu">
          <li class="Sidebamenu-item">
            <button class="Sidebamenu-button">
              <iconify-icon class="menu-icon" icon="majesticons:chevron-down-line"></iconify-icon>
              진료예약
            </button>
            <ul class="Sidebamenu-sub">
              <li class="Sidebamenu-sub-item">
                <Link to="#">예약하기</Link>
              </li>
              <li class="Sidebamenu-sub-item">
                <Link to="#">예약확인</Link>
              </li>
              <li class="Sidebamenu-sub-item">
                <Link to="#">예약자 현황</Link>
              </li>
              <li class="Sidebamenu-sub-item">
                <Link to="#">병원정보</Link>
              </li>
            </ul>
          </li>
          <li class="Sidebamenu-item">
            <button class="Sidebamenu-button">
              <iconify-icon class="Sidebamenu-icon" icon="majesticons:chevron-down-line"></iconify-icon>
              나의 관리
            </button>
            <ul class="Sidebamenu-sub">
              <li class="Sidebamenu-sub-item">
                <Link to="https://www.hira.or.kr/dummy.do?pgmid=HIRAA030009200000">병원내역 조회</Link>
              </li>
              <li class="Sidebamenu-sub-item">
                <Link to="https://www.kahp.or.kr/ho/medi/intro.do">건강검진</Link>
              </li>
              <li class="Sidebamenu-sub-item">
                <Link to="#">BMI측정</Link>
              </li>
              <li class="Sidebamenu-sub-item">
                <Link to="#">병원정보</Link>
              </li>
            </ul>
          </li>
          <li class="Sidebamenu-item">
            <button class="menu-button">
              <iconify-icon class="menu-icon" icon="majesticons:chevron-down-line"></iconify-icon>
              검색
            </button>
            <ul class="Sidebamenu-sub">
              <li class="Sidebamenu-sub-item">
                <Link to="#">가까운 병원</Link>
              </li>
              <li class="Sidebamenu-sub-item">
                <Link to="#">인기병원</Link>
              </li>
              <li class="Sidebamenu-sub-item">
                <Link to="#">내가 가본 병원</Link>
              </li>
              <li class="Sidebamenu-sub-item">
                <Link to="#">병원정보</Link>
              </li>
            </ul>
          </li>
          <li class="Sidebamenu-item">
            <button class="Sidebamenu-button">
              <iconify-icon class="Sidebamenu-icon" icon="majesticons:chevron-down-line"></iconify-icon>
              FAQ
            </button>
          </li>
        </ul>
        <button class="menu-toggle">
          <iconify-icon icon="quill:hamburger" width="30" height="30" flip="horizontal,vertical"></iconify-icon>
        </button>
      </div>
      </Container>
    <Outlet/>
  </>
}