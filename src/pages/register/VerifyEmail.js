import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import verfyEmailImg from "../../assets/join/verify_leftBack.svg";
import coralBack from "../../assets/join/coralBack.svg";
import bulkImg from "../../assets/join/Bulk.svg";
import greenBack from "../../assets/join/greenBack.svg"
import { httpClient } from "../../axios";
import { updateUserEmailUrl } from "../../AllUrl";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Step, Stepper } from "react-form-stepper";
import { Checkbox } from "@mui/material";

// -------- Styled Components
const MainContainer = styled.div`
  width: 100%;
  height: 86vh;
  background: ${(props) =>
    props.changeBack ? `#A4E154` : `#FF7A6D`};
  position: relative;
`;

const OpacityCon = styled.div`
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
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
  background: url(${verfyEmailImg});
  padding: 25px 15px;
  color: #ffffff;
  overflow: hidden;
  background-size: cover;
  position: relative;
`;
const RightCon = styled.div`
  flex: 0.5;
  padding: 25px 15px 25px 15px;
  position: relative;
`;

const TempCon = styled.div`
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%; */
  margin-top: 2rem;
`;

const OrangeText = styled.span`
  color: #f88331;
  cursor: pointer;
`;

const OrangeText1 = styled.span`
  color: #f7941d;
  cursor: pointer;
`;

const PinkText = styled.p`
  color: #ff369f;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.3rem;
  margin: 0;
  margin-top: 20px;
  margin-bottom: 4px;
`;

const Inputtext = styled.input`
  height: 35px;
  border: none;
  font-size: 1.4rem;
  font-weight: 500;
  &:focus {
    outline: none;
  }
  &:not(:first-child) {
    margin-top: 10px;
  }
  &::placeholder {
    color: #d9d9d9 !important;
  }
`;

const ThankP = styled.p`
  color: #333333;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.1rem;
  margin: 0;
`;

const LightP = styled.p`
  color: #757575;
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0;
  line-height: 1.4rem;
`;

const StrongSpan = styled.span`
  font-weight: 500 !important;
  /* font-size: 12px;
color: black; */
`;

const InputContainer = styled.div`
  position: relative;
  width: 93%;
  height: 39px;
  border-radius: 25px;
  padding-left: 17px;
  border: 1px solid #d9d9d9;
`;

const ChangeBtn = styled.button`
  outline: none;
  border: none;
  color: #333333;
  font-size: 12px;
  background: #eeeeee;
  border-radius: 50px;
  padding: 5px 7px;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;

const ConBtn1 = styled.button`
  margin: 15px 0;
  padding: 10px 20px;
  background: #333333;
  color: #ffffff;
  border: none;
  font-size: 14px;
  font-weight: 400;
  border-radius: 50px;
  cursor: pointer;
  display: block;
  &:disabled {
    background: #bebebe;
  }
`;

const ArtImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const PageHead = styled.h2`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.3rem;
  color: #bbbbbb;
  margin-bottom: 5px;
`;

const SmallText1 = styled.p`
  /* width: 98%; */
  text-align: left;
  font-size: 11px;
  font-weight: 400;
  margin: 15px 0;
`;

const PopupModel = styled.div`
  position: absolute;
  z-index: 1;
  top: 20rem;
  left: 50%;
  transform: translate(-50%, 0);
  width: 25rem;
  height: 5.6rem;
  background: linear-gradient(90deg, #e23c9c 0.8%, #f2d058 50%, #6edded 99.2%);
  border-radius: 12px;
  text-align: center;
  padding: 5px 0;
`;

const PopupHead = styled.h2`
margin: 0;
font-size: 1.8rem;
font-weight: 500;
line-height: 2.6rem;
color: #242021;
`
const PopupDesc = styled.p`
margin: 0;
color: #242021;
font-size: 1.2rem;
font-weight: 400;
line-height: 1.7rem;
`

const VerifyEmail = () => {
  const [newMail, setNewMail] = useState("");
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [usertype, setUsertype] = useState(sessionStorage.getItem("userType"));
  const [acceptTerms, setAcceptTerms] = useState(false)

  const [showNot, setShowNot] = useState(false)

  const [oldMail, setOldMail] = useState(
    String(sessionStorage.getItem("userMail"))
  );

  const [userStatus, setUserStatus] = useState(false);
  const [userCount, setUserCount] = useState(1);
  const [userConCount, setUserConCount] = useState(3);
  const [change, setChange] = useState(false);

  const navigate = useNavigate();

  const sendMail = () => {
    // console.log(String(sessionStorage.getItem("userId")));
    httpClient
      .get(
        "/user_master/sendVerifyMailUser/" +
          String(sessionStorage.getItem("userId"))
      )
      .then((res) => {
        // console.log(res.data);
        if(res.data) {
          setShowNot(true)
          setTimeout(() => {
            setShowNot(false)
          }, 5000)
        }
      });
  };

  useEffect(() => {
    httpClient
      .get(
        "/user_master/checkUserStatus/" +
          String(sessionStorage.getItem("userId"))
      )
      .then((res) => {
        // console.log(res);
        sessionStorage.setItem("userStatus", res.data);
        if (res.data === "Active") {
          setUserStatus(true);
        } else {
          setUserStatus(false);
        }
        if (res.data === "InProcess") {
          sendMail();
        }
      });
  }, []);

  const changeMailAddress = () => {
    httpClient
      .put(
        updateUserEmailUrl +
          "/" +
          String(sessionStorage.getItem("userId")) +
          "/" +
          newMail
      )
      .then((res) => {
        console.log(res);
      });
  };

  const redirectWelcome = () => {
    if (usertype === "customer") {
      navigate("/user-welcomeuser");
    } else {
      navigate("/user-docupload");
    }
  };



  useEffect(() => {
    // console.log(userStatus);
    if (userStatus === true) {
      setUserCount(2);
      setUserConCount(4)
    }

    if (usertype === "contributor") {
      setChange(true);
    } else {
      setChange(false);
    }
  }, []);

  return (
    <>
    {showNot && (
    <OpacityCon> </OpacityCon>
    )}
    {showNot && (

    <PopupModel>
      <PopupHead>Email has been sent to</PopupHead>
      <PopupDesc>{oldMail}</PopupDesc>
    </PopupModel>
    )}

      {/* Header */}
      <Header />
      {/* Main Container */}
      <MainContainer changeBack={change}>
        {/* Card */}

        <JoinCard2>
          {/* Left Side */}
          <LeftCon>
            <ArtImg src={bulkImg} />
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
                activeStep={userConCount}
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
                  inactiveBgColor: "#EEEEEE",
                  inactiveTextColor: "#757575",
                  size: "1.6rem",
                }}
                />
                <Step 
                style={{ marginRight: "5px" }} 
                styleConfig={{
                  completedBgColor: "#FFD133",
                  completedTextColor: "#333333",
                  activeBgColor: "#BBBBBB",
                  activeTextColor: "#333333",
                  inactiveBgColor: "#EEEEEE",
                  inactiveTextColor: "#757575",
                  size: "1.6rem",
                }}
                />
                <Step 
                style={{ marginRight: "5px" }}
                styleConfig={{
                  completedBgColor: "#A4E154",
                  completedTextColor: "#333333",
                  activeBgColor: "#A4E154",
                  activeTextColor: "#333333",
                  inactiveBgColor: "#EEEEEE",
                  inactiveTextColor: "#757575",
                  size: "1.6rem",
                }}
                 />
                <Step style={{ marginRight: "5px" }} />
                <Step style={{ marginRight: "5px" }} />
                <Step />
              </Stepper>
            ) : (
              <Stepper
                activeStep={userCount}
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
                    inactiveBgColor: "#EEEEEE",
                    inactiveTextColor: "#757575",
                    size: "1.6rem",
                  }}
                />
                <Step
                  styleConfig={{
                    activeBgColor: "#eeeeee",
                    activeTextColor: "#757575",
                    inactiveBgColor: "#EEEEEE",
                  inactiveTextColor: "#757575",

                    size: "1.6rem",
                  }}
                />
              </Stepper>
            )}

            {/* Form */}
            {!userStatus ? (
              <TempCon>
                <ThankP>
                  Check your inbox to verify your <br />
                  email address
                </ThankP>

                <LightP style={{ margin: "13px 0 13px 0" }}>
                  We’ve sent you an email to “{oldMail}”
                </LightP>
                <LightP>
                  Click <StrongSpan>“Verify Email Address”</StrongSpan> to
                  complete your sign-up and
                  <br />
                  access the Best of Artnstock.
                </LightP>
                <ConBtn1 disabled="true">Next</ConBtn1>
                <LightP style={{ margin: "45px 0 10px 0" }}>
                  Didn’t get email?{" "}
                  <OrangeText onClick={sendMail}>Send again</OrangeText>
                </LightP>
                <LightP style={{ margin: "0 0 5px 0" }}>Not {oldMail}?</LightP>

                <InputContainer>
                  <Inputtext
                    placeholder="Change Email Address"
                    onChange={(e) => setNewMail(e.target.value)}
                  />
                  <ChangeBtn onClick={changeMailAddress}>Change</ChangeBtn>
                </InputContainer>
                <PinkText>
                  After verifying your email address, please refresh this <br />
                  page to continue.
                </PinkText>
              </TempCon>
            ) : (
              <TempCon>
                <ThankP>
                  Your email address has been <br />
                  verified
                </ThankP>

                <LightP style={{ margin: "13px 0 13px 0" }}>
                  Your email address will be your username.
                </LightP>
                <LightP>
                  Click <StrongSpan>“Next”</StrongSpan> to complete your sign-up
                  and access <br />
                  the Best of Artnstock.
                </LightP>
                <SmallText1>
                  <Checkbox checked  color="default" onChange={(e) => setAcceptTerms(e.target.checked)} />
                  I confirm that I am over 18 years of age and agree to <br />
                  Artnstock’s <OrangeText1>Terms of Service</OrangeText1>,{" "}
                  <OrangeText1>License Agreement</OrangeText1>,{" "}
                  <OrangeText1>
                    Privacy Policy <br />
                    and Copyright
                  </OrangeText1>{" "}
                  and <OrangeText1>Trademark Policy</OrangeText1>.
                </SmallText1>
                <ConBtn1
                  onClick={() => redirectWelcome()}
                >
                  Next
                </ConBtn1>
              </TempCon>
            )}
          </RightCon>
        </JoinCard2>
      </MainContainer>
    </>
  );
};

export default VerifyEmail;
