import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import artImage from "../../assets/join/form1_leftBackgroung.svg";
import pinkBack from "../../assets/join/pinkback.svg";
import wallpaperImg from "../../assets/join/Wallpaper.svg";
import questionIcon from "../../assets/Icons/questionIcon.svg";
import infoIcon from "../../assets/Icons/iIcon.svg";
import errorIcon from "../../assets/join/Icon_Error.svg";
import successIcon from "../../assets/join/Icon_true.svg";
import { Tooltip } from "@mui/material";
import { httpClient } from "../../axios";
import { saveUserUrl } from "../../AllUrl";
import { useNavigate } from "react-router-dom";
import { validEmail, validName, validPassword } from "../regex";
import { Step, Stepper } from "react-form-stepper";

// -------- Styled Components
const MainContainer = styled.div`
  width: 100%;
  height: 86vh;
  background: #FF369F;
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
  background: url("${artImage}");
  /* padding: 25px 20px; */
  color: #36454f;
  overflow: hidden;
  background-size: cover;
  position: relative;
  padding: 0 1.5rem 0 2rem;
`;
const RightCon = styled.div`
  flex: 0.5;
  padding: 2.5rem 2rem 2.5rem 1.5rem;
  position: relative;
`;

const RightH3 = styled.h3`
  margin: 0;
  font-weight: 400;
  font-size: 1.8rem;
  margin-top: 2rem;
  line-height: 2rem;
`;

const ConBtn1 = styled.button`
  margin: 15px 0;
  padding: 10px 20px;
  background: #333333;
  color: #ffffff;
  border: none;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;
  border-radius: 50px;
  cursor: pointer;
  display: block;
`;

const PinkText = styled.p`
  color: #ff369f;
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0;
  margin-bottom: 4px;
`;

const Inputtext = styled.input`
  width: 100%;
  height: 4rem;
  border-radius: 25px;
  padding-left: 1.7rem;
  border: 1px solid #d9d9d9;
  /* padding-left: 3%; */
  /* color: #d9d9d9 !important; */
  font-weight: 500;
  font-size: 1.4rem;
  &:focus {
    outline: none;
  }
  &:not(:first-child) {
    margin-top: 10px;
  }
  &::placeholder {
    color: #bbbbbb !important;
  }
`;

const InputContainer = styled.div`
  position: relative;
  /* &:not(:first-child){ */
  margin-top: 10px;
  /* } */
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

const Icon = styled.img``;

const UserDetails = () => {
  const [firstName, setFirstName] = useState("");
  const [firstNameErr, setFirstNameErr] = useState(false);
  const [lastName, setLastName] = useState("");
  const [lastNameErr, setLastNameErr] = useState(false);

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(null);
  const [password, setPassword] = useState("");
  const [passErr, setPassErr] = useState(null);
  let navigate = useNavigate();

  const [usertype, setUsertype] = useState(sessionStorage.getItem("userType"));

  const [message, setMessage] = useState();
  const [message1, setMessage1] = useState();
  const [displayErr, setDisplayErr] = useState(null);

  // console.log(usertype);

  const userModel = {
    userFirstName: "",
    userLastName: "",
    displayName: "",
    emailAddress: "",
    password: "",
    userRole: [],
    shippingAddress: {
      countryName: "",
      addressLine1: "",
      addressLine2: "",
      cityName: "",
      zipCode: "",
      stateName: "",
      phoneNo: "",
    },
    residentialAddress: {
      countryName: "",
      addressLine1: "",
      addressLine2: "",
      cityName: "",
      postalCode: "",
      stateName: "",
      phoneNo: "",
    },
    socialMedia: {
      twitterLink: "",
      linkedinLink: "",
      facebookLink: "",
      googleLink: "",
      pinterestLink: "",
    },
    paymentDetails: {
      paymentName: "",
      method: "",
      paymentEmail: "",
      minPayout: "",
    },
    preferences: {
      designContent: "",
      specialOffer: "",
      productEdu: "",
      matureContent: "",
    },
    languagePreference: {
      languageCome: "",
    },
    deleteAccount: {
      deleteAccountMsg: "",
    },
  };

  const saveUserDetails = () => {
    userModel.userRole = [];
    userModel.userFirstName = firstName;
    userModel.userLastName = lastName;
    userModel.displayName = displayName;
    userModel.emailAddress = email;
    userModel.password = password;
    userModel.userRole.push(sessionStorage.getItem("userType"));
    // console.log(userModel)
    if (emailErr && passErr) {
      httpClient
        .post(saveUserUrl, userModel)
        .then((res) => {
          // console.log(res);
          if (res.data.flag === true) {
            sessionStorage.setItem("userId", res.data.id);
            sessionStorage.setItem("userMail", email);
            sessionStorage.setItem("firstName", firstName);
            sessionStorage.setItem("lastName", lastName);
            if (String(sessionStorage.getItem("userType")) === "customer") {
              navigate("/user-verifyemail");
            } else if (
              String(sessionStorage.getItem("userType")) === "contributor"
            ) {
              navigate("/user-address");
            }
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const changeFirst = (e) => {
    if (e.target.value.length > 0) {
      if (validName.test(e.target.value)) {
        setFirstNameErr(true);
      }
    } else {
      setFirstNameErr(false);
    }
    // console.log(firstNameErr);
  };

  const changeSecond = (e) => {
    if (e.target.value.length > 0) {
      if (validName.test(e.target.value)) {
        setLastNameErr(true);
      }
    } else {
      setLastNameErr(false);
    }
    // console.log(lastNameErr);
  };

  const changeEmail = (e) => {
    // console.log(e.target.value);
    if (e.target.value.length > 0) {
      if (e.target.value.includes("@") && e.target.value.includes(".")) {
        if (validEmail.test(e.target.value)) {
          setEmailErr(true);
        }
      } else {
        setEmailErr(false);
      }
    } else {
      setEmailErr(null);
    }
  };

  const changePass = (e) => {
    // console.log(e.target.value);
    if (e.target.value.length >= 8) {
      if (validPassword.test(e.target.value)) {
        setPassErr(true);
      } else {
        setPassErr(false);
      }
    } else {
      setPassErr(null);
    }
    // console.log(passErr);
  };

  const changeFirstChar = (e) => {
    const result = e.target.value.replace(/[^a-z]/gi, "");
    setMessage(result);
    setFirstName(result);
  };

  const changeLastChar = (e) => {
    const result = e.target.value.replace(/[^a-z]/gi, "");
    setMessage1(result);
    setLastName(result);
  };

  const checkDisplayName = (displayName) => {
    if(displayName.length === 0) {
setDisplayErr(null)
    } else {
    httpClient
      .get("/user_master/getDisplayNameWiseUser/" + displayName)
      .then((res) => {
        // console.log(res);
        if (res.data) {
          setDisplayErr(true);
        } else {
          setDisplayErr(false);
        }
      })
      .catch((err) => {
        // console.log(err);
        setDisplayErr(null);
      });
    }
  };
  return (
    <>
      {/* Header */}
      <Header />
      {/* Main Container */}
      <MainContainer>
        {/* Card */}
        <JoinCard2>
          {/* Left Side */}
          <LeftCon>
            <ArtImg src={wallpaperImg} />
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
                activeStep={0}
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
                activeStep={0}
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
                <Step />
              </Stepper>
            )}

            {/* Form */}
            <RightH3>Enter Your Personal Details</RightH3>
            <PinkText>All fields are required</PinkText>
            <Inputtext
              onChange={(e) => changeFirstChar(e)}
              firstN
              placeholder="First Name"
              value={message}
              onKeyUp={(event) => changeFirst(event)}
            />
            <Inputtext
              onChange={(e) => changeLastChar(e)}
              last
              placeholder="Last Name"
              value={message1}
              onKeyUp={(event) => changeSecond(event)}
            />
            <InputContainer>
              <Inputtext
                onChange={(e) => setDisplayName(e.target.value)}
                displa
                placeholder="Display Name"
                onKeyUp={(e) => checkDisplayName(e.target.value)}
              />
              {displayErr ? (
                <Icon
                  style={{ position: "absolute", right: "35px", top: "12px" }}
                  src={errorIcon}
                />
              ) : displayErr === false ? (
                <Icon
                  style={{ position: "absolute", right: "35px", top: "12px" }}
                  src={successIcon}
                />
              ) : null}
              <Tooltip
                placement="top"
                arrow
                title={
                  <div>
                    <p
                      style={{
                        color: "#757575",
                        fontSize: "1.1rem",
                        fontWeight: "400",
                        margin: 0,
                        lineHeight: "1.3rem",
                      }}
                    >
                      The name customers will see <br />
                      associated with your content. <br />
                      This will also be your name in the <br />
                      contributor forum.
                    </p>
                  </div>
                }
                componentsProps={{
                  tooltip: {
                    sx: {
                      bgcolor: "#cdfd35",
                      color: "#757575",
                      borderRadius: "10px",
                      width: "19rem",
                      height: "7rem",
                      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                      padding: "10px",
                      textAlign: "center",
                      "& .MuiTooltip-arrow": {
                        color: "#cdfd35",
                        // bgcolor: "white",
                        overflow: "hidden",
                      },
                    },
                  },
                }}
              >
                <Icon
                  style={{ position: "absolute", right: "15px", top: "12px" }}
                  src={infoIcon}
                />
              </Tooltip>
            </InputContainer>
            <InputContainer>
              <Inputtext
                onChange={(e) => setEmail(e.target.value)}
                email
                placeholder="Email Address (Your Username)"
                onKeyUp={(event) => changeEmail(event)}
              />
              {emailErr ? (
                <Icon
                  style={{ position: "absolute", right: "35px", top: "12px" }}
                  src={successIcon}
                />
              ) : emailErr === false ? (
                <Icon
                  style={{ position: "absolute", right: "35px", top: "12px" }}
                  src={errorIcon}
                />
              ) : null}
              <Tooltip
                placement="top"
                arrow
                title={
                  <div>
                    <p
                      style={{
                        color: "#757575",
                        fontSize: "11px",
                        fontWeight: "400",
                        margin: 0,
                        lineHeight: "13px",
                      }}
                    >
                      Your email address will be <br />
                      your username.
                    </p>
                  </div>
                }
                componentsProps={{
                  tooltip: {
                    sx: {
                      bgcolor: "#cdfd35",
                      color: "#757575",
                      borderRadius: "10px",
                      width: "19rem",
                      height: "4rem",
                      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                      padding: "10px",
                      textAlign: "center",
                      "& .MuiTooltip-arrow": {
                        color: "#cdfd35",
                        // bgcolor: "white",
                        overflow: "hidden",
                      },
                    },
                  },
                }}
              >
                <Icon
                  style={{ position: "absolute", right: "15px", top: "12px" }}
                  src={infoIcon}
                />
              </Tooltip>
            </InputContainer>
            <InputContainer>
              <Inputtext
                onChange={(e) => setPassword(e.target.value)}
                pass
                placeholder="Password"
                onKeyUp={(event) => changePass(event)}
              />
              {passErr ? (
                <Icon
                  style={{ position: "absolute", right: "35px", top: "12px" }}
                  src={successIcon}
                />
              ) : passErr === false ? (
                <Icon
                  style={{ position: "absolute", right: "35px", top: "12px" }}
                  src={errorIcon}
                />
              ) : null}
              <Tooltip
                placement="top"
                arrow
                title={
                  <div>
                    <p
                      style={{
                        color: "#757575",
                        fontSize: "1.1rem",
                        fontWeight: "400",
                        margin: 0,
                        lineHeight: "1.3rem",
                      }}
                    >
                      Your password must contain <br />
                      at least 8 characters <br />
                      1 lowercase, 1 uppercase letter, <br />
                      1 special character (!@#$%^&*) <br />
                      and 1 number (0–9) <br />
                      Passwords are case sensitive.
                    </p>
                  </div>
                }
                componentsProps={{
                  tooltip: {
                    sx: {
                      bgcolor: "#cdfd35",
                      color: "#757575",
                      borderRadius: "10px",
                      width: "19rem",
                      height: "9rem",
                      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                      padding: "10px",
                      textAlign: "center",
                      "& .MuiTooltip-arrow": {
                        color: "#cdfd35",
                        // bgcolor: "white",
                        overflow: "hidden",
                      },
                    },
                  },
                }}
              >
                <Icon
                  style={{ position: "absolute", right: "15px", top: "12px" }}
                  src={infoIcon}
                />
              </Tooltip>
            </InputContainer>

            <ConBtn1 onClick={saveUserDetails}>Next</ConBtn1>
          </RightCon>
        </JoinCard2>
      </MainContainer>
    </>
  );
};

export default UserDetails;
