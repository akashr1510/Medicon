import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import docimg from '../../images/doctor.gif'
import patimg from '../../images/patient.gif'
import appimg from '../../images/appoitment.gif'
import Footer from '../../Footer'
import AdminHeader from "../Admin/AdminHeader"
export default function ALogineHome() {

    return (
        <div>
            {/* <Header /> */}
        <AdminHeader/>

            <div >
                <div class="card-group">

                    <div class="card">
                        <Link className='btn btn' to='/Patient/view'>
                            <img class="card-img-top" src={patimg} alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title">Patient</h4>

                            </div>
                        </Link>
                    </div>

                    <div class="card">
                        <Link className='btn btn' to='/Doctor/show'>
                            <img class="card-img-top" src={docimg} alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title">Doctor</h4>

                            </div>

                        </Link>
                    </div><div class="card">
                        <Link className='btn btn' to='/Appointment/veiw'>
                            <img class="card-img-top" src={appimg} alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title">Appointment</h4>

                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        <Footer/>
        </div>
    )
}
