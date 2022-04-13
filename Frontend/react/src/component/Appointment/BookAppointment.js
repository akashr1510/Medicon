
import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom';
import Card from "../../Card"
import CurrentDate from '../../CurrentDate';
import Footer from '../../Footer';
import Header from '../Header/Header';
import PHeader from '../Patient/PHeader';
import image from "./../../images/login.jpg"
import SpecialData from "./SpecialData";

function BookAppointment() {

  


  const selectSpecial = (link) => {
    console.log(link)

    {
      fetch(link)
        .then(response => response.json())
        .then((response) => {
          // localStorage.setItem("docotor_id", JSON.stringify(response['docotor_id']));

          console.log(response)

        }, error => {
          console.log(error);

        }

        );
    }

  }

  // const { Doctor } = this.state;
  return (
    <div>

      {/* <Header /> */}
      <PHeader/>
      <br />
      <form >
        <h1 style={{ textAlign: 'center', }}><u>Select Specialization</u></h1>

        <CurrentDate />




        
        <div className="container-fluid mb-5">
          <div className="row gy-4">
            <div className="col-10 mx-auto">
              <div className="row">
                {
                  SpecialData.map(
                    (app) =>


                      <div className="col-md-4 col-10 mx-auto">
                        <div className="card">
                          <img src={app.imgsrc} className="card-img-top" alt={app.imgsrc} />
                          <div className="card-body">
                            <h5 className="card-title font-weight-bold">{app.title}</h5>
                            <br />

                            <Link className='btn btn-danger' to={"/ShowSpecial/" + app.title}>click</Link>
                          </div>
                        </div>
                      </div>


                  )}
              </div>
            </div>
          </div>
        </div>

      </form>

    </div>


  )
}


export default BookAppointment;


