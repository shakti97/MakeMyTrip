import React from "react";
import {connect} from "react-redux";
import {store} from "../Store/Store";
import {BusSearch} from "../Components/BusSearch";
import BusList from "../Components/BusList";


export class Bus extends React.Component{
    constructor(props,name,From,To,depTime,ArrTime,Fare){
        super();
        this.name=name;
        this.From=From;
        this.To=To;
        this.depTime=depTime;
        this.ArrTime=ArrTime;
        this.Fare=Fare;
    }
    takeFrom(event){
        this.From=event.target.value;
        console.log("from ",this.From);
    }
    takeTo(event){
        this.To=event.target.value;
    }
    SearchRetrival(event){
        let arr={from: this.From,to: this.To};
        console.log("from",this.From);
        console.log("to",this.To);
        if(arr.from!=arr.to){
        store.dispatch({type:"SearchForBus",payload: arr});
        }
        else{
            alert("Boarding Point and Destination Point Must Not Same");
        }
    }
    booking(event){
        var name=event.target.value;
        console.log("name Of the Bus",name);
        store.dispatch({type:"BookBus",payload : name});
    }
    render(){
        return (
        <div>
            Bus Booking Center
            <BusSearch From={this.takeFrom.bind(this)} To={this.takeTo.bind(this)} Search={this.SearchRetrival.bind(this)}/>
            <BusList booking={this.booking.bind(this)}/>
        </div>
    )
}
}