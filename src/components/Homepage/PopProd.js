import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { httpClient } from '../../axios';


const H1 = styled.h1`
  font-size: 38px;
  font-weight: 500;
`;

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  order: 5;
  justify-content: center;
  width: 1500px;
  margin: 25px auto;
`;

const CardContainer = styled.div`
  margin: 10px 10px;
  text-align: center;
`;

const Content = styled.div`
  color: white;
  opacity: 0;
  transition: 0.2s all ease-in;
  width: 100%;
  height: 100%;
  
`;

const Detail = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
`;

const Head = styled.h1`
  font-size: 38px;
  margin: 0;
  font-weight: 500;
`;

const P = styled.p`
  font-size: 11px;
  margin: 0;
  font-weight: 500;
  line-height: 14px;
`;

const PriceP = styled.p`
font-size: 38px;
  margin: 0;
  font-weight: 300;
  
`

const Card = styled.div`
  width: 270px;
  height: 270px;
  background: #f7f7f7;
  margin: auto;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  &:hover ${Content} {
    opacity: 1;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.2);
  }
`;

const ProdImg = styled.img`
  /* width: 70%; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const BottomCon = styled.div`
  margin: 8px 0 0 0;
`;

const ProdHead = styled.h2`
  color: #333333;
  font-size: 15px;
  font-weight: 500;
  margin: 0;
`;

const ProdDesc = styled.p`
  color: #757575;
  font-size: 12px;
  font-weight: 400;
  margin: 0 auto;
  width: 50%;
`;

const Price = styled.p`
  color: #333333;
  font-size: 15px;
  font-weight: 500;
  margin: 0;
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
const PopProd = () => {

    const [prod, prodChange] = useState([]);

  useEffect(() => {
    httpClient.get("/product_master/getActiveProductMaster").then((res) => {
    //   console.log(res);
      if (res.status === 200) {
        prodChange(res.data);
      }
    });

 
  }, []);
  return (
    <div
    className="container-fluid pt-5 pb-5 text-center"
    style={{ padding: `0 5%`, position:"relative" }}
  >
    <H1>Most Popular Artnstock Products</H1>
    <MainContainer>
      {prod.map((product) => {
        return (
          <CardContainer key={product.productId}>
            <Card>
              <ProdImg src={product.image} />
              <Content>
                  <Detail>
                    <Head>Sipper</Head>
                    <P>The most inspiring abstract art from Artnstock</P>
                    <PriceP>745+</PriceP>
                  </Detail>
                 
                </Content>
            </Card>
            <BottomCon>
              <ProdHead>{product.productName}</ProdHead>
              <ProdDesc>{product.description}</ProdDesc>
              <Price>&#36;{product.price.toFixed(2)}</Price>
            </BottomCon>
          </CardContainer>
        );
      })}
    </MainContainer>

    <DiscoverBtn>Discover More</DiscoverBtn>
  </div>
  )
}

export default PopProd