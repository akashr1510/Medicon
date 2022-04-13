import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import DHeader from '../Doctor/DHeader';
import Footer from '../../Footer';
export default class ShowAppointment2 extends Component {


    state = {
        Appointment: [],
        Patient: [],
        requestOptions: []

    }


    docotor_id = JSON.parse(localStorage.getItem('docotor_id'))

    async componentDidMount() {
        const response = await fetch('/Appointment/showAppointmentName/' + this.docotor_id)
        const body = await response.json();
        this.setState({ Appointment: body });
        console.log(response)
        //const response2 = await fetch('/Patient/findPatient/')
        // response.map((app, i) =>{
        //         const resp=  fetch(`/Patient/findPatient/${app.patientId}`)
        //         const body1 =  resp.json();
        //         this.setState({ Patient: body1 });
        // })

    
    }



    render() {
        return (
            <div>

                {/* <Header /> */}
                <DHeader />

                <br />
                <form>
                    <h1 style={{ textAlign: 'center', }}><u>Appointment List</u></h1>

                    <div style={{ margin: 40 }}>
                        <table class="table table-default table-bordered table-responsive " style={{ border: "solid" }} >
                            <thead class="thead-default" >
                                <tr>
                                    <th>Serial No</th>
                                    <th>Name of patient</th>
                                    <th> Date</th>
                                    {/* <th> Patient ID</th> */}
                                    <th>Details</th>
                                    {/* <th>Priscription</th> */}
                                </tr>
                            </thead>


                            {this.state.Appointment.map((app, i=1) =>
                                <tbody>
                                    <tr key={app.appoint.appointId}>
                                        <td>{++i}</td>
                                        <td>
                                            {app.name}

                                        </td>
                                        <td>{app.appoint.appointDate}</td>
                                        {/* <td>{app.appointId}</td> */}


                                        {/* <td>{this.findPatient(app.appointId)}</td> */}

                                        {/* <td><a name="" id="" class="btn btn-primary"  role="button" onClick="/sh">show</a>
                                        
                                        </td> */}
                                        <td>
                                            {/* <a name="" id="" class="btn btn-success" role="button" href={"/PatientDetails/" + app.patientID}>show Datails</a>
                                             */}


                                            <Link className='btn btn-dark' to={"/PatientDetails/" + app.appoint.patientId + "/" + app.appoint.appointId}>show details</Link>


                                        </td>



                                    </tr>

                                </tbody>

                            )}

                        </table>
                    </div>

                </form>
                <div style={{marginBottom:2}}>

                <Footer/>
                </div>
            
            </div>
        )
    }
}
