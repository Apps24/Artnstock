import React, { useState } from 'react'
import "./notificationDrop.css"
import notiIcon from "../../assets/header/Icon - Notification.svg"
import thumb1 from "../../assets/ap/Thumbnail1.png"
import thumb2 from "../../assets/ap/Thumbnail2.png"


const NotificationDrop = () => {
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
            <div className="iconCon" onClick={() => toggle()}>
                <img src={notiIcon} alt="" />
            </div>
            {isShow && (<div className="dropDownCon">
                <p className="title">Recently added on Artnstock</p>
                <hr className="hr" />
                <div className="notificationDiv">
                    <img className='notImg' src={thumb1} alt="" />
                    <div className="detailsCon">
                        <h2 className="notTitle">Office Merchandise <br /> Combo</h2>
                        <p className="notDesc">International Artist Azra's work <br />dictates the expression.</p>
                    </div>
                </div>
                <hr className="hr" />
                <div className="notificationDiv">
                    <img className='notImg' src={thumb2} alt="" />
                    <div className="detailsCon">
                        <h2 className="notTitle">Vector Art Printed <br /> on mug</h2>
                        <p className="notDesc">International Artist Azra's work <br />dictates the expression.</p>
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default NotificationDrop