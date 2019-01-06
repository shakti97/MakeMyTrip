import React from 'react';
import "../CSS/Flighte.css"


 export const Flighte=(props)=>{
     console.log("Fli");
    return(
        
        <div id="Flighte"> 
        <span><h4>{props.fli.name}</h4> </span> 
        <span><b>Departure Time : </b> {props.fli.depTime} </span>
        <span><b>Arrival Time : </b>{props.fli.ArrTime} </span> 
        <span><b>Fare : </b>{props.fli.Fare}</span>
        <a><button value={props.fli.name} onClick={props.booking} >Book Flight</button></a>
       </div>
    )

}
