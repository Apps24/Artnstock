import React, { useEffect, useState } from "react";
import styled from "styled-components";
import welcomeImage from "../../assets/join/welcom_leftBack.svg";
import Header from "../../components/Header";
import yellowBack from "../../assets/join/yellowBack.svg";
import blueBack from "../../assets/join/darkBlueBack.svg";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { httpClient } from "../../axios";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";
import joinImg from "../../assets/join/join.svg";
// import step3Img from "../../assets/join/step3.png";
// import step6Img from "../../assets/join/con_step6.png";
import { Step, Stepper } from "react-form-stepper";

// -------- Styled Components
const MainContainer = styled.div`
  width: 100%;
  height: 86vh;
  background: ${(props) =>
    props.changeBack ? `#6174FF` : `#FFD133`};
  position: relative;
`;

const JoinCard2 = styled.div`
  background: white;
  width: 69rem;
  height: 47rem;
  position: absolute;
  left: 50%;
  top: 5%;
  transform: translate(-50%, 5%);
  border-radius: 30px;
  display: flex;
  overflow: hidden;
  box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.2);
`;

const LeftCon = styled.div`
  flex: 0.5;
  background: url(${welcomeImage});
  padding: 0 20px 0 15px;
  color: #333333;
  overflow: hidden;
  background-size: cover;
  position: relative;
`;
const RightCon = styled.div`
  flex: 0.5;
  padding: 25px 20px 25px 15px;
  position: relative;
`;

const TempCon = styled.div`
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%; */
`;

const ArtImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const OrangeText = styled.span`
  color: #f7941d;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.7rem;
`;

const ThankP = styled.p`
  color: #333333;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.1rem;
  margin: 0;
  margin: 20px 0 15px 0;
`;

const LightP = styled.p`
  color: #757575;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.4rem;
  margin: 0;
  margin: 15px 0 15px 0;
`;


const ConBtn1 = styled.button`
  margin: 20px 0;
  padding: 10px 20px;
  background: linear-gradient(
    90deg,
    #e23c9c 0%,
    #f2d058 60.87%,
    #6edded 121.74%
  );
  color: #333333;
  font-size: 1.4rem;
  line-height: 2rem;
  font-weight: 500;
  border-radius: 50px;
  cursor: pointer;
  display: block;
  border: none;
`;

const StepImg = styled.img`
  margin-bottom: 30px;
`;

const PageHead = styled.h2`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.3rem;
  color: #bbbbbb;
  margin-bottom: 5px;
`;

const WelcomeUser = () => {
  const navigate = useNavigate();

  const [change, setChange] = useState(false);

  const [usertype, setUsertype] = useState(sessionStorage.getItem("userType"));

  useEffect(() => {
    if (usertype === "contributor") {
      setChange(true);
    } else {
      setChange(false);
    }
  }, []);

  return (
    <>
      {/* Header */}
      <Header />
      {/* Main Containr */}
      <MainContainer changeBack={change}>
        {/* Card */}
        <JoinCard2>
          {/* Left Side */}
          <LeftCon>
            <ArtImg src={joinImg} />
          </LeftCon>
          {/* Right Side */}
          <RightCon>
            {/* Steps */}
            {usertype === "contributor" ? (
              <PageHead>Contributor Registration</PageHead>
            ) : (
              <PageHead>Customer Registration</PageHead>
            )}

            {usertype === "contributor" ? (
              <Stepper
                activeStep={1}
                hideConnectors
                style={{ padding: "0" }}
                styleConfig={{
                  activeBgColor: "#BBBBBB",
                  activeTextColor: "#333333",
                  size: "1.6rem",
                  inactiveBgColor: "#EEEEEE",
                  inactiveTextColor: "#757575",
                }}
              >
                <Step
                  style={{ marginRight: "5px" }}
                  styleConfig={{
                    activeBgColor: "#BBBBBB",
                    activeTextColor: "#333333",
                    completedBgColor: "#FF369F",
                    size: "1.6rem",
                  }}
                />
                <Step style={{ marginRight: "5px" }} />
                <Step style={{ marginRight: "5px" }} />
                <Step style={{ marginRight: "5px" }} />
                <Step style={{ marginRight: "5px" }} />
                <Step style={{ marginRight: "5px" }} />
                <Step />
              </Stepper>
            ) : (
              <Stepper
                activeStep={2}
                hideConnectors
                style={{ padding: "0" }}
                styleConfig={{
                  activeBgColor: "#BBBBBB",
                  activeTextColor: "#333333",
                  size: "1.6rem",
                  inactiveBgColor: "#EEEEEE",
                  inactiveTextColor: "#757575",
                }}
              >
                <Step
                  style={{ marginRight: "5px" }}
                  styleConfig={{
                    activeBgColor: "#BBBBBB",
                    activeTextColor: "#333333",
                    completedTextColor: "#333333",
                    completedBgColor: "#FF369F",
                    size: "1.6rem",
                  }}
                />
                <Step
                  style={{ marginRight: "5px" }}
                  styleConfig={{
                    completedBgColor: "#FF7A6D",
                    completedTextColor: "#333333",
                    activeBgColor: "#BBBBBB",
                    activeTextColor: "#333333",
                    size: "1.6rem",
                  }}
                />
                <Step
                  styleConfig={{
                    activeBgColor: "#FFD133",
                    activeTextColor: "#333333",
                    size: "1.6rem",
                  }}
                />
              </Stepper>
            )}
            {/* Form */}
            <TempCon>
              <ThankP>Lets cruise in...</ThankP>
              <LightP>
                Thank you for confirming your identity verification. <br />
                Your sign up is complete, Bon Voyage!!!
              </LightP>

              <ConBtn1 onClick={() => navigate("/")}>
                Go to Artnstock
              </ConBtn1>

              <OrangeText>Go to your Dashboard</OrangeText>
            </TempCon>
          </RightCon>
        </JoinCard2>
      </MainContainer>
    </>
  );
};

export default WelcomeUser;
