import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import AadharUploadBtn from '../../components/Others/AadharUploadBtn';
import { Step, Stepper } from "react-form-stepper";
import { httpClient } from '../../axios';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import lightGreenBack from "../../assets/join/lightGreenBack.svg"
import lefftBack from "../../assets/join/signLeftBack.svg"
import bulkImg from "../../assets/join/Bulk.svg";


const MainContainer = styled.div`
  width: 100%;
  height: 86vh;
  background: #00D9C6;
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
  background: url("${lefftBack}");
  padding: 25px 20px 25px 15px;
  color: #36454f;
  overflow: hidden;
  background-size: cover;
  position: relative;
`;
const RightCon = styled.div`
  flex: 0.5;
  padding: 25px 20px 25px 15px;
  position: relative;
`;

const ArtImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


const Heading = styled.h1`
  font-size: 1.8rem;
  margin: 0;
  color: #333333;
  line-height: 2.1rem;
  margin-bottom: 15px;
  margin-top: 15px;
`;

const Desc = styled.p`
  font-size: 12px;
  color: #757575;
  margin: 0;
`;

const OrangeText = styled.span`
  color: #f88331;
  margin: 0;
`;



const UploadingText = styled.p`
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.3rem;
  color: #757575;
`;



const ConBtn1 = styled.button`
  /* margin: 15px 0; */
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
  &:disabled {
    background: #bebebe;
  }
`;

const PageHead = styled.h2`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.3rem;
  color: #bbbbbb;
  margin-bottom: 5px;
`;

const StrongText = styled.span`
  margin: 0;
  font-weight: 500;
`;

const DocTypeDiv = styled.div`
height: 4rem;
border: 1px solid #D6D6D6;
border-radius: 50px;
position: relative;
margin: 20px 0 15px 0;
`;

const DocTypeDesc = styled.span`
margin: 0;
font-weight: 500;
font-size: 1.4rem;
line-height: 1.4rem;
color: #BBBBBB;
position: absolute;
    width: 90%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`

const Signature = () => {
    const navigate = useNavigate();
    const [link, setLink] = useState("");
    const [name, setName] = useState("");
    const [size, setSize] = useState("");
    const [userData, setUserData] = useState({});
    // console.log(link)  aadharUpload
  
    useEffect(() => {
      getUserById();
    }, []);
  
    const getUserById = () => {
      httpClient
        .get(
          "/user_master/getUserRecord/" + String(sessionStorage.getItem("userId"))
        )
        .then((res) => {
          // console.log(res.data);
          setUserData(res.data);
        });
    };
  
    const updateUser = () => {
      if (link.length > 0) {
        userData.aadharUpload = link;
        httpClient.put("/user_master/update", userData).then((res) => {
          console.log(res);
          if (res.data) {
            navigate("/user-welcomeuser");
          }
        });
      }
    };
  
    return (
      <>
        <Header />
        <MainContainer>
          <JoinCard2>
            <LeftCon>
              <ArtImg src={bulkImg} />
            </LeftCon>
            <RightCon>
              <PageHead>Contributor Registration</PageHead>
              <Stepper
                activeStep={5}
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
                    completedBgColor: "#36DEED",
                    completedTextColor: "#333333",
                    activeBgColor: "#BBBBBB",
                    activeTextColor: "#333333",
                    inactiveBgColor: "#EEEEEE",
                    inactiveTextColor: "#757575",
                    size: "1.6rem",
                  }}
                />
                <Step style={{ marginRight: "5px" }} />
                <Step />
              </Stepper>
              <Heading>
              Upload Your Signature
              </Heading>
              <Desc>
                Before submit content, we need to verify your identity. <br />
                Please add a full size image of your passport, driver’s <br />
                license, or state identification.{" "}
                <OrangeText>Learn more</OrangeText>
              </Desc>
              <AadharUploadBtn
                returnLink={setLink}
                name={setName}
                size={setSize}
                title={"Upload Signature"}
              />
  
              <UploadingText>
                <StrongText>Accepted Files:</StrongText> JPEG, TIFF, or PDF
              </UploadingText>
              <UploadingText>
                <StrongText>File Size Limit:</StrongText> 500 KB (Maximum)
              </UploadingText>
              <DocTypeDiv>
                <DocTypeDesc>Document Type (Example: Aadhaar Card)</DocTypeDesc>
              </DocTypeDiv>
  
              <ConBtn1 onClick={() => updateUser()}>Next</ConBtn1>
            </RightCon>
          </JoinCard2>
        </MainContainer>
      </>
    );
}

export default Signature