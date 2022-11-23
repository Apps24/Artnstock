import React, { useEffect, useRef, useState } from 'react'
import { httpClient } from '../../axios'
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from 'styled-components';
import rightArrow from "../../assets/banner/Right Arrow.svg"
import leftArrow from "../../assets/banner/Left Arrow.svg"
import offImage from "../../assets/banner/Text - OFF.png"
import divider from "../../assets/banner/Divider.png"
import wallpaper from "../../assets/join/Wallpaper.svg"

const MainDiv = styled.div`
 position: relative;
`

const LeftCon = styled.div`
 position: absolute;
 left: 4%;
 top: 50%;
 transform: translate(0,-50%);
 /* width: 395px; */
`
const LeftHeading = styled.h1`
 font-size: 7.5rem;
 font-weight: 500;
 color: #333333;
 margin: 0;
`

const LeftDesc = styled.p`
font-size: 3.8rem;
font-weight: 400;
color: #333333;
line-height: 4rem;
margin: 0;
`
const LeftBtn = styled.button`
background: #333333;
color: white;
height: 4rem;
width: 16.6rem;
border: none;
border-radius: 50px;
margin: 25px 0 18px 0;
font-size: 1.4rem;
border: none;
`

const Copytext = styled.p`
font-size: 1.1rem;
font-weight: 400;
color: #333333;
line-height: 1.5rem;
margin: 0;
`
const StrongSpan = styled.span`
font-weight: 500;
`


const RightContainer = styled.div`
    position: absolute;
    right: 4%;
 top: 50%;
 transform: translate(0,-50%);
`

const RightHead = styled.p`
 font-weight: 500;
 font-size: 1.5rem;
 line-height: 1.9rem; 
 color: #333333;
 margin: 0;
`

const RightDesc = styled.p`
font-weight: 400;
font-size: 1.1rem;
color: #333333;
margin: 0;
`

const BlueBtn = styled.button`
background: #34deee;
padding: 8px 16px;
border: none;
border-radius: 50px;
margin: 10px 0 6px 0;
font-size: 1.2rem;
font-weight: 500;
`

const OffImg = styled.img``

const IconImg = styled.img``

const SliderHome = ({ type }) => {

    const [bannerList, setBannerList] = useState([])
    useEffect(() => {
        const getBanner = async () => {
            await httpClient.get("/banner_master/getBannerTypeWiseList/" + type).then((res) => {
                // console.log(res);
                setBannerList(res.data)
            })
        }
        getBanner()
    }, [type])

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <IconImg src={rightArrow} />,
        prevArrow: <IconImg src={leftArrow} />,
    };

    // console.log(bannerList);
    return (
        <>
            <Slider {...settings}>
                {bannerList.map((data) => {
                    return (
                        <MainDiv key={data.bannerId} style={{ height: 'max-content', width: '100%', }}>
                            <img alt='ted' style={{ width: '100%',  }} src={data.imagePath} />
                            <LeftCon>
                                <LeftHeading>{data.bannerLeftTitle}</LeftHeading>
                                <LeftDesc>Curated art in all styles, <br /> sizes and colours</LeftDesc>
                                <LeftBtn>{data.buttonDescription}</LeftBtn>
                                <Copytext><StrongSpan>@Copyright 2022. Artnstock Private Limited.</StrongSpan></Copytext>
                                <Copytext>All content included in the website (including, but not limited to, logos, images, <br />
                                    photos, designs, graphics and text) is the property of Artnstock Pvt. Ltd.</Copytext>
                            </LeftCon>
                            <RightContainer>
                                <OffImg src={offImage} />
                                <RightHead><StrongSpan>An exclusive welcome offer on your first order</StrongSpan></RightHead>
                                <RightDesc>*Offer is available to new customers only.</RightDesc>
                                <BlueBtn>Shop with 20% Off</BlueBtn>
                                <OffImg src={divider} />
                                <OffImg style={{marginTop: '10px'}} src={wallpaper} />
                            </RightContainer>
                        </MainDiv>
                    )
                })}
            </Slider>
        </>
    )
}

export default SliderHome