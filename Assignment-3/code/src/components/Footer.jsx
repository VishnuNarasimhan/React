import React from "react";

function Footer(props){
    return (
        <div className="product-list">
            <p className="check-box">◻</p>
            <img src={props.profileImg} alt="employeeImg" />
            <span className="para">
                <p>Boltaart Bosbessen</p>
                <p>Overheerlijke Boltaart met Bosbessen uit de keuken van de Bijenkorf.</p>
            </span>
            
            <div className="right-arrow">{props.arrow}</div>
        </div>
    );
}

export default Footer