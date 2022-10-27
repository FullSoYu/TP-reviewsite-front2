import React from "react";
import "../../Style/Main/Topbar.scss";
import { TiThMenu } from "react-icons/ti";
import { BiCurrentLocation } from "react-icons/bi";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/user";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const [user, setUser] = useRecoilState(userState);

  // console.log(user);
  // const navigate = useNavigate();

  // const navigateToPurchase = () => {
  //   navigate("/Mypage2");

  return (
    <>
      <div className="backbar">
        <div className="menuBar">
          <div className="siteLogo">
            <a href="/">넌 어때?</a>
          </div>
          <div className="menuList">
            <div className="menu1">
              <ul>
                <li>
                  <TiThMenu className="TiThMenu" />
                  <h3>&nbsp;&nbsp;메뉴</h3>
                </li>
                {/* <ul>
                  <li>
                    <a href="/detail">내 주변 찾기</a>
                  </li>
                  <li>
                    <a href="/main">카테고리별 찾기</a>
                  </li>
                </ul> */}
                <ul>
                  <li>
                    <a href="/main">내가 찜한 가게</a>
                  </li>
                  <li>
                    <a href="/MyReview">내가 작성한 리뷰</a>
                  </li>
                  <li>
                    <a href="/detail">상세페이지</a>
                  </li>
                  {/* <li>
                    <a href="/Mypage2">프로필 수정</a>
                  </li> */}
                </ul>
              </ul>
            </div>
            <div className="menu1 sign_btn">
              <div className="loginBtn">
                <a href="/login">
                  <h3>{!user && "로그인"}</h3>
                </a>
                <h3
                  className="logoutBtn"
                  onClick={() => {
                    if (window.confirm("로그아웃하시겠습니까?")) {
                      setUser(null);
                      window.location.href = "/main";
                    }
                  }}
                >
                  {user && "로그아웃"}
                </h3>
              </div>
              <div className="signUpBtn">
                <a href="/signUp">
                  <h3>{!user && "회원가입"}</h3>
                </a>
              </div>
              <div className="now_location">
                <BiCurrentLocation className="BiCurrentLocation" />
                <p>
                  <span id="centerAddr"></span>
                </p>
              </div>
            </div>
          </div>
          <div className="username">
            <a href="/Mypage">{user && `${user.nickname}`}</a>
            <a href="/Mypage3">{user && `${user.nickname}`}</a>
          </div>
          <div className="username usernameback">
            {user && "님 환영합니다."}
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
