import React from "react";
import "../CSS/categories.css";
import {Link} from "react-router-dom"; 
import {store} from "../Store/Store";

// export const middleware = applyMiddleware(logger(),promiseMiddleware(),thunk);
export class  Categories extends React.Component{
    
    fetchData(clicked) {
        console.log("fetchdata function invoked");
        let action="Receive_Data"+"_"+clicked;
        store.dispatch({
            type : action,
            payload : fetch("https://gist.githubusercontent.com/shakti97/28e3cefd8c29c802f9a6055de703cffd/raw/bd5edc0d2917657e9eba5dae71a7e030e3844b7a/AllData.json").then((response)=>{
               return  response.json();
            })
        })
        // store.dispatch((dispatch)=>{
        //     dispatch({type:"Fetch_Data_Start"})
        //     fetch.get("../Json/All")
        //     .then((response)=>{
        //         dispatch({type: action, payload : response.data.clicked})
        //     })
        //     .catch((err)=>{
        //         dispatch({type:"Fetch_User_Error", payload: err})
        //     })
        // })
    }
    doOperation(event){
        console.log("this.doOperation")
        let clicked = event.target.innerHTML;
        console.log("clicked",clicked);
        if(clicked==="Flights"){
            console.log("flight event clicked");
            this.fetchData(clicked);
        }
        else
        if(clicked==="Hotels"){
            console.log("invoked");
            this.fetchData(clicked);
        }
        else
        if(clicked==="Holidays"){
            this.fetchData(clicked);
        }
        else
        if(clicked==="Bus"){
            this.fetchData(clicked);
        }
        else
        if(clicked==="Cabs"){
            this.fetchData(clicked);
        }
        else
        if(clicked==="Gift Cards"){
            this.fetchData(clicked);
        }
    }
    render(){
    return(
        <div id="categories">
            <ul>
                <li ><Link to="/category/Flights"><b onClick={this.doOperation.bind(this)}>Flights</b></Link></li>
                <li><Link to="/category/Hotels"><b onClick={this.doOperation.bind(this)}>Hotels</b></Link></li>
                <li><Link to="/category/Holidays"><b onClick={this.doOperation.bind(this)}>Holidays</b></Link></li>
                <li><Link to="/category/Bus"><b onClick={this.doOperation.bind(this)}>Bus</b></Link></li>
                <li><Link to="/category/Cab"><b onClick={this.doOperation.bind(this)}>Cabs</b></Link></li>
                <li><Link to="/category/Gift Card"><b onClick={this.doOperation.bind(this)}>Gift Cards</b></Link></li>
            </ul>
        </div>
    )
}}