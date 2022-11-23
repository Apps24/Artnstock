import React from 'react'
import "./allItmsDrop.css"
import arrowImg from "../../assets/header/dropdown.svg"
import artIcon from "../../assets/header/Icon-Art.svg"
import photoIcon from "../../assets/header/Icon-Photos.svg"
import footageIcon from "../../assets/header/Icon-Footage.svg"
import musicIcon from "../../assets/header/Icon-Music.svg"
import templatesIcon from "../../assets/header/Icon-Templates.svg" 
import productIcon from "../../assets/header/Icon-Products.svg"
import { useState } from 'react'

const AllItemsDrop = () => {
    const [isShow, setIsShow] = useState(false)

    window.addEventListener("click", (e) => {
        // console.log(e.target.value);
        // if(e.target.value !== 0) {
        //     setIsShow(false)
        // }
    })

    const toggle = () => {
        if(isShow === false) {
        setIsShow(true)
    } else {
        setIsShow(false)
    }
    }
  return (
    
    <div className="main">
        <div className="topBtn" onClick={() => toggle()}>
            All Items
            <img style={{marginLeft: "10px"}} src={arrowImg} alt="" />
        </div>
        {isShow &&( <div className="dropdownMenu">
            <ul className='ulList'>
                <li className='listItem'>
                    <img className='listIcon' src={artIcon} alt="" /> 
                     Art
                </li>
                <li className='listItem'>
                    <img className='listIcon' src={photoIcon} alt="" /> 
                     Photos
                </li>
                <li className='listItem'>
                    <img className='listIcon' src={footageIcon} alt="" /> 
                     Footage
                </li>
                <li className='listItem'>
                    <img className='listIcon' src={musicIcon} alt="" /> 
                     Music
                </li>
                <li className='listItem'>
                    <img className='listIcon' src={templatesIcon} alt="" /> 
                     Templates
                </li>
                <li className='listItem'>
                    <img className='listIcon' src={productIcon} alt="" /> 
                     Products
                </li>
            </ul>
        </div>)}
    </div>
  )
}

export default AllItemsDrop