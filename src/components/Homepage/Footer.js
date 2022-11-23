import React, { useState } from 'react'
import styled from 'styled-components'
import mainLogo from "../../assets/Logo.svg"
import footerBack from "../../assets/footer/footer_signup.png"
import signUp from "../../assets/footer/SignUp.png"
import { ListItemIcon, ListItemText, MenuItem, Select } from '@mui/material'
import globeImg from "../../assets/footer/Globe.svg"
import instaIcon from "../../assets/social/Instagram.svg"
import fbIcon from "../../assets/social/Facebook.svg"
import twitterIcon from "../../assets/social/Twitter.svg"
import linkdinIcon from "../../assets/social/Linkedin.svg"
import payment from "../../assets/social/paymentMethod.png"
import Dropdown from '../Others/Dropdown'

const MainContainer = styled.div`
    height: 629px;
`

const TopLine = styled.div`
background: #efefef;
text-align: center;
/* height: 39px; */
padding: 10px 0;
`
const TopText = styled.p`
 font-size: 14px;
 /* line-height: 7.6px; */
 margin: 0;
 color: #757575;
`

const StrongText = styled.span`
 color: #333333;
 margin: 0;
`

const OrangeText = styled.span`
color: #f7941d;
 margin: 0;
`

const BotMainContainer = styled.div`
    background: #cccccc;
    padding: 40px 150px 0;
`

const LinkContainer = styled.div`
height: 100%;
padding-bottom: 20px;
border-bottom: 1px solid #bcbcbc;
`

const Logo = styled.img`
 width: 255px;
`

const MainFlexCon = styled.div`
 display: flex;
 justify-content: space-between;
`

const FlexContainerLeft = styled.div`
 display: flex;
 margin-top: 20px;
 justify-content: space-between;
 flex: 0.7;
`
const FlexContainerRight = styled.div`
flex: 0.3;
margin-left: 15px;
`

const ListContainer = styled.div`
 color: #333333;
`

const ListHead = styled.p`
 font-size: 13px;
 font-weight: 700;
 margin: 0;
 text-transform: uppercase;
`

const Ul = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 15px 0 0 0;
`

const ListItem = styled.li`
line-height: 18px;
font-weight: 500;
font-size: 12px;

`
const SignContainer = styled.div`
 padding: 20px 0;
 /* position: relative; */
 /* text-align: center; */
`

const SignCard = styled.div`
width: 450px;
height: 229px;
/* position: absolute; */
margin: 0 auto;
background: #ffffff;
border-radius: 20px;
overflow: hidden;
display: flex;
`

const SignLeft = styled.div`
    flex: 0.5;
    background: url(${footerBack});
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`
const SignUpImg = styled.img`
    position: absolute;
    top: 35%;
    right: 0;
`

const SignRight = styled.div`
    flex: 0.5;
    position: relative;
    padding: 0 15px;

`

const RightCon = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const Inputtext = styled.input`
 /* width: 350px;  */
  height: 32px;
  border-radius: 25px;
  padding-left: 17px;
  border: 1px solid #d9d9d9;
 /* padding-left: 3%; */
  /* color: #d9d9d9 !important; */
  font-weight: 600;
  &:focus {
    outline: none;
  }
  &:not(:first-child){
    margin-top: 10px;
  }
  &::placeholder {
    color: #d9d9d9 !important;
  }
`;

const ConBtn = styled.button`
    margin: 12px 0 7px 0;
    padding: 8px 13px;
    background: #333333;
    color: #ffffff;
    font-size: 11px;
    font-weight: 400;
    border-radius: 50px;
    cursor: pointer;
  `;

const SignUpP = styled.p`
margin: 0;
font-size: 11px;
color: #757575;
line-height: 12px;
`

const CopyText = styled.p`
 font-size: 11px;
font-weight: 500;
 margin: 0;
 color: #757575;
 width: fit-content;
    margin: 12px auto 0;
`

const Icon = styled.img``

const DropCon = styled.div`
    display: flex;
    justify-content: space-between;
`

const SocialFlexCon = styled.div`
    display: flex;
    margin: 15px 0;
`

const Footer = () => {
    const [age, setAge] = useState('');

    return (
        <MainContainer>
            <TopLine>
                <TopText>Help us improve your <StrongText>Artnstock</StrongText> experience. <OrangeText>Send feedback</OrangeText>.</TopText>
            </TopLine>
            <BotMainContainer>
                <LinkContainer>
                    <Logo src={mainLogo} />
                    <MainFlexCon>
                        <FlexContainerLeft>
                            <ListContainer>
                                <ListHead>Company</ListHead>
                                <Ul>
                                    <ListItem>About Us</ListItem>
                                    <ListItem>Artnstock Magazine</ListItem>
                                    <ListItem>Press/Media</ListItem>
                                    <ListItem>Blog</ListItem>
                                    <ListItem>Careers</ListItem>
                                    <ListItem>Contact Us</ListItem>
                                </Ul>
                            </ListContainer>
                            <ListContainer>
                                <ListHead>shop</ListHead>
                                <Ul>
                                    <ListItem>Art</ListItem>
                                    <ListItem>Images</ListItem>
                                    <ListItem>Footage</ListItem>
                                    <ListItem>Music</ListItem>
                                    <ListItem>Templates</ListItem>
                                    <ListItem>Products</ListItem>
                                </Ul>
                            </ListContainer>
                            <ListContainer>
                                <ListHead>Buyers</ListHead>
                                <Ul>
                                    <ListItem>Plans & Pricing</ListItem>
                                    <ListItem>Offers</ListItem>
                                    <ListItem>Promo Code</ListItem>
                                    <ListItem>Buyer Referral Program</ListItem>
                                    <ListItem>Track My Order</ListItem>
                                    <ListItem>Return My Order</ListItem>
                                    <ListItem>Return Policy</ListItem>
                                    <ListItem>Buyers Support Center</ListItem>
                                </Ul>
                            </ListContainer>
                            <ListContainer>
                                <ListHead>Contributors</ListHead>
                                <Ul>
                                    <ListItem>Become a Contributor</ListItem>
                                    <ListItem>Contributor Referral Program</ListItem>
                                    <ListItem>Contributor Support Center</ListItem>

                                </Ul>
                            </ListContainer>
                            <ListContainer>
                                <ListHead>Legal</ListHead>
                                <Ul>
                                    <ListItem>Terms Of Service</ListItem>
                                    <ListItem>License Agreement</ListItem>
                                    <ListItem>Privacy Policy</ListItem>
                                    <ListItem>Copyright & Trademark Policy</ListItem>
                                    <ListItem>Cookies Settings</ListItem>
                                    <ListItem>Community GuideLines</ListItem>
                                    <ListItem>Do not Sell my Personal Information</ListItem>
                                </Ul>
                            </ListContainer>
                        </FlexContainerLeft>
                        <FlexContainerRight>
                            <DropCon>
                                <Dropdown title="English" type="mediums" />
                                <Dropdown title="USD" type="mediums" />
                            </DropCon>
                            <SocialFlexCon>
                                <Icon src={fbIcon} />
                                <Icon style={{ marginLeft: "15px" }} src={twitterIcon} />
                                <Icon style={{ marginLeft: "15px" }} src={linkdinIcon} />
                                <Icon style={{ marginLeft: "15px" }} src={instaIcon} />
                            </SocialFlexCon>
                            <CopyText style={{ margin: "0" }}>Accepted Payment methods</CopyText>
                            <Icon src={payment} />
                        </FlexContainerRight>
                    </MainFlexCon>
                </LinkContainer>
                <SignContainer>
                    <SignCard>
                        <SignLeft>
                            <SignUpImg src={signUp} />
                        </SignLeft>
                        <SignRight>
                            <RightCon>
                                <Inputtext placeholder='Enter Email address' />
                                <ConBtn>Sign Up</ConBtn>
                                <SignUpP>
                                    Artnstock is an online platform for <br />
                                    promoting quality art created by artists <br />
                                    worldwide.
                                </SignUpP>
                            </RightCon>
                        </SignRight>
                    </SignCard>
                    <CopyText>Copyright 2022. Artnstock Private Limited. All rights reserved.</CopyText>
                </SignContainer>
            </BotMainContainer>
        </MainContainer>
    )
}

export default Footer