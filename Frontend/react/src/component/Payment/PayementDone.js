import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router';
import App from '../../App';
export default function PayementDone() {

    const newid = JSON.parse(localStorage.getItem('newApp'));
    // console.log(newid)
    const nav = useNavigate();

    const search = useLocation().search;
    const payment = new URLSearchParams(search).get('payment_id');
    // console.log(name);
    const [appointment , setAppointment] = useState(

        newid

    );

    useEffect(() => {

        // console.log(newid)
        console.log(payment)

        appointment.paymentId = payment;
        console.log(appointment)
        
        fetch('/Appointment/update', {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(appointment),
          })
            .then(response => {
              if (response.ok) {
                alert("Payment Succesfull")
                localStorage.removeItem("newApp");
                nav("/PAppointment");
              }
              else {
                console.log("Failed to update fetch function in PAtientdetails component")
              }
      
      
            })
       
    }, []);



    



  return (


    <div>
        PayementDone

    </div>
  )
}

