import React from "react";
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';


export const DemoCarousel = ()=>{
    return(
    <div>
        <span>Carousel here</span>
        <Carousel >
            <div>
                <img class="mainCarousel" src={require("../Images/makemytrip-Offer.png")} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img class="mainCarousel" src={require("../Images/download.png")}/>
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img class="mainCarousel" src={require("../Images/images.jpg")} />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
        
    </div>
    
    )
}