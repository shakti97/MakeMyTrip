import React from "react";
import {connect} from "react-redux";
import {store} from "../Store/Store";
import {FlightSearch} from "./FlightSearch" ;
import FlightList from "./FlightList";

export class Flight extends React.Component{
    constructor(props,name,From,To,depTime,ArrTime,Fare){
        super()
        this.name=name;
        this.From=From;
        this.To=To;
        this.depTime=depTime;
        this.ArrTime=ArrTime;
        this.Fare=Fare;
    }
    // const FlightList=(props)=>{
    //     return (
    //         <div>
    //         {props.Flights.map((Flight)=>}
    //         </div>
    //     )
    // }
    takeFrom(event){
        this.From=event.target.value;
        console.log("from ",this.From);
    }
    takeTo(event){
        this.To=event.target.value;
    }
    SearchRetrival(event){
        let arr={from: this.From,to: this.To};
        if(arr.from!=arr.to){
        store.dispatch({type:"SearchForFlight",payload: arr});
        }
        else{
            alert("Boarding Point and Destination Point Must Not Same");
        }
    }t
    booking(event){
        var name=event.target.value;
        console.log("name Of the flight",name);
        store.dispatch({type:"BookFlight",payload : name});
    }
    render(){
        return(
            <div>Flight Booking Data
               <FlightSearch From={this.takeFrom.bind(this)} To={this.takeTo.bind(this)} Search={this.SearchRetrival.bind(this)}/>
               <FlightList booking={this.booking.bind(this)}/>
            </div>
        )
    }
   
    }