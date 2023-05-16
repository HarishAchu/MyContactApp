import React from "react";
import user from "../images/User.png";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
    const { id, name, email} = props.contact;
    return(
        <div className="item">
            <img className="ui avatar image" src={user} alt="user"/>
                <div className="content">
                    <Link to={{pathname:`/contact/${id}`, state:{contact: props.contact}}}>
                    <div className="header">{name}</div>
                    <div>{email}</div> 
                    </Link>
                 </div>
            <i className="trash alternate outline icon" style={{color:"blue", marginTop: "50px"}}
            onClick={()=>{props.clickHandler(id)}}></i>
            <Link to={{pathname:`/edit`, state:{contact: props.contact}}}>
            <i className="edit alternate outline icon" style={{color:"red", marginTop: "50px"}} ></i>
            </Link>
        </div>

    );
};

export default ContactCard; 