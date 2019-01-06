import React from "react";
import HotelList from "../Components/HotelList";
import {connect} from "react-redux";
import {store} from "../Store/Store";

export class Hotel extends React.Component{
    constructor(props,name,City,imageUrl,Rating,Price){
        super();
        this.name=name;
        this.City=City;
        this.imageUrl=imageUrl;
        this.Rating=Rating;
        this.Price=Price;
    }
    booking(event){
        var name=event.target.value;
        console.log("name of the hotel",name);
        store.dispatch({type:"BookHotel",payload : name});
    }
    render(){
        return (
            <div>
               Hotel Booking Center
               <HotelList booking={this.booking.bind(this)} />
            </div>
        )
    }
}