import {Flight} from "../Components/Flight";
import {Bus} from "../Components/Bus";
import {Hotel} from "../Components/Hotel";
import {Holiday} from "../Components/Holiday";
import { combineReducers } from "redux";
import {store} from "../Store/Store";
import {middleware} from "../Components/Categories"
var initialState ={
    fetching: false,
    fetched: false,
    Flight : [],
    Hotel : [],
    Holiday :[],
    Bus : [],
    Cabs:[],
    GiftCard:[],
    FlightAvailable:[],
    AddToBookFlight:[],
    AddToBookHotel :[],
    AddToBookHoliday : [],
    AddToBookBus : [],
    BusAvailable : [],
    error : null,
};
var cart=[];

const FlightReducer = (state =initialState.Flight,action)=>{
   console.log("action.type",action.type);
        if(action.type=="Receive_Data_Flights_PENDING"){
            console.log("promise pending")
            return  {...state,fetching :true,fetched :false}
        // case "Receive_Data_Flights_PENDING" : {
        //     console.log("promise pending")
        //     return  {...state,fetching :true,fetched :false}
        //     break;
        }
        else if(action.type=="Receive_Data_Flights_REJECTED"){
            console.log("promise Rejected");
            alert("Internet Connection Lost");
            return {...state, fetching : false, fetched : true}
        }
        // case "Receive_Data_REJECTED" :{
            // console.log("promise Rejected");
            // return {...state, fetching : false, fetched : true}
            // break;
        // }
        else if(action.type=="Receive_Data_Flights_FULFILLED"){
            console.log(state);
            return {
            ...state,
            fetching : false,
            fetched : true,
             Flight : action.payload[0].Flights
             };
            console.log("hi",action);
        }
        else{
            return state;
        }
    }
const HotelReducer =(state=initialState.Hotel,action)=>{
   console.log("action.type",action.type);
    switch(action.type){
        case "Receive_Data_Hotels_PENDING" : {
            console.log("promise pending")
            return  {...state,fetching :true , fetched : false,Hotel : ["","",""]}
            break;
        }
        case "Receive_Data_Hotels_REJECTED" :{
            console.log("promise Rejected");
            return {...state, fetching : false , fetched : true}
            break;
        }
        case "Receive_Data_Hotels_FULFILLED" : {
            return {...state,
            fetching : false,
            fetched : true,
             Hotel : action.payload[0].Hotels};
        break;
        }
    }
    return state;
};
const HolidayReducer =(state=initialState.Holiday,action)=>{
    console.log("action.type",action.type);
    switch(action.type){
        case "Receive_Data_Holidays_PENDING" : {
            console.log("promise pending")
            return  {...state,fetching :true , fetched : false,Holiday : [" "," "]}
            break;
        }
        case "Receive_Data_Holidays_REJECTED" :{
            console.log("promise Rejected");
            return {...state, fetching : false, fetched : true}
            break;
        }
        case "Receive_Data_Holidays_FULFILLED" : {
            return {...state,
            fetching : false,
            fetched : true,
             Holiday : action.payload[0].Holidays};
             break;
        }
    }
    return state;
};
const BusReducer = (state=initialState.Bus,action)=>{ 
    console.log("action.type",action.type);
    switch(action.type){
        case "Receive_Data_Bus_PENDING" : {
            console.log("promise pending")
            return  {...state,fetching :true, fetched : false, Bus : [" "," "]}
            break;
        }
        case "Receive_Data_Bus_REJECTED" :{
            console.log("promise Rejected");
            return {...state, fetching : false, fetched : true}
            break;
        }
        case "Receive_Data_Bus_FULFILLED" : {
            return{...state,
            fetching : false,
            fetched : true,
             Bus : action.payload[0].Bus};
             break;
        }
    }
    return state;
};
const CabsReducer=(state=initialState.Cabs,action)=>{
    console.log("action.type",action.type); 
    switch(action.type){
        case "Receive_Data_Cabs_PENDING" : {
            console.log("promise pending")
            return  {...state,fetching :true , fetched : false}
            break;
        }
        case "Receive_Data_Cabs_REJECTED" :{
            console.log("promise Rejected");
            return {...state, fetching : false, fetched : true}
            break;
        }
        case "Receive_Data_Cabs_FULFILLED" : {
            state ={...state, 
            fetching : false,
            fetched : true,
            Cabs : action.payload[0].Cabs};
            break;
        }
    }
    return state;
};
const GiftCardReducer=(state=initialState.GiftCard,action)=>{
    console.log("action.type",action.type);
    switch(action.type){
        case "Receive_Data_Gift Cards_PENDING" : {
            console.log("promise pending")
            return  {...state,fetching :true , fetched : false}
            break;
        }
        case "Receive_Data_Gift Cards_REJECTED" :{
            console.log("promise Rejected");
            return {...state, fetching : false, fetched : true}
            break;
        }
        case "Receive_Data_Gift Cards_FULFILLED" : {
            return {...state, 
            fetching : false,
            fetched : true,
            GiftCard: action.payload[0].GiftCard};
            break;
        }
    }
    return state;
};
const SearchFlight=(state=initialState,action)=>{
    console.log("SearchFlight",action.type);
    switch(action.type){
        case ("SearchForFlight"): {
            let Available=[];
            let arr=store.getState().Flights.Flight;
            console.log("Arrnew", arr);
            console.log("initialStateForeach");
            arr.forEach((object)=>{
                    object.From.forEach((fromValue)=>{
                        if(fromValue===action.payload.from){
                            object.To.forEach((toValue)=>{
                                if(toValue===action.payload.to){
                                     Available.push(object);
                                     console.log("Available",Available);
                                }
                            })
                        }     
                    })
                })
            return {
                ...state,
                FlightAvailable : Available
            };
            break;
        }
        case("BookFlight"):{
            console.log("I m here in BookFlight");
            console.log("action",action.payload);
            let arr=store.getState().Flights.Flight;
            arr.forEach((object)=>{
                    if(object.name===action.payload){
                        cart.push(object);
                        console.log("Fight Booked",cart);
                    }
                })
            return {
                ...state,
                AddToBookFlight : cart
            };
            break;
        }
        case("BookHotel"):{
            console.log("I m here in BookHotel");
            console.log("action",action.payload);
            let arr=store.getState().Hotels.Hotel;
            arr.forEach((object)=>{
                if(object.name===action.payload){
                    cart.push(object);
                    console.log("Hotel Booked",cart);
                }
            })
            return {
                ...state,
                AddToBookHotel : cart
            };
            break;
        }
        case("BookHoliday"):{
            console.log("I m here in BookHoliday");
            console.log("action",action.payload);
            let arr=store.getState().Holiday.Holiday;
            arr.forEach((object)=>{
                if(object.name===action.payload){
                    cart.push(object);
                    console.log("Holiday Booked",cart);
                }
            })
            return {
                ...state,
                AddToBookHoliday : cart
            };
            break;
        }
        case ("SearchForBus"): {
            console.log("SearchForBuses")
            let Available=[];
            let arr=store.getState().Buses.Bus;
            console.log("Arrnew", arr);
            console.log("initialStateForeach");
            arr.forEach((object)=>{
                    object.From.forEach((fromValue)=>{
                            console.log("Fromvalue",fromValue);
                            console.log("payload.from",action.payload.from);        
                            if(fromValue===action.payload.from){
                            object.To.forEach((toValue)=>{
                                console.log("toValue",toValue);
                                console.log("payloa.to",action.payload.to);
                                if(toValue===action.payload.to){
                                     Available.push(object);
                                     console.log("Available",Available);
                                }
                            })
                        }     
                    })
                })
            return {
                ...state,
                BusAvailable: Available
            };
            break;
        }
        
    }
    return state;
}
// const AddToBook=(state=initialState.AddToBook,action)=>{
//     console.log("ADDTOBOOK",action.type);
//     let cart=[];
//     let arr=store.getState().Flights.Flight;
//     arr.forEach((object)=>{
//         object.From.forEach((name)=>{
//             if(name===action.payload.name){
//                 cart.push(object);
//                 console.log("Fight Booked",cart);
//             }
//         })
//     })
//     return {
//         ...state,
//         AddToBook : cart
//     };
//     return state;
// }

export const Reducer =combineReducers({
   Flights: FlightReducer,
   Hotels: HotelReducer,
   Holiday: HolidayReducer,
   Buses: BusReducer,
   Cabs: CabsReducer,
   GiftCards: GiftCardReducer,
   SearchFlight

})






// export const Reducer = (state=initialState,action)=>{
//     switch (action.type) {
//         case "Promise_Pending" : {
//             console.log("fetch Start");
//             return {
//                 ...state,
//                  fetching : true,}
//             break;
//         }
//         case "Fetch_User_Error" : {
//             console.log("Error");
//             return{
//                 ...state,
//                 fetching: false,
//                 error : action.payload,}
//             }
//             break;
//         case "Receive_data_Flights" : {
//             console.log("Recieve data flight");
//             return{
//                 ...state,
//                 fetching: false,
//                 fetched: true,
//                 Flight : action.payload.forEach(element => {
//                     Flight.push(new Flight(element.name,element.From,element.To,element.depTime,element.arrTime,element.Fare))
                    
//                 })
//             }
//             break;
//         }
//         case "Receive_data_Hotels" : {
//             return{
//                 ...state,
//                 fetching: false,
//                 fetched: true,
//                 Hotel : action.payload.forEach(element => {
//                     Hotel.push(new Hotel(element.name,element.City,element.imageUrl,element.Rating,element.Price))
                    
//                 })
//             }
//             break;
//         }
//         case "Receive_data_Holidays" : {
//             return{
//                 ...state,
//                 fetching: false,
//                 fetched: true,
//                 Holiday: action.payload.forEach(element => {
//                     Holiday.push(new Holiday(element.name,element.imageUrl,element.Price))
                    
//                 })
//             }
//             break;
//         }
//         case "Receive_data_Bus" : {
//             return{
//                 ...state,
//                 fetching: false,
//                 fetched: true,
//                 Bus : action.payload.forEach(element => {
//                     Bus.push(new Bus(element.name,element.From,element.To,element.depTime,element.arrTime,element.Fare))
                    
//                 })
//             }
//             break;
//         }
//         case "Receive_data_Cabs" : {
//             return{
//                 ...state,
//                 fetching: false,
//                 fetched: true,
//                 Cabs : null,
//             }
//             break;
//         }
//         case "Receive_data_Gift Card" : {
//             return{
//                 ...state,
//                 fetching: false,
//                 fetched: true,
//                 GiftCard : null,
//             }
//             break;
//         }
//     }
// }



