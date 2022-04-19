import React from "react";

function MainOne(props){
    return (
        <div className="custome-info">
            <div className="Appointment">
                <p>Appointment: </p>
                <p>{props.appointment}</p>
            </div>
            <div className="email">
                <p>Email: </p>
                <p>{props.email}</p>
            </div>
            <div className="phone">
                <p>Phone: </p>
                <p>{props.phone}</p>
            </div>
        </div>
    );
}

export default MainOne