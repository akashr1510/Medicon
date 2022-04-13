import React, { useEffect, useRef } from 'react'
import Header from '../Header/Header'
import { useState } from 'react';
import Footer from '../../Footer';

export default function payment() {

    const form = useRef(null);
    const [Doctor, setDoctor] = useState({});

    const App1 = JSON.parse(localStorage.getItem('newApp'));


    console.log("Inpayment after book " + App1.appointDate);
    
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
        script.setAttribute('data-payment_button_id', 'pl_JFxXkISscN1oqL');
        script.async = true;

        form.current.appendChild(script);



        return () => {
            form.current.removeChild(script);
        };
    }, []);

    useEffect(() => {
        fetch('/Doctor/findDoctor/' + App1.doctorId)
            .then(response => response.json())
            .then((response) => {
                // localStorage.setItem("docotor_id", JSON.stringify(response['docotor_id']));

                setDoctor(response);
                //localStorage.removeItem(App1);

            }, error => {
                console.log(error);

            }

            );
    }, []);

    return (
        <div class='row col-12  d-flex justify-content-center text-black'>

            <Header />
            <div>
                <h1 style={{ textAlign: 'center' }}>Payment</h1>
                        <h2 style={{ textAlign: 'center' }} >Thanks for choosing Medicon !!<br /></h2>
            </div>
            <div style={{ textAlign: 'center' }}>
                <form ref={form}>
                    {/* <div class = "row"> */}
                    <div class="row">
                    <div class="col-3"></div>
                    <div class="col-lg-6 center" >

                        {/* <h3> Confirm Appointment details<br />
                            Appointment Date : {App1.appointDate} <br />
                            Doctor Name :  Dr. {Doctor.doctor_name} <br />
                            Doctor Specialization : {Doctor.doctor_speciel}<br />
                            Fees : (₹) 200
                        </h3> */}
                        <table class="table table-default table-bordered table-responsive" style={{ border: "solid" }}>

                            <thead class="thead-default">
                                <tr>
                                    <td>Doctor Name </td>
                                    <td>{Doctor.doctor_name}</td>
                                </tr>
                                <tr>
                                    <td>Appointment Date </td>
                                    <td>{App1.appointDate}</td>
                                </tr>
                                <tr>
                                    <td>Doctor Specialization </td>
                                    <td>{Doctor.doctor_speciel}</td>
                                </tr>
                                <tr>
                                    <td>Fees </td>
                                    <td>(₹) 200</td>
                                </tr>

                            </thead>

                        </table>

                    </div>
                    <div class="col-3"></div>
                    </div>
                </form>
                <h4>Please check your email for Payment receipt.</h4>



            </div>
            <Footer/>
        </div>
    )
}
