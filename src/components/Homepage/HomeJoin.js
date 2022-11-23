import React from 'react'
import styled from 'styled-components';
import join from "../../assets/art/join.png"
import abstract from "../../assets/art/Abstract.png"

const MainDiv = styled.div`
  background: url("https://zplusglobalmarketinsights.com/artNStockImages/Group14.png");
  width: 100%;
  height: 500px;
  position: relative;
  display: flex;
  flex-direction: column-reverse;
`;

const JoinCard = styled.div`
  height: 388px;
  width: 690px;
  background: white;
  border-radius: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  overflow: hidden;
`;

const SmallText = styled.p`
  font-size: 11px;
  font-weight: 500;
  color: #757575;
  margin: 0;
`;

const SmallText1 = styled.p`
  font-size: 13px;
  font-weight: 600;
  color: #000000;
  margin: 0;
`;
const SmallText2 = styled.p`
  font-size: 11px;
  font-weight: 500;
  color: #ffffff;
  margin: 0;
  margin-bottom: 10px;
  text-align: center;
`;

const Inputtext = styled.input`
  width: 90%;
  height: 40px;
  border-radius: 25px;
  border: 1px solid #d9d9d9;
  padding-left: 3%;
  margin-top: 20px;
  color: #757575;
  &:nth-child(3) {
    margin-top: 1em;
    margin-top: 2%;
  }
`;

const ConBtn = styled.button`
  margin: 20px 0;
  padding: 8px 16px;
  background: #333333;
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  border-radius: 20px;
  cursor: pointer;
  border: none;
`;

const OrangeText = styled.span`
  color: #f88331;
  cursor: pointer;
`;

const JoinCardLeft = styled.div`
  flex: 0.5;
  background: url("https://zplusglobalmarketinsights.com/artNStockImages/join _Art.png");
  height: 100%;
  width: 100%;
  position: relative;
`;

const JoinCardRight = styled.div`
  flex: 0.5;
  padding: 25px 15px;
`;

const Botp = styled.small`
  color: gray;
  display: block;
  font-size: 11px;
  margin: 0;
`;

const CheckDiv = styled.div`
    display: flex;
    align-items: flex-start;
    margin-top: 10px;
`;

const Check = styled.input`
 margin-right: 10px;
`;

const JoinImg = styled.img`
 position: absolute;
 right: 0;
 top: 30%;
`

const AbstractImg = styled.img`
 position: absolute;
 bottom: 15px;
 left: 15px;
`

const HomeJoin = () => {
    return (
        <MainDiv>
            <JoinCard>
                <JoinCardLeft>
                  <JoinImg src={join} />
                  <AbstractImg src={abstract} />
                </JoinCardLeft>
                <JoinCardRight>
                    <SmallText>
                        Try the 15 images per month plan for free with a 30-day trial.
                        <br />
                        Cancel anytime and still keep your images.*
                        <OrangeText> Learn more </OrangeText>
                    </SmallText>
                    <Inputtext placeholder="Email Address" />
                    <Inputtext placeholder="Password" />
                    <Botp>Must be at least 8 characters long</Botp>
                    <CheckDiv>
                        <Check type="checkbox" />
                        <SmallText>
                            I certify that I am 18 or older and I agree to the <br />
                            <OrangeText>Terms of Service</OrangeText> and <OrangeText>Privacy Policy</OrangeText>.
                        </SmallText>
                    </CheckDiv>
                    <ConBtn>Signin</ConBtn>
                    {/* <SmallText1>
                        Already have an account? <OrangeText>Signin</OrangeText>
                    </SmallText1> */}
                    <SmallText>
                        By signing up, you agree to our <OrangeText>Terms of Service</OrangeText> and <br />
                        <OrangeText>Privacy Policy</OrangeText>. <br />
                        You’ll receive weekly updates on recently addedcollections.
                    </SmallText>
                </JoinCardRight>
            </JoinCard>
            <SmallText2>
                *The 10 tracks per month annual plan will automatically charge you each month for USD $29, allowing you to continue to download content without interruption. For more details on billing, <OrangeText>click here</OrangeText>.
            </SmallText2>
        </MainDiv>
    )
}

export default HomeJoin