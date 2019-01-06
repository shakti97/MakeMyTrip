import React from "react";
import "../CSS/BusSearch.css";

export const BusSearch=(props)=>{
        return(
            <div id="Search">
                <fieldset class="scheduler-border">
                <legend class="scheduler-border" >Search Buses Here</legend>
                 <label>From :</label>  <select type="text" placeholder="From" onChange={props.From}>
                 <option value="Boarding Point">Boading</option>
                 <option value="Delhi">Delhi</option>
                 <option value="Mumbai">Mumbai</option>
                 <option value="Bangalore">Bangalore</option>
                 </select>
                 <label>To :</label> 
                 <select type="text" placeholder="From" onChange={props.To}>
                 <option value="Destination Point">Destination</option>
                 <option value="Mathura">Mathura</option>
                 <option value="Azamgarah">Azamgarh</option>
                 <option value="Varanasi">Varanasi</option>
                 </select>
                 <br/><br/>
                 <button onClick={props.Search}>Search</button>
                </fieldset>
            </div>
        )
}