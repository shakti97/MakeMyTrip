import React from "react";
import {connect} from "react-redux";
import {store} from "../Store/Store";
import {HolidayOne} from "../Components/HolidayOne";

const HolidayList= (props)=>{
    console.log("HolidayList");
    return(
        <div className="HolidayContainer">
            {props.list.map((holidayOne)=>
                <HolidayOne htl={holidayOne} booking={props.booking}/> 
            )}
        </div>
    )
}
const mapStateToProps=(state)=>{
    console.log("Holiday",state.Holiday.Holiday);
    return {
        list:state.Holiday.Holiday
    }
}
export default connect(mapStateToProps)(HolidayList);