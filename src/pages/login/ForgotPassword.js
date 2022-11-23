import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { forgotUserUrl } from '../../AllUrl';
import { httpClient } from '../../axios';
import Header from '../../components/Header';


const MainContainer = styled.div`
background: url("https://zplusglobalmarketinsights.com/artNStockImages/lightBlue.jpg");
width: 100%;
height: 100vh;
position: relative;
`

const Logincard = styled.div`
background: white;
width: 485px;
height: 345px;
position: absolute;
left: 36%;
top: 5%;
border-radius: 30px;
padding: 34px 68px;
text-align: center;
`;

const Heading = styled.h1`
font-size: 38px;
line-height: 40px;
font-eight: 400;
color: #333333;
margin: 0;
margin-bottom: 20px;
`

const HeadDesc = styled.p`
    font-size: 13px;
color: #757575;
font-weight: 500;
`

const Inputtext = styled.input`
 width: 350px; 
  height: 39px;
  border-radius: 25px;
  padding-left: 17px;
  border: 1px solid #d9d9d9;
  margin-bottom: 22px;
 /* padding-left: 3%; */
  /* color: #d9d9d9 !important; */
  font-weight: 600;
  margin-top: 15px;
  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #d9d9d9 !important;
  }
`;

const ConBtn = styled.button`
    margin: 24px 0 8px 0;
    padding: 15px 25px;
    background: #333333;
    color: #ffffff;
    font-size: 14px;
    font-weight: 400;
    border-radius: 50px;
    cursor: pointer;
  `;




const ForgotPassword = () => {
    const [userEmail, setUserEmail] = useState("")
    const navigate = useNavigate();

    const forgotModel = {
        emailAddress: "",
    }

    const loginUser = () => {
        forgotModel.emailAddress = userEmail
     
        httpClient.post(forgotUserUrl, forgotModel).then((res) => {
            console.log(res);
            if(res.data.responseCode === 200 ) {
                console.log("ap");
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
                    <Heading>Forgot Your Password</Heading>
                    <HeadDesc>
                    Enter your email address below and we’ll send you a link <br />
                    to reset your password.
                    </HeadDesc>
                    <Inputtext onChange={(e) => setUserEmail(e.target.value)} firstN placeholder="Email Address" />
                    <ReCAPTCHA
                        style={{ margin: '0 0 0 60px', }}
                        sitekey="6LfTzHkgAAAAAJaW0KOMR9uatvwz2OkJuReiBkgE"
                        onChange={onChange}
                    />
                    <ConBtn onClick={loginUser} >Send Reset Link</ConBtn>
                  
                </Logincard>
            </MainContainer>
        </>
    )
}

export default ForgotPassword