import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../CSS/footer.css";

export const Footer= ()=>{
    return (
        
<footer id="footer" class="page-footer font-small blue pt-4 mt-4">

    
    <div class="container-fluid text-center text-md-left">
        <div class="row">

            
            <div class="col-md-8">
                <h5 class="text-uppercase">Footer Content</h5>
                <p>Here you can use rows and columns here to organize your footer content.</p>
            </div>
            

            
            <div class="col-md-4">
                <h5 class="text-uppercase">Links</h5>
                <ul class="list-unstyled">
                    <li>
                        <a href="#!">Link 1</a>
                    </li>
                    <li>
                        <a href="#!">Link 2</a>
                    </li>
                    <li>
                        <a href="#!">Link 3</a>
                    </li>
                    <li>
                        <a href="#!">Link 4</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    

        <div class="footer-copyright py-3 text-center">
        © 2018 Copyright:
        <a href="#"> MakeMyTrip.com </a>
    </div>
    

</footer>
    )
}