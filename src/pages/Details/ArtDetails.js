import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { httpClient } from '../../axios'
import Header from '../../components/Header'
import Footer from '../../components/Homepage/Footer'
import viewImg from "../../assets/art/view.svg"
import printIcon from "../../assets/art/print.svg"
import threedIcon from "../../assets/art/3D.svg"

import addIcon from "../../assets/art/add.svg"
import likeIcon from "../../assets/header/Icon - Wish List.svg"
import shareIcon from "../../assets/art/share.svg"

import horizontalFrameImg from "../../assets/art/Menu/horizontalFrame.svg"
import verticalFrameImg from "../../assets/art/Menu/verticalFrame.svg"
import frameInclude from "../../assets/art/Menu/frameInclude.svg"
import topMatImg from "../../assets/art/Menu/topMat.svg"
import bottomMatImg from "../../assets/art/Menu/bottomMat.svg"
import grayMatImg from "../../assets/art/Menu/grayMat.svg"
import profileImg from "../../assets/art/Menu/profileImg.png"
import proImg from "../../assets/art/Menu/Pro.png"
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box } from '@mui/system'
import { Checkbox, Tab } from '@mui/material'
import DropZone from '../../components/Others/DropZone'
import offerImg from "../../assets/ap/Offer copy.png"
import MarchandiseImg from "../../assets/ap/Hor Line.png"
import ProdImg from "../../assets/ap/Print On Demand.png"

import "./artDetails.css"

const MainContainer = styled.div``

const HeadDesc = styled.p`
  font-size: 12px;
  margin: 20px 0 5px 0;
  font-weight: 500;
  color: #757575;
  text-align: center;
`;

const ArtMainContainer = styled.div`
 padding: 0 170px;
 display: flex;
`

const ArtLeftCon = styled.div``

const ArtImgCon = styled.div`
 height: 570px;
 width: 570px;
 background: #f5f5f7;
 border-radius: 30px;
 position: relative;
`

const ExBtn = styled.button`
padding: 2.5px 7px;
background: #333333;
border-radius: 50px;
font-size: 10px;
color: #ffffff;
position: absolute;
top: 15px;
left: 15px;
`

const MainImgCon = styled.div`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%,-50%);
`

const MainImg = styled.img``

const BottomCon = styled.div`
 display: flex;
 margin-top: 10px;
 margin-bottom: 20px;
 justify-content: space-between;
`

const IconFlexCon = styled.div`
 display: flex;
 align-items: center;
`

const IconLeft = styled.img`
 &:not(:last-child) {
  margin-right: 10px;
}
`

const IconRight = styled.img`
&:not(:last-child) {
  margin-right: 10px;
}
`

const View = styled.img`
 position: absolute;
 bottom: 15px ;
 right: 15px;
`

const TextHead = styled.h1`
margin: 0;
color: #333333;
font-size: 15px;

`

const BottomDetailsCard = styled.div`
height: 245px;
padding: 14px 12px 0 12px;
 width: 570px;
 background: #ffffff;
 background-clip: padding-box;
 border: 1px solid transparent;
 border-radius: 20px;
 position: relative;
 &::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  margin: -1px;

  border-radius: inherit;
  background: linear-gradient(90deg, rgba(253,75,255,1) 0%, rgba(151,148,208,1) 33%, rgba(70,213,154,1) 66%, rgba(190,237,16,1) 100%);
 }
 /* border: 2px solid; */
 /* border-color:  linear-gradient(90deg, rgba(253,75,255,1) 0%, rgba(151,148,208,1) 33%, rgba(70,213,154,1) 66%, rgba(190,237,16,1) 100%);; */
`

const TopIconFlex = styled.div`
 display: flex;
 align-items: center;
`

const TopIcon = styled.img`
&:not(:last-child) {
  margin-right: 10px;
}
`
const Table = styled.table`
 margin: 15px 0;
 width: 100%;
`

const Tr = styled.tr`
 border-top: 1px solid #efefef;
padding: 3px 0;
&:last-child {
 border-bottom: 1px solid #efefef;

}
 `

const Td = styled.td`
padding-right: 15px;
color: #757575;
  font-size: 12px;
  line-height: 18px;
 &:first-child {
  width: 20%;
 }
`
const Tdr = styled.td`
padding-right: 15px;
color: #757575;
  font-size: 12px;
  line-height: 18px;
 &:first-child {
  width: 40%;
 }
`

const ArtRightCon = styled.div`
padding-left: 30px;
`

const MainHeading = styled.h1`
 margin: 0;
 font-size: 25px;
 font-weight: 500;
 color: #333333;
 line-height: 29px;
`
const ProfileCon = styled.div`
margin: 10px 0;
display: flex;
`

const ProfileImg = styled.img``

const ProfileInnerCon = styled.div`
 margin-left: 5px;
`

const SubText = styled.p`
 margin: 0;
 font-size: 11px;
 line-height: 12px;
 color: #757575;
`

const OrangeText = styled.span`
 color: #f88331;
`

const TabContainer = styled.div``

const TabInnerCon = styled.div``

const TabInnerHead = styled.h1`
margin: 0;
font-size: 15px;
color: #333333;
`
const SizeFlexContainer = styled.div`
display: flex;
margin-top: 10px;
`

const SizeContainer = styled.div`
text-align: center;
margin-right: 12px;
`

const SizeImg = styled.img``

const SizeDesc = styled.p`
margin: 0;
font-size: 11px;
color: #333333;
`

const CheckDiv = styled.div`
display: flex;
margin-top: 10px;
`

const HtDiv = styled.div`
 display: flex;
 align-items: center;
 margin-right: 20px;
`

const HtP = styled.p`
margin: 0;
color: #757575;
font-size: 13px;
`

const InputCon = styled.div`
  width: fit-content;
  overflow: hidden;
  border-radius: 50px;
  height: 30px;
  border: 1px solid #e8e8e8;
  display: flex;
  margin-top: 35px;
`;

const Input = styled.input`
  width: 32px;
  border: none;
  text-align: center;
`;

const InputBtn = styled.button`
  padding: 1px 8px;
  border: none;
  color: #757575;
  font-weight: 800;
`;

const Price = styled.p`
color: #f88331;
font-size: 38px;
margin: 0;
font-weight: 600;
margin-top: 12px;
`

const Small = styled.small`
font-size: 20px;
`
const PriceDetals = styled.p`
 font-size: 12px;
 margin: 0;
 margin-top: -10px;
 color: #757575;
`

const AddtocartContainer = styled.div`
display: flex;
margin-top: 25px;
`
const DiscoverBtn = styled.button`
  background: #333333;
  color: #ffffff;
  border-radius: 50px;
  padding: 10px 20px;
  /* margin: 30px auto 50px; */
  font-size: 14px;
  font-weight: 500;
  display: block;
  border: none;
  margin-left: 12px;

`;

const DiscoverBtn1 = styled.button`
  border:2px solid #333333;
  background: #ffffff;
  color: #333333;
  border-radius: 50px;
  padding: 10px 20px;
  /* margin: 30px auto 50px; */
  font-size: 14px;
  font-weight: 500;
  display: block;
`;

const Hr = styled.hr`
 color: #757575;
 margin: 50px auto;
 width: 75%;
`

const ProdMainContainer = styled.div`
text-align: center;
`

const ImagesTemp = styled.img``

const ArtDetails = () => {

  const [prodList, setProdList] = useState({})

  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    getProductById()
  }, [])

  const getProductById = async () => {
    await httpClient.get("/art_master/editArtMaster/" + String(sessionStorage.getItem("artId"))).then((res) => {
      // console.log(res);
      setProdList(res.data)
    })
  }

  return (
    <>
      <Header />
      <MainContainer>
        <HeadDesc>Artnstock / Art / Abstract Art / Shop Now</HeadDesc>
        <ArtMainContainer>
          <ArtLeftCon>
            <ArtImgCon>
              <ExBtn>Exclusive</ExBtn>
              <MainImgCon>
                <MainImg src={prodList.image} />
              </MainImgCon>
              <View src={viewImg} />
            </ArtImgCon>
            <BottomCon>
              <IconFlexCon>
                <IconLeft src={printIcon} />
                <IconLeft src={threedIcon} />
              </IconFlexCon>
              <IconFlexCon>
                <IconRight src={addIcon} />
                <IconRight src={likeIcon} />
                <IconRight src={shareIcon} />
              </IconFlexCon>
            </BottomCon>
            <TextHead>You have selected</TextHead>
            <BottomDetailsCard>
              <TopIconFlex>
                <TopIcon src={horizontalFrameImg} />
                <TopIcon src={frameInclude} />
                <TopIcon src={topMatImg} />
                <TopIcon src={bottomMatImg} />
                <TopIcon src={grayMatImg} />
              </TopIconFlex>
              <Table>
                <Tr>
                  <Td>Image Size:</Td>
                  <Td>20cm x 12cm</Td>
                </Tr>
                <Tr>
                  <Td>Top Mat width:</Td>
                  <Td>5cm</Td>
                </Tr>
                <Tr>
                  <Td>Bottom Mat Width:</Td>
                  <Td>3cm</Td>
                </Tr>
                <Tr>
                  <Td>Frame Size:</Td>
                  <Td>36cm x 28cm</Td>
                </Tr>
              </Table>
            </BottomDetailsCard>
          </ArtLeftCon>
          <ArtRightCon>
            <MainHeading>Printable Wall Art Home Decor <br />
              Artnstock Limited Edition</MainHeading>
            <ProfileCon>
              <ProfileImg src={profileImg} />
              <ProfileInnerCon>
                <ProfileImg src={proImg} />
                <SubText>by <OrangeText>Azra Creations</OrangeText></SubText>
              </ProfileInnerCon>
            </ProfileCon>
            <Table>
              <Tr>
                <Tdr>Product ID:</Tdr>
                <Tdr>ANS15994539</Tdr>
              </Tr>
              <Tr>
                <Tdr>Availability:</Tdr>
                <Tdr>In Stock</Tdr>
              </Tr>
              <Tr>
                <Tdr>Property Release:</Tdr>
                <Tdr>Yes</Tdr>
              </Tr>

            </Table>
            <TabContainer>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 0, borderColor: 'divider', bgcolor: '#eeeeee', borderRadius: '20px', height: '40px', overflow: 'hidden' }}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Size" value="1" sx={{ borderTopLeftRadius: '20px', overflow: 'hidden' }} />
                    <Tab label="Frame" value="2" />
                    <Tab label="Mat" value="3" />
                    <Tab label="Material" value="4" />
                  </TabList>
                </Box>
                <TabPanel value="1" style={{ padding: "20px 0 0 0" }}>
                  <TabInnerCon>
                    <TabInnerHead>Select Print Orientation</TabInnerHead>
                    <SizeFlexContainer>
                      <SizeContainer>
                        <SizeImg src={horizontalFrameImg} />
                        <SizeDesc>Horizontal</SizeDesc>
                      </SizeContainer>
                      <SizeContainer>
                        <SizeImg src={verticalFrameImg} />
                        <SizeDesc>Vertical</SizeDesc>
                      </SizeContainer>
                    </SizeFlexContainer>
                    <TabInnerHead style={{ marginTop: "25px" }}>Select Horizontal Size</TabInnerHead>
                    <CheckDiv>
                      <HtDiv>
                        <Checkbox defaultChecked color="default" />
                        <HtP>25cm x 20cm</HtP>
                      </HtDiv>
                      <HtDiv>
                        <Checkbox color="default" />
                        <HtP>36cm x 28cm</HtP>
                      </HtDiv>
                      <HtDiv>
                        <Checkbox color="default" />
                        <HtP>51cm x 41cm</HtP>
                      </HtDiv>
                      <HtDiv>
                        <Checkbox color="default" />
                        <HtP>76cm x 51cm</HtP>
                      </HtDiv>

                    </CheckDiv>
                    <CheckDiv>
                      <HtDiv>
                        <Checkbox color="default" />
                        <HtP>36cm x 28cm</HtP>
                      </HtDiv>
                      <HtDiv>
                        <Checkbox color="default" />
                        <HtP>51cm x 41cm</HtP>
                      </HtDiv>
                      <HtDiv>
                        <Checkbox color="default" />
                        <HtP>76cm x 51cm</HtP>
                      </HtDiv>
                    </CheckDiv>
                    <SizeDesc style={{ marginTop: "10px" }}>The artwork will be cropped to fit the selected size. <br />
                      The sizes above are standard print sizes for horizontal images.
                    </SizeDesc>

                  </TabInnerCon>
                </TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
                <TabPanel value="4">Item Four</TabPanel>
              </TabContext>
              <InputCon>
                <InputBtn>{"-"}</InputBtn>
                <Input value={2} />
                <InputBtn>{"+"}</InputBtn>
              </InputCon>
              <Price> <Small>$</Small>189</Price>
              <PriceDetals>Show Price Details</PriceDetals>
              <AddtocartContainer>
                <DiscoverBtn1>Add to Cart</DiscoverBtn1>
                <DiscoverBtn>Shop Now</DiscoverBtn>
              </AddtocartContainer>
              <SizeDesc>* GST, Branding, Logistics and Customized Packaging charges additional as applicable. <br />
                Returns and exchange. <OrangeText> Know more</OrangeText></SizeDesc>
              <ImagesTemp style={{ marginTop: "30px" }} src={offerImg} />
            </TabContainer>

          </ArtRightCon>
        </ArtMainContainer>
        <Hr />
        <ProdMainContainer >
          <ImagesTemp style={{ margin: "0 auto" }} src={MarchandiseImg} />
          <ImagesTemp src={ProdImg} />
        </ProdMainContainer>
      </MainContainer>

      <div className="container">
        <div className="roe">
          <div className="col-lg-12">
            <DropZone />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ArtDetails