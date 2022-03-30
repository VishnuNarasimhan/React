import React from "react";

function Card(props) {
  return (
    <div className="card">
        <img className="image" src ={props.img} alt="avatar_img"/>
        <h2 className="name">{props.name}</h2>
        <p className="location">
            <p className="location-title">Location</p>
            <p className="prop">{props.location}</p> 
        </p>
        <p className="bloodGroup">
            <p className="bloodGroup-title">Blood Group</p>
            <p className="prop">{props.bloodGroup}</p> 
        </p>
        <p className="age">
            <p className="age-title">Age</p>
            <p className="prop">{props.age}</p> 
        </p> 
    </div>
  );
}

export default Card;