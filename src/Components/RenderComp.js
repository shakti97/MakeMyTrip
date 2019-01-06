import React from "react";
import "../CSS/carousel.css"
import { Route, Switch } from "react-router-dom";
import { Flight } from "../Components/Flight"
import { Holiday } from "../Components/Holiday"
import { Hotel } from "../Components/Hotel"
import { Bus } from "../Components/Bus"
import { Cab } from "../Components/Cab"
import { GiftCard } from "../Components/GiftCard"
import {DemoCarousel} from "../Components/Carousel"

export const RenderComp = () => {
    return (
        <div id="carousel">
                <Switch>
                    <Route path='/' exact component={DemoCarousel} />
                    <Route path='/category/Flights' exact component={Flight} />
                    <Route path='/category/Hotels' exact component={Hotel} />
                    <Route path='/category/Holidays' exact component={Holiday} />
                    <Route path='/category/Bus' exact component={Bus} />
                    <Route path='/category/Cab' exact component={Cab} />
                    <Route path='/category/Gift Card' exact component={GiftCard} />
                </Switch>
        </div>
    )
}