import react from "react";
import { Link } from "react-router-dom";

import Clock from "../Time/Clock"
import { useNavigate } from "react-router";


function Header({ name, title }) {
    const nav = useNavigate();

    const logout =()=>{
        window.localStorage.clear();
        nav("/service")
    }
    return (
        <div>
            


                    
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
            <Link class ="navbar-brand" to="">Medicon</Link>
            <button className="navbar-toggler" type ="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li>
                <Clock />
                </li>
            <li>
            
            <div class ="d-flex my-2 my-lg-0" style={{marginRight: 50,marginLeft:20}}>
            {/* <a name="" id="" class="btn btn-outline-light my-2 my-sm-0" href="/service" role="button" >LogOut</a> */}
            <a name="" id="" class="btn btn-outline-light my-2 my-sm-0"  role="button" onClick={logout}>LogOut</a>
          
            </div>
            </li>


            </ul>

        </div>
                            </div >
                        </nav >
            

        </div >
    );

}

export default Header;