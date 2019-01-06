import React from "react";
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../CSS/header.css";
import {Switch,Route,Link} from "react-router-dom";

export const Header = () => {
    return (
        <div id="header" class="row">
            <div class="col-md-7 logo">
            <Switch>
                <Route path="/category/*" exact render={()=><span><Link to="/">Home</Link></span>}/> 
            </Switch>
            <img src={require("../Images/mmtlogo.png")} alt="MMTLOGO" />
            </div>
            <div class="col-md-5 navbarr">
                <div class="navBar">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#"><i class="fa fa-gift"></i><br/>Refer & Earn</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#"><i class="fa fa-automobile"></i><br/>Trips</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#"><i class="fa fa-money"></i><br/>Wallet</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link " href="#"><i class="fa fa-support"></i><br/>Support</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link " href="#"><i class="fa fa-user" ></i><br/>Login</a>
                                </li>
                                <li class="nav-item">
                                    <button><b><a class="nav-link " href="#">SignUp</a></b></button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

    );
}