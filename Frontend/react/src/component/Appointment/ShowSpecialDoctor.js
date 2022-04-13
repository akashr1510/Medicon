import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import App from '../../App';
import Header from '../Header/Header'
import Payment from '../Payment/payment';
import { ReactDOM } from 'react';
import docimg from '../../images/doctor.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../../Footer';
import PHeader from '../Patient/PHeader';


export default function ShowSpecialDoctor() {

    const nav = useNavigate();
    let { id } = useParams();
    let patid = JSON.parse(localStorage.getItem('id'));
    
    const [Doctor, setDoctor] = useState([]);

    const [Appointment,setAppointment] = useState({
        appointId : '',
        appointDate: '',
        patientId: patid,
        doctorId: '',
        paymentId: '',
        prescriptionTitle: '',
        prescriptionDetails: '',
       
}
);

const handleInput = (e) => {

    const name = e.target.name;
    const value = e.target.value;
    setAppointment({...Appointment,[name]: value })
}

    useEffect(() => {
        fetch('/Doctor/findDoctorSpecial/' + id)
            .then(response => response.json())
            .then((response) => {
                // localStorage.setItem("docotor_id", JSON.stringify(response['docotor_id']));

                setDoctor(response);
                
               
            }, error => {
                console.log(error);

            }

            );
    }, []);
    
    function sayHello(docId) {
        console.log('hello'+ docId);

        // setAppointment({...Appointment,['doctorId'] : name || '' })
         setAppointment({...Appointment,['doctorId'] : docId  })


        console.log(Appointment)

        // fetch('/Appointment/bookApp', {
        //     method: 'POST',
        //     headers: {
        //       'Accept': 'application/json',
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(Appointment),
        //   })
        //   .then(response => {
        //       if (response.ok) {
        //           alert(Appointment.doctorId + " registered succesfully !")
        //           //errorblock.innerHTML = '<span  class="alert alert-success">Registration Successfull</span>'
        //           nav("/new")
        //       }  else {
        //           alert("Invalid")
        //           // errorblock.innerHTML = '<span  class="alert alert-danger">Registration Failed refresh and try again</span>'

                  
        //       }
        //   })
        //   .catch(error => console.log(error.message))
      }

     const handlechange =(e)=> {
        
        e.preventDefault();
       
        console.log("date "+Appointment.appointDate)
        console.log("Patentid "+Appointment.patientId)        
        console.log("Doctorid "+Appointment.doctorId)
        console.log("hello")
        console.log(Appointment)
        localStorage.setItem('App', JSON.stringify(Appointment));
        

        

        fetch('/Appointment/bookApp', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(Appointment),
        })
          .then(response => {
            if (response.ok) {
               
                nav('/payment')
               
            }
            else {
                alert("Invalid")
            }  
    
          }).catch(error => console.log(error.message))
      }

    return (
        <div>

            {/* <Header /> */}
            <PHeader/>
            <h1 style={{ textAlign: 'center' }}>{id} Doctor</h1>


            {/* <form onSubmit={handleSubmit}> */}
            <form onSubmit={handlechange}>
                {/* <div className="d-flex my-2 my-lg-0" style={{ marginLeft: 900 }}>
                    <h4 style={{ marginRight: 20 }}>select appointment date :</h4>
                    <input type="date" name="appointDate" value={Appointment.appointDate} onChange={handleInput} required="required" />
                </div> */}


                <div className="container-fluid mb-5">
                <h4 style={{textAlign:'end',marginRight:180}}>select date :
                    <input type="date" name="appointDate" value={Appointment.appointDate} onChange={handleInput} required="required" /></h4>
             
                    <div className="row gy-4">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                {console.log(Doctor)}
                                {
                                    Doctor.map(
                                        (app,i) => 
                                            

                                            <div className="col-md-4 col-10 mx-auto">
                                                <h1> {} </h1>
                                                <div className="card col-lg-10" >
                                                    <img src={docimg} className="card-img-top" alt="" />
                                                    <div className="card-body" >
                                                        <h3 className="card-title font-weight-bold">
                                                         {app.doctor_name}</h3>
                                                      
                                                        
                                                        <h5>{app.doctor_degree} ({app.doctor_speciel})</h5>
                                                        
                                                        
                                                        <h5> <FontAwesomeIcon icon="fa-solid fa-circle-phone" />{app.doctor_contact}</h5>
                                                        {/* <h5><label>Specialization :</label> {app.doctor_speciel}</h5> */}
                                                        
                                                        {/* <button type="submit"className='btn btn-dark' onClick={handlechange}>Book Appointment</button> */}
                                                        <button type="submit" className='btn btn-dark' onClick={() => sayHello(app.docotor_id)}>Book Appointment</button>
                                                 
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <Footer/>
        </div>
    )
}
