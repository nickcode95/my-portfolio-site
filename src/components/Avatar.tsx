import React from 'react';

function Avatar() {
    return (
        <div className="center">
            <img id="avatar1" src="images/AvatarMaker.png" alt="avatar"></img>
            <div className="middle padding-top">
                <div className="padding-top"></div>
                <h1>Hi</h1>
                <p>Welcome to my Portfolio Page!</p>
                <p>On this page, you'll find some of my projects built in React, EJS and hosted on Microsoft Azure Cloud with App Service.</p>
                <p>I have been in tech for over four years' and have spent the last two years at Microsoft as an Azure Specialist. <br /><br /> My guidance to customers on Public Cloud architecture has
                    been directly responsible for over USD$4 million in revenue for Microsoft, and I have helped companies prevent over $1 million in daily losses from failing IT infrastructure.
                </p>
                <p>I have had the greatest reward from helping businesses solve problems by using technology and I wish to deepen my learning as a Front-End Engineer.</p>
                <div className="breaker">
                    <small>. . . . .</small>
                </div>
                <img id="avatar2" src="images/avatarsmile.png" alt="person smiling"></img>
            </div>
            <h1 >Things I can do</h1>

            <small>. . . . .</small>
            <div className="padding-top"></div>
            <div className="padding-top"></div>
        </div>
    )
}

export default Avatar;