import React from "react";
import user from "../images/UserProfile.jpg";
import { Link } from "react-router-dom";

const ContactDetail = (props) => {
    console.log("check in"+props);
    return(
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user"></img>
                    </div>
            <div className="content">
                <div className="header">Harish</div>
                <div className="description">Hai achu</div>
                </div>
                <div className=""></div>        
             </div>
        </div>

    );
};

export default ContactDetail; 