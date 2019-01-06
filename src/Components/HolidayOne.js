import React from "react";
import "../CSS/HolidayOne.css";

export const HolidayOne=(props)=>{
    console.log("HolidayOne");
    return(
        <div id="HolidayOne" className="col-md-5 card">
            <span> <img src={props.htl.imageUrl} alt="Hotel" /> </span>
            <span> <h4>{props.htl.name}</h4> </span>
            <span className="center"><h5>Price {props.htl.Price}</h5></span>
            <button value={props.htl.name} onClick={props.booking}>Book Now</button>
        </div>
    )
}