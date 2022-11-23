import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { httpClient } from '../../axios';
import artIcon from "../../assets/art/Icon - Art.svg"
import shareIcon from "../../assets/art/share.svg"
import addIcom from "../../assets/art/add.svg"
import bagIcon from "../../assets/art/bag.svg"
import addressIcon from "../../assets/art/address.svg"
import { Menu } from '@mui/material';

const Logoimg = styled.img`
  display: block;
margin: 55px auto 0;
`;

const ProdImg = styled.img`
  display: block;
  margin: 10px auto;
`;

const CardContainer = styled.div`
  margin: 10px 10px;
`;

const Content = styled.div`
  color: white;
  opacity: 0;
  transition: 0.2s all ease-in;
  width: 100%;
  height: 100%;
  z-index: 99;
  position: relative;
`;

const LeftIcons = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  /* width: 100%; */
  display: flex;
  
`;

const Icons = styled.img`
 width: 18px;
 /* height: 18px; */
 margin-right: 12px;
`
const RightIcon = styled.img`
    position: absolute;
    right: 10px;
    width: 18px;
 /* height: 18px; */
    bottom: 10px;
`

const Card = styled.div`
  width: 380px;
  height: 380px;
  background: #f7f7f7;
  margin: auto;
  border-radius: 20px;
  position: relative;
  margin-top: 20px;
  overflow: hidden;
  &:hover ${Content} {
    opacity: 1;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.2);
  }
`;

const ComboImg = styled.img`
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

const BotCountCon = styled.div`
     position: absolute;
  bottom: 3%;
  left: 45%;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const CountInd = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background: #ff369f;
  color: white;
 
  /* padding: initial; */
`;

const Prod = styled.small`
  color: #757575;
  font-size: 11px;
  font-weight: 400;
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
const Combo = () => {
    const [combo, setCombo] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    useEffect(() => {
        httpClient.get("/combo_master").then((res) => {
            // console.log(res);
            // if (res.status === 200) {
            setCombo(res.data);
            // }
        });
    }, []);
    // console.log(combo);
    return (
        <div className="container  text-center">
            <Logoimg src="https://zplusglobalmarketinsights.com/artNStockImages/mainLogo.svg" />
            <ProdImg src="https://zplusglobalmarketinsights.com/artNStockImages/Header-Combo1.png" />
            <div className="row">
                {combo.map((comb) => {
                    return (
                        <div key={comb.comboId} className="col-lg-4 col-md-4">
                            <CardContainer>
                                <Card>
                                    <ComboImg src={comb.image} />
                                    <BotCountCon>
                                        <CountInd>{comb.count}</CountInd>
                                        <Prod>Products</Prod>
                                    </BotCountCon>
                                    <Content>
                                        <LeftIcons>
                                            <Icons src={addIcom} />
                                            <Icons src={bagIcon} />
                                    
                                            <Icons src={artIcon} />
                                                
                                            <Icons src={shareIcon} />
                                        </LeftIcons>
                                        <RightIcon src={addressIcon} />
                                    </Content>
                                </Card>

                                <BottomCon>
                                    <ProdHead>{comb.title}</ProdHead>
                                    <ProdDesc>{comb.description}</ProdDesc>
                                </BottomCon>
                            </CardContainer>
                        </div>
                    );
                })}
            </div>
            <DiscoverBtn>Discover More</DiscoverBtn>
        </div>
    );
}

export default Combo