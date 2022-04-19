import React from "react";

function MainSecond(props){
    return (
        <div className="order-info">
            <div className="status">
                <p>Status</p>
                <p>⚫{props.status}</p>
            </div>
            <div className="door">
                <p>Door</p>
                <p>{props.door}</p>
            </div>
            <div className="timeDate">
                <p>Time</p>
                <div className="time">
                    <span>{props.time}</span>
                    <p>{props.date}</p>
                </div>
            </div>
        </div>
    );
}

export default MainSecond