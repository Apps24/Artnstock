import React, { useState } from "react";
import styled from "styled-components";
import leftBackImg from "../../assets/join/address1LeftBack.svg";
import leftBackImg2 from "../../assets/join/address2LeftBack.svg";
import Header from "../../components/Header";
import MenuItem from "@mui/material/MenuItem";
import bulkImg from "../../assets/join/Bulk.svg";
import { Step, Stepper } from "react-form-stepper";
import { Checkbox } from "@mui/material";
import { httpClient } from "../../axios";
import { updateUserResAddress, updateUserShippingAddress } from "../../AllUrl";
import { useNavigate } from "react-router-dom";
import lightYellowBack from "../../assets/join/coralBack.svg";
import lightgreenBack from "../../assets/join/yellowBack.svg";
import wallpaperImg from "../../assets/join/Wallpaper.svg";

// -------- Styled Components
const MainContainer = styled.div`
  width: 100%;
  height: 86vh;
  background: ${(props) =>
    props.ship ? `#FF7A6D` : `#FFD133`};
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
  background: ${(props) =>
    props.back ? `url(${leftBackImg})` : `url(${leftBackImg2})`};
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

const RightH3 = styled.h3`
  margin: 0;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.1rem;
  margin-top: 15px;
`;
const RightH4 = styled.h3`
  margin: 0;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.1rem;
  margin-top: 15px;
`;

const ConBtn1 = styled.button`
  margin: 15px 0;
  padding: 10px 25px;
  background: #333333;
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  display: block;
`;

const Inputtext = styled.input`
  width: 100%;
  height: 4rem;
  border-radius: 25px;
  padding-left: 17px;
  border: 1px solid #d9d9d9;
  /* padding-left: 3%; */
  /* color: #d9d9d9 !important; */
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.4rem;
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

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
`;

const TopRes = styled.p`
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: #757575;
  margin: 10px 0 0 0;
`;
const ArtImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const RightDesc = styled.p`
  color: #ff369f;
  font-size: 1.1rem;
  line-height: 1.1rem;
  font-weight: 400;
  margin: 0;
  margin-bottom: 5px;
`;

const PageHead = styled.h2`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.3rem;
  color: #bbbbbb;
  margin-bottom: 5px;
`;

const Address = () => {
  const [addressType, setAddressType] = useState("shipping");
  const [userId, setUserId] = useState(
    String(sessionStorage.getItem("userId"))
  );
  // Shipping
  const [country, setCountry] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [stateName, setStateName] = useState("");
  const [phone, setPhone] = useState("");

  // Residential
  const [countryRes, setCountryRes] = useState("");
  const [addressLineRes1, setAddressLineRes1] = useState("");
  const [addressLineRes2, setAddressLineRes2] = useState("");
  const [cityRes, setCityRes] = useState("");
  const [zipCodeRes, setZipCodeRes] = useState("");
  const [stateNameRes, setStateNameRes] = useState("");
  const [phoneRes, setPhoneRes] = useState("");

  let navigate = useNavigate();

  const shippingModel = {
    userId: userId,
    shippingAddress: {
      countryName: country,
      addressLine1: addressLine1,
      addressLine2: addressLine2,
      cityName: city,
      zipCode: zipCode,
      stateName: stateName,
      phoneNo: phone,
    },
  };
  const residentialModel = {
    userId: userId,
    residentialAddress: {
      countryName: country,
      addressLine1: addressLine1,
      addressLine2: addressLine2,
      cityName: city,
      zipCode: zipCode,
      stateName: stateName,
      phoneNo: phone,
    },
  };

  const saveShippingAddress = () => {
    // console.log(shippingModel);
    if (
      country.length > 0 &&
      addressLine1.length > 0 &&
      addressLine2.length > 0 &&
      city.length > 0 &&
      zipCode.length > 0 &&
      stateName.length > 0 &&
      phone.length > 0
    ) {
      httpClient.put(updateUserShippingAddress, shippingModel).then((res) => {
        console.log(res);
        if (res.data === true) {
          setAddressType("residential");
        }
      });
    }
  };

  const saveResidentialAddress = () => {
    if (
      countryRes.length > 0 &&
      addressLineRes1.length > 0 &&
      addressLineRes2.length > 0 &&
      cityRes.length > 0 &&
      zipCodeRes.length > 0 &&
      stateNameRes.length > 0 &&
      phoneRes.length > 0
    ) {
      httpClient.put(updateUserResAddress, residentialModel).then((res) => {
        console.log(res);
        if (res.data === true) {
          navigate("/user-verifyemail");
        }
      });
    }
  };

  const checkBoxChange = (checkValue) => {
    if (checkValue === true) {
      setCountryRes(country);
      setAddressLineRes1(addressLine1);
      setAddressLineRes2(addressLine2);
      setCityRes(city);
      setZipCodeRes(zipCode);
      setStateNameRes(stateName);
      setPhoneRes(phone);
    } else if (checkValue === false) {
      setCountryRes("");
      setAddressLineRes1("");
      setAddressLineRes2("");
      setCityRes("");
      setZipCodeRes("");
      setStateNameRes("");
      setPhoneRes("");
    }
  };
  return (
    <>
      <Header />
      {addressType === "shipping" ? (
        <MainContainer ship>
          <JoinCard2>
            <LeftCon back>
              <ArtImg src={bulkImg} />
            </LeftCon>
            <RightCon>
              <PageHead>Contributor Registration</PageHead>
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
                <Step style={{ marginRight: "5px" }} />
                <Step style={{ marginRight: "5px" }} />
                <Step style={{ marginRight: "5px" }} />
                <Step style={{ marginRight: "5px" }} />
                <Step />
              </Stepper>
              <RightH3>Enter Your Mailing Address</RightH3>
              <RightDesc>All fields are required.</RightDesc>

              <Inputtext
                placeholder="Address Line 1"
                onChange={(e) => setAddressLine1(e.target.value)}
              />
              <Inputtext
                placeholder="Address Line 2"
                onChange={(e) => setAddressLine2(e.target.value)}
              />
              <FlexContainer>
                <Inputtext
                  placeholder="Select Country"
                  onChange={(e) => setCountry(e.target.value)}
                />
                <Inputtext
                  placeholder="City"
                  onChange={(e) => setCity(e.target.value)}
                />
              </FlexContainer>
              <FlexContainer>
                <Inputtext
                  placeholder="zip/Postal code"
                  onChange={(e) => setZipCode(e.target.value)}
                />
                <Inputtext
                  style={{ margin: 0 }}
                  placeholder="State/Province"
                  onChange={(e) => setStateName(e.target.value)}
                />
              </FlexContainer>
              <Inputtext
                placeholder="Phone number"
                onChange={(e) => setPhone(e.target.value)}
              />
              <ConBtn1 onClick={saveShippingAddress}>Next</ConBtn1>
            </RightCon>
          </JoinCard2>
        </MainContainer>
      ) : (
        <MainContainer res>
          <JoinCard2>
            <LeftCon>
              <ArtImg src={wallpaperImg} />
            </LeftCon>
            <RightCon>
              <PageHead>Contributor Registration</PageHead>
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
                    inactiveBgColor: "#EEEEEE",
                    inactiveTextColor: "#757575",
                    size: "1.6rem",
                  }}
                />
                <Step style={{ marginRight: "5px" }} />
                <Step style={{ marginRight: "5px" }} />
                <Step style={{ marginRight: "5px" }} />
                <Step style={{ marginRight: "5px" }} />
                <Step />
              </Stepper>
              <RightH4>Enter Your Residential Address</RightH4>
              <RightDesc>All fields are required.</RightDesc>
              <TopRes>
                <Checkbox
                  onChange={(e) => checkBoxChange(e.target.checked)}
                  color="default"
                />
                My Mailing and residential addresses are the same.
              </TopRes>

              <Inputtext
                placeholder="Address Line 1"
                value={addressLineRes1}
                onChange={(e) => setAddressLineRes1(e.target.value)}
              />
              <Inputtext
                placeholder="Address Line 2"
                value={addressLineRes2}
                onChange={(e) => setAddressLineRes2(e.target.value)}
              />
              <FlexContainer>
                <Inputtext
                  placeholder="Select Country"
                  value={countryRes}
                  onChange={(e) => setCountryRes(e.target.value)}
                />
                <Inputtext
                  placeholder="City"
                  value={cityRes}
                  onChange={(e) => setCityRes(e.target.value)}
                />
              </FlexContainer>
              <FlexContainer>
                <Inputtext
                  placeholder="zip/Postal code"
                  value={zipCodeRes}
                  onChange={(e) => setZipCodeRes(e.target.value)}
                />
                <Inputtext
                  style={{ margin: 0 }}
                  placeholder="State/Province"
                  value={stateNameRes}
                  onChange={(e) => setStateNameRes(e.target.value)}
                />
              </FlexContainer>
              <Inputtext
                placeholder="Phone number"
                value={phoneRes}
                onChange={(e) => setPhoneRes(e.target.value)}
              />
              <ConBtn1 onClick={saveResidentialAddress}>Next</ConBtn1>
            </RightCon>
          </JoinCard2>
        </MainContainer>
      )}
    </>
  );
};

export default Address;
