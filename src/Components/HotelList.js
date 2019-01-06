import React from "react";
import {connect} from "react-redux";
import {store} from "../Store/Store";
import {HotelOne} from "../Components/HotelOne";
import "../CSS/HotelList.css";

const HotelList=(props)=>{
    console.log("Hotel here");
    console.log("list",props.list);
    return(
        <div className="HotelContainer">
            {props.list.map((hotelOne)=>
                <HotelOne htl={hotelOne} booking={props.booking}/> 
            )}
        </div>
    )
} 
const mapStateToProps=(state)=>{
    console.log("Hotel",state.Hotels.Hotel);
    return {
        list:state.Hotels.Hotel
    }
}
export default connect(mapStateToProps)(HotelList);