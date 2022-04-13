import React from "react";
import { Link } from "react-router-dom";
import Reception from '../../images/Reception.jpg'
import Header from "../Header/Header";
import { URLSearchParamsInit } from "react-router-dom";
import PHeader from "./PHeader";

export default function PAppointment() {

    let id = JSON.parse(localStorage.getItem('id'));

  return (
    
    
    <div >
    
    {/* <Header /> */}
<PHeader/>


        <div >
            <div class="" >
              <div class="col-xs-1-6 col-lg-6 ">
                <div class="card">
                  <div class="card-body">
                    <h3 class="card-title">Book Appointment</h3>
                    <Link className='btn btn-dark'  to='/BookApp'>click</Link>
                  </div>
                </div>
              </div>
              <div class="col-xl-1-12 col-lg-6">
                <div class="card">
                  <div class="card-body">
                    <h3 class="card-title">Show History</h3>
                    <Link className='btn btn-dark'  to='/PatHistory'>click</Link>
                  </div>
                </div>
              </div>
            </div>
            <div > 
              <img src= "https://i.pinimg.com/originals/ee/84/e6/ee84e6c4f71311cac5b0624e31ea9b51.gif" width={"800px"} height={"590px"}></img> </div>
        </div>
      
      

    </div>
  )
}
