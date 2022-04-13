import React from 'react'
import NavBar from '../../Navbar'
import img_home from '../../images/img_home.jpg'
import Footer from '../../Footer'

import { Link } from 'react-router-dom'

export default function AHome() {
    return (
        <>
            <NavBar />

            <div>


                <div class="card" style={{ marginLeft: 180, marginBottom: 0 }}>

                    <div class="container">
                        <div className="row">
                            <div className="col-6">
                                <h1 class="card-title"><u>Admin</u></h1>
                            </div>
                            <div className="col-6" >
{/* 
                                <Link to="/Patient/register" className="btn btn-dark" style={{ float: 'right', margin: 10 }}>Register</Link> */}

                                <Link to="/ALogin" className="btn btn-dark" style={{ float: 'right', margin: 10 }}>login</Link>

                            </div>
                        </div>

                    </div>
                    <div class="card-body">
                    </div>
                    <img class="card-img" src={img_home} alt="Card image cap" />
                </div>


            </div>
            <div style={{ marginTop: 850 }}>

                <Footer />
            </div>

        </>

    )
}
