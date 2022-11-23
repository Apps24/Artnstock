import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import silverBack from "../../assets/join/silverBack.svg";
import custIcon from "../../assets/join/Icon - Customer.svg";
import contIcon from "../../assets/join/Icon - Contributor.svg";

const Join = () => {
  // -------- Styled Components
  const MainContainer = styled.div`
    width: 100%;
    height: 86vh;
    background: #CCCCCC;
    position: relative;
  `;

  const JoinCard = styled.div`
    background: white;
    width: 69rem;
    height: 47rem;
    position: absolute;
    left: 50%;
    top: 5%;
    transform: translate(-50%, 5%);
    border-radius: 30px;
    padding: 2.2rem 0 3rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.2);
  `;

  const H1 = styled.h1`
    text-align: center;
    margin: 0;
    /* margin-top: 2rem; */
    margin-bottom: 1.5rem;
    font-size: 3.8rem;
    font-weight: 500;
    line-height: 3.8rem;
    /* letter-spacing: 0px; */
  `;

  const ButtonGroup = styled.div`
    display: flex;
    /* border: 1px solid gray; */
    /* margin: 15px 0;*/
    border-radius: 16px;
    /* overflow: hidden; */
    height: 16rem;
  `;

  const BtnDiv = styled.button`
    background: transparent;
    border: none;
    /* padding: 33px 15px 34px 15px; */
    text-align: center;
    width: 21rem;
    padding: 2.1rem 0;
    border: 1px solid #EFEFEF;
    
    cursor: pointer;
    &:nth-child(1) {
      /* background: #eeeeee; */
      background: ${(props) =>
        props.cust && userType === "customer" ? "#eeeeee" : "white"};
      border-top-left-radius: 16px;
      border-bottom-left-radius: 16px;
      border: ${(props) =>
        props.cust && userType === "customer" ? "none" : "1px solid #efefef"};
    }
    &:nth-child(2) {
      /* background: #eeeeee; */
      background: ${(props) =>
        props.con && userType === "contributor" ? "#eeeeee" : "white"};
      border-top-right-radius: 16px;
      border-bottom-right-radius: 16px;
      border: ${(props) =>
        props.cust && userType === "contributor" ? "none" : "1px solid #efefef"};
    }
    &:hover {
      background: #eeeeee;
    }
    &:focus {
      /* background: #eeeeee; */

      border: none;
    }
  `;

  const H4 = styled.h3`
    font-size: 1.8rem;
    margin: 5px 0 5px 0;
    line-height: 2.1rem;
    font-weight: 500;
    color: #333333;
  `;

  const JoinP = styled.p`
    font-size: 1.1rem;
    font-weight: 400;
    color: #757575;
    line-height: 1.3rem;
  `;

  const BotP = styled.p`
    color: #757575;
    font-size: 1.1rem;
    font-weight: 400;
    /* width: 50%; */
    text-align: center;
    margin: 0;
    line-height: 1.3rem;
  `;

  const ConBtn = styled.button`
    margin: 1.5rem 0;
    border: none;
    padding: 1.4rem 1.9rem;
    background: #333333;
    color: #ffffff;
    font-size: 1.4rem;
    font-weight: 500;
    border-radius: 50px;
    line-height: 2rem;
    cursor: pointer;
    /* height: 40px; */
  `;

  const SignInSpan = styled.p`
    font-size: 1.2rem;
    line-height: 1.2rem;
    font-weight: 500;
    margin: 0;
    margin-top: 10px;
  `;

  const OrangeText = styled.span`
    color: #f7941d;
    cursor: pointer;
  `;

  const SmallText = styled.p`
    /*width: 55%;*/
    text-align: center;
    font-size: 11px;
    font-weight: 400;
    margin: 0;
    margin-top: 15px;
  `;

  const PinkText = styled.p`
    color: #ff369f;
    font-size: 11px;
    font-weight: 400;
    margin: 0;
  `;
  
  const [userType, userTypeChange] = useState("customer");
  let navigate = useNavigate();
  const changeFirstPage = () => {
    // console.log("ap" + userType);
    // if (userType === "customer") {
    //     navigate("/customer-register" );
    // } else {
    //   navigate("/contributorreg" );

    // }
    if (userType.length >= 1) {
      sessionStorage.setItem("userType", userType);
      navigate("/user-details");
    }
  };
  return (
    <>
      <Header />
      <MainContainer first>
        <JoinCard>
          <H1>Join Artnstock</H1>
          <ButtonGroup>
            <BtnDiv cust onClick={() => userTypeChange("customer")}>
              {/* <ShoppingBagIcon style={{ color: "#888888" }} /> */}
              <img src={custIcon} alt="" />
              <H4>Customer</H4>
              <JoinP>
                Browse the marketplace
                <br />
                and find your thing. Earn 20% off
                <br /> on your first order.
              </JoinP>
            </BtnDiv>
            <BtnDiv con onClick={() => userTypeChange("contributor")}>
              {/* <ArrowUpwardIcon style={{ color: "#888888" }} /> */}
              <img src={contIcon} alt="" />

              <H4>Contributor</H4>
              <JoinP>
                Set up shop and start selling
                <br /> your Art, Photos, Footage, Music
                <br />
                and Templates
              </JoinP>
            </BtnDiv>
          </ButtonGroup>
          <SmallText>
            Please carefully read our{" "}
            <OrangeText onClick={() => navigate("/static/termsofservice")}>
              Terms of Service
            </OrangeText>
            ,{" "}
            <OrangeText onClick={() => navigate("/static/licenceagreement")}>
              License Agreement
            </OrangeText>
            ,{" "}
            <OrangeText onClick={() => navigate("/static/privacypolicy")}>
              Privacy Policy
            </OrangeText>{" "}
            and{" "}
            <OrangeText onClick={() => navigate("/static/copyrighttrademark")}>
              Copyright and Trademark Policy
            </OrangeText>
            .<br />
            Before you may use the Services, you must agree to these Terms and
            Policies. By creating an account, publishing <br /> artwork,
            purchasing products, and otherwise using the Services, you agree to
            all of the terms, policies, agreements and <br /> procedures
            relating to the Services that we may publish from time to time.
          </SmallText>

          <ConBtn onClick={() => changeFirstPage()}>Continue</ConBtn>

          <BotP>
            Sign up as Artnstock Customer for <strong>20% off</strong> your
            first order. <br /> Your coupon will be emailed after sign up.
          </BotP>
          <PinkText>
            You’ll will receive weekly updates on recently added collections.
          </PinkText>

          <SignInSpan>
            Already have an account?{" "}
            <OrangeText onClick={() => navigate("/login")}>Sign in</OrangeText>
          </SignInSpan>
        </JoinCard>
      </MainContainer>
    </>
  );
};

export default Join;
