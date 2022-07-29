import React from "react";
import { CardContainer } from "./style";
import avatar from '../../../../assets/images/avatar1.png';

const Card = ({text, userName, userStatus}) => {
    return (
        <CardContainer>
            <p className="text">{text ? text : "“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “"}</p>
            <img src={avatar} alt="avatar" />
            <h4 className="name">{userName ? userName : 'Marvin McKinney'}</h4>
            <p className="status">{userStatus ? userStatus : 'Designer'}</p>
        </CardContainer>
    )
}

export default Card;