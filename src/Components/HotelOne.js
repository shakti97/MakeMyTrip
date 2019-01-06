import React from "react";
import "../CSS/HotelOne.css";

export const HotelOne=(props)=>{
    console.log("hotelOne");
    return(
        <div id="HotelOne" className="col-md-5 card">
         <span> <img src={props.htl.imageUrl} alt="Hotel" /> </span>
         <span> <h4>{props.htl.name}</h4> </span>
         <span><h4>{props.htl.City}</h4></span>
         <div className="Line">
         <span className="left"><h5>Ratings {props.htl.Rating}</h5></span>
         <span className="right"><h5>Price {props.htl.Price}</h5></span>
         </div>
         <br/>
         <button value={props.htl.name} onClick={props.booking}>Book Now</button>
         <div>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore [...]
         </div>
        </div>
    )
}