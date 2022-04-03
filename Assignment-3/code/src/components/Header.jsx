import React from "react";

function Header(props){
    return (<div className="header">
        <div className="left-arrow">{props.arrow}</div>
        <p className="para-content">
            <p>{props.name}</p>
            <p>{props.employeeId}</p>
        </p>
        <button>Print</button>
    </div>);
}

export default Header;