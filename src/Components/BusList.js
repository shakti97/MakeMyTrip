import React from "react";
import {store} from "../Store/Store";
import {BusOne} from "../Components/BusOne.js";
import {connect} from 'react-redux';

const BusList=(props)=>{
    console.log("Here in bUSlIST");
    console.log("list",props.list);
    return (
        <div>
            {props.list.map((busOne)=>
                <BusOne fli={busOne} booking={props.booking} /> 
            )}
        </div>
    )
}
const mapStateToProps=(state)=>{
    return {
        list:state.SearchFlight.BusAvailable
    }
}
export default connect(mapStateToProps)(BusList);