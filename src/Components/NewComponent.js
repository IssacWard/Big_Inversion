import React, { Component } from 'react';


const PersonCard = props => {
    return(
        <div>
            <h1>{props.user.lastName}, {props.user.firstName}</h1>
            <p>Age: {props.user.age}</p>
            <p>Hair Color: {props.user.hairColor}</p>
        </div>
    )
}

export default PersonCard;

