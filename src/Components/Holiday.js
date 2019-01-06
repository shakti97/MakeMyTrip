import React from "react";
import HolidayList from "../Components/HolidayList";
import {connect} from "react-redux";
import {store} from "../Store/Store";

export class Holiday extends React.Component{
    constructor(props,name,imageUrl,Price){
        super()
        this.name=name;
        this.imageUrl=this.imageUrl;
        this.Price=Price;
    }
    booking(event){
        var name = event.target.value;
        console.log("holiday",name);
        store.dispatch({type:"BookHoliday",payload:name});
    }
    render(){
    return(
        <div>
            Holiday Deciding Center
            <HolidayList booking={this.booking.bind(this)}/>
        </div>
    )
}
}