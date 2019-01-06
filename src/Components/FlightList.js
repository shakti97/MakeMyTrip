import React from "react";
import {store} from "../Store/Store";
import {Flighte} from "../Components/Flighte.js";
import {connect} from 'react-redux';

const FlightList=(props)=>{
    console.log("Here");
    return (
        <div>
            {props.list.map((flighte)=>
                <Flighte fli={flighte} booking={props.booking} /> 
            )}
        </div>
    )
}
const mapStateToProps=(state)=>{
    return {
        list:state.SearchFlight.FlightAvailable
    }
}
export default connect(mapStateToProps)(FlightList);