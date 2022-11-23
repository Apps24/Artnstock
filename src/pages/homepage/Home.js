import React from 'react'
import styled from 'styled-components'
import Header from '../../components/Header'
import MainBar from '../../components/header/MainBar'
import Combo from '../../components/Homepage/Combo'
import Faq from '../../components/Homepage/Faq'
import Footer from '../../components/Homepage/Footer'
import Grid from '../../components/Homepage/Grid'
import HomeJoin from '../../components/Homepage/HomeJoin'
import Limited from '../../components/Homepage/Limited'
import Magzine from '../../components/Homepage/Magzine'
import PopProd from '../../components/Homepage/PopProd'
import SliderHome from '../../components/Homepage/SliderHome'
import StaticHome from '../../components/Homepage/StaticHome'

const CustomHr = styled.hr`
  width: 80%;
  margin: auto;
  color: #efefef;
`
const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <MainBar />
      <SliderHome type="home" />
      <Grid type="home" />
      <CustomHr />
      <Limited type="home" />
      <CustomHr />
      <PopProd type="home" />
      <CustomHr />
      <Combo />
      <CustomHr />
      <StaticHome />
      <HomeJoin />
      <Magzine />
      {/* <Faq /> */}
      <Footer />
    </>
  )
}

export default Home