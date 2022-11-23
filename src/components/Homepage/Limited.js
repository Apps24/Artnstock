import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { httpClient } from '../../axios';
import tempImg from "../../assets/newarrival.jpg"

const MainContainer = styled.div`
  text-align: center;
`;

const Logoimg = styled.img``;

const ProdImg = styled.img`
  display: block;
  margin: 8px auto;
`;

const NewImg = styled.img`
  display: block;
  margin: 8px auto;
`;

const MainImg = styled.img`
  display: block;
  margin: 8px auto;
  width: 100%;
`;

const TempButton = styled.button`
  background: #eeeeee;
  color: #333333;
  border-radius: 50px;
  font-size: 15px;
  font-weight: 500;
  padding: 5px 15px;
  border: none;
  margin: 5px 0 10px 0;
`;

const DiscoverBtn = styled.button`
  background: #333333;
  color: #ffffff;
  border-radius: 50px;
  padding: 15px 20px;
  margin: 30px auto 50px;
  font-size: 14px;
  font-weight: 500;
  display: block;
`;

const BotText = styled.small`
  color: #757575;
  font-size: 11px;
  font-weight: 400;
  display: block;
  /* margin-top: 20px; */
  margin: 15px auto;
  width: 50%;
`;

const Limited = ({type}) => {
  const [limited, setLimited] = useState([]);

  useEffect(() => {
    httpClient.get("/limited_edition_master/getTypeWiseList/" + type).then((res) => {
      // console.log(res);
      setLimited(res.data)
    })
  }, [type])

  return (
    <div className="container pt-5 pb-4">
    <div className="row">
      <div className="col-lg-12">
        {limited.map((limited) => {
          return (
            <MainContainer key={limited.limitedEditionId}>
              <Logoimg src="https://zplusglobalmarketinsights.com/artNStockImages/mainLogo.svg" />
              <ProdImg src={limited.headingImage} />
              <TempButton>{limited.buttonText}</TempButton>
              <NewImg src="https://zplusglobalmarketinsights.com/artNStockImages/New-Arrivals.png" />
              <MainImg src={tempImg} />
              <DiscoverBtn>Discover More</DiscoverBtn>
              <BotText>
                All artworks and designs remain the property of Artnstock
                Private Limited and . All artwork and designs are copyright
                protected. All products used are property of Lorem Ipsum,
                dolor, and any other rightful owners.
              </BotText>
            </MainContainer>
          );
        })}
      </div>
    </div>
  </div>
  )
}

export default Limited