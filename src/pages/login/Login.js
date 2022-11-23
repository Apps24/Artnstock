import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { userLoginUrl } from '../../AllUrl';
import { httpClient } from '../../axios';
import Header from '../../components/Header'
import { useDispatch } from "react-redux";
import { authActions } from '../../store/authSlice';
import pinkBack from "../../assets/join/pinkback.svg"
import captchaImg from "../../assets/join/Captcha.png"


const MainContainer = styled.div`
background: #FF369F;
width: 100%;
height: 100vh;
position: relative;
`




 
const Logincard = styled.div`
background: white;
width: 48rem;
height: 40.7rem;
position: absolute;
left: 50%;
  top: 5%;
  transform: translate(-50%, 5%);
border-radius: 30px;
padding: 30px 60px;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
`;

const Heading = styled.h1`
font-size: 3.8rem;
line-height: 4rem;
font-weight: 400;
color: #333333;
margin: 0;
margin-bottom: 20px;
`

const Inputtext = styled.input`
 width: 35rem; 
  height: 4rem;
  border-radius: 25px;
  padding: 10px 0 ;
  padding-left: 17px;
  border: 1px solid #bbbbbb;
 /* padding-left: 3%; */
  /* color: #d9d9d9 !important; */
  font-size: 1.3rem;
  /* color: #bbbbbb; */
  font-weight: 600;
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: #bbbbbb !important;
  }
`;

const ConBtn = styled.button`
    margin: 0 auto;
    padding: 10px 25px;
    background: #333333;
    color: #ffffff;
    font-size: 1.4rem;
    font-weight: 400;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    /* width: 9.2rem; */
    height: 4rem;
  `;
//   const Para = styled.p`
//     text-align: center;
//     font-size: 12px;
//     color: red;
//     color: #f67030;
//   `;
//   const H5 = styled.h5`
//     text-align: center;
//     color: red;
//     margin-top: 3%;
//   `;

const LinkA = styled.a`
    font-size: 11px;
    line-height: 17px;
    font-weight: 400;
    text-decoration: none;
    cursor: pointer;
    display: block;
    margin-top: 5px;
  color: #f67030 !important;
  `;

const LinkB = styled.a`
  color: #f67030 !important;
  font-size: 1.5rem;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;
  display: block;
  margin-top: 15px;
 
`;

const ReCapDiv = styled.div`
 margin: 0;
 margin-bottom: 20px;
`

const TempImg = styled.img``

const Login = () => {
    const [userEmail, setUserEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loginModel = {
        userName: "",
        password: ""
    }

    const loginUser = () => {
        loginModel.userName = userEmail
        loginModel.password = password
        httpClient.post(userLoginUrl, loginModel).then((res) => {
            console.log(res);
            if(res.data.responseCode === 200 ) {
                navigate("/")
                dispatch(authActions.login())
            }
        })
    }

    function onChange(value) {
        console.log("Captcha value:", value);
    }
    return (
        <>
            <Header />
            <MainContainer>
                <Logincard>
                    <Heading>Customer Sign In</Heading>
                    <Inputtext onChange={(e) => setUserEmail(e.target.value)} firstN placeholder="Email Address" />
                    <Inputtext onChange={(e) => setPassword(e.target.value)} style={{ margin: "13px 0 20px 0" }} placeholder="Password" />
                    {/* <ReCAPTCHA
                        style={{ margin: '0 0 0 25px', }}
                        sitekey="6LfTzHkgAAAAAJaW0KOMR9uatvwz2OkJuReiBkgE"
                        onChange={onChange}
                    /> */}
                    <ReCapDiv>
                        <TempImg src={captchaImg} />
                    </ReCapDiv>
                    <ConBtn onClick={loginUser} >Sign In</ConBtn>
                    <LinkA onClick={() => navigate("/forgot-password")} > Forgot Password? </LinkA>
                    <LinkB onClick={() => navigate("/join")} > Create an Account </LinkB>
                </Logincard>
            </MainContainer>
        </>
    )
}

export default Login