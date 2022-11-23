import React from 'react'
import styled from 'styled-components'
import Header from '../../components/Header'
import Faq from '../../components/Homepage/Faq'
import Footer from '../../components/Homepage/Footer'
import Grid from '../../components/Homepage/Grid'
import HomeJoin from '../../components/Homepage/HomeJoin'
import Limited from '../../components/Homepage/Limited'
import Magzine from '../../components/Homepage/Magzine'
import PopProd from '../../components/Homepage/PopProd'
import SliderHome from '../../components/Homepage/SliderHome'

const CustomHr = styled.hr`
  width: 80%;
  margin: auto;
  color: #efefef;
`

const ProdHome = () => {
  return (
    <>
    <Header />
    <SliderHome type="prod" />
    {/* <Grid type="prod" /> */}
    <CustomHr />
    <Limited type="prod" />
    <CustomHr />
    <PopProd type="prod" />
    <CustomHr />
    {/* <Combo />
    <CustomHr /> */}
    {/* <StaticHome /> */}
    <HomeJoin />
    <Magzine />
    <Faq />
    <Footer />
  </>
  )
}

export default ProdHome