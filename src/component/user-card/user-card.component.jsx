import React from "react";
import './user-card.component.scss';

const UserCard = ({singleUser}) => {
    return(
        <div className="user-card-container">
            <img className="user-img" src={singleUser.avatar} alt="user pic" />
            <h1 className="user-text">{singleUser.first_name} {singleUser.last_name}</h1>
            <h3 className="user-email">{singleUser.email}</h3>
        </div>
    );
}

export default UserCard;