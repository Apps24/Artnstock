import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 1019px;
  padding-top: 100px;
  text-align: center;
`;

const Card = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  display: flex;
  height: 701px;
  width: 1170px;
  padding: 30px 20px;
  border-radius: 30px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const CardLeft = styled.div`
  flex: 0.5;
  background: url("https://zplusglobalmarketinsights.com/artNStockImages/Banner - Printable Wall Art.png");
  background-repeat: no-repeat;
`;

const CardRight = styled.div`
  flex: 0.5;
  text-align: left;
`;

const TitleImg = styled.img``;

const TitleDesc = styled.p`
font-size: 14px;
  font-weight: 500;
  color: #757575;
  margin: 0;
  margin-top: 10px;
  margin-bottom: 20px;
  display: block;
`

const SmallText = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #757575;
  margin: 0;
  margin-top: 10px;
  margin-bottom: 20px;
  display: block;
`;

const SmallText1 = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #757575;
  margin: 0;
  margin-top: 10px;
  
  display: block;
`;

const ConBtn = styled.button`
  padding: 8px 16px;
  background: #333333;
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  border-radius: 20px;
  cursor: pointer;
`;

const BotCon = styled.div`
  position: absolute;
  bottom: 30px;
`;

const ImgCon = styled.div`
  display: flex;
`;

const Image = styled.img`
  margin-right: 5px;
`;

const Magzine = () => {
    return (
        <Container>
            <TitleImg src="https://zplusglobalmarketinsights.com/artNStockImages/Header - Artnstock Magazine copy.png" />
            <TitleDesc>
                artnstock.com is an online platform for promoting quality art created by artists worldwide. With a simple registration process, we allow you to sell <br />
                paintings as many as you choose, with the freedom of putting up the price you want.
            </TitleDesc>
            <Card>
                <CardLeft></CardLeft>
                <CardRight>
                    <TitleImg src="https://zplusglobalmarketinsights.com/artNStockImages/Header - Online Magazine.png" />
                    <SmallText>
                        Artnstock is your best place to buy high-quality stock photos in any
                        subject and genre. <br />
                        Our photography collection will open new horizons for your visual
                        projects and would be <br />a perfect solution for anyone who needs
                        high-quality photos at affordable prices.
                    </SmallText>
                    <ConBtn>Go To Artnstock Magazine</ConBtn>
                    <BotCon>
                        <ImgCon>
                            <Image src="https://zplusglobalmarketinsights.com/artNStockImages/Sweet Stems.png" />
                            <Image src="https://zplusglobalmarketinsights.com/artNStockImages/Throwback.png" />
                            <Image src="https://zplusglobalmarketinsights.com/artNStockImages/Ride1.png" />
                        </ImgCon>
                        <SmallText1>
                            All artwork and designs used in this magazine remain the property
                            of <br />
                            Artnstock Private Limited.
                        </SmallText1>
                    </BotCon>
                </CardRight>
            </Card>
        </Container>
    )
}

export default Magzine