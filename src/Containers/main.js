import React from "react";
import { Header } from "../Components/Header";
import { Categories } from "../Components/Categories";
import {Footer} from "../Components/Footer";
import {RenderComp} from "../Components/RenderComp";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../CSS/main.css";
export const Main = ()=>{
        return (
            <div id="main">
                <Header />
                <div class="row">
                    <div class="col-md-3"><Categories /></div>
                    <div class="col-md-6 carousel"><RenderComp /></div>
                    <div class="col-md-3"></div>
                </div>
                <Footer />
            </div>

        )
    }
