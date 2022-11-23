import React, { useState } from 'react'
import user from "../../assets/header/user_head.svg"
import tempProfile from "../../assets/ap/profile.png"
import locationIcon from "../../assets/art/LocationPointer.svg"
import "./profileDrop.css"

const ProfileDrop = () => {
    const [isShow, setIsShow] = useState(false)

    const toggle = () => {
        if (isShow == false) {
            setIsShow(true)
        } else {
            setIsShow(false)
        }
    }
    return (
        <div className="main">
            <div className="topIcon" onClick={() => toggle()}>
                <img style={{  width: '15px' }} src={user} alt="" />
            </div>
            {isShow && (<div className="dropdownMenuPro">
                <div className="top">
                    <div className="profileCon">
                        <img className='profileImg' src={tempProfile} alt="" />
                        <div className="profileDetails">
                            <h2 className="name">Azra Creations</h2>
                            <p className="normalText">User ID: ANS98765432</p>
                            <p className="normalText">Illustrator/Photographer</p>
                            <p className="normalText"> <img src={locationIcon} alt="" /> Pune, India</p>
                        </div>
                    </div>
                    <button className='accBtn'>Account Settings</button>
                </div>
                <ul className='ulList1'>
                    <li className='listItem1'>My Collections</li>
                    <li className='listItem1'>Plans</li>
                    <li className='listItem1'>Purchase History</li>
                    <li className='listItem1'>Referral Earnings</li>
                    <li className='listItem1'>Customer Support</li>
                </ul>

                <div className="contributor">
                    <h2 className='head'>Contributor</h2>
                    <ul className='ulList1'>
                        <li className='listItem1'>Dashboard</li>
                        <li className='listItem1'>Upload</li>
                        <li className='listItem1'>File Manager</li>
                        <li className='listItem1'>Releases</li>
                        <li className='listItem1'>Earnings</li>
                        <li className='listItem1'>Promote My Work</li>
                        <li className='listItem1'>View My Shop</li>
                        <li className='listItem1'>Contributor Support</li>
                    </ul>
                </div>

                <button className='signOut' >Sign Out</button>
            </div>)}
        </div>
    )
}

export default ProfileDrop