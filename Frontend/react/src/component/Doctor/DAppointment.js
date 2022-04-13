import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import { useNavigate } from 'react-router-dom'
import Footer from '../../Footer';
import DHeader from "../Doctor/DHeader"

export default function DAppointment() {
  const nav = useNavigate();

 

  return (
    <div>
      {/* <Header /> */}

<DHeader/>

      <div>
        <div class="row">
          <div class="col-xs-1-6">
            <div class="card">
              <div class="card-body" >
                <h3 class="card-title" >Show Appointment</h3>
                <Link className='btn btn-dark' to='/ShowApp'>click</Link>
              </div>
            </div>
          </div>
          {/* <div class="col-xl-1-12">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title">Temporary</h3>
                <Link className='btn btn-dark' to='#'>click</Link>
              </div>
            </div>
          </div> */}
        </div>


      </div>
<Footer/>
    </div>
  )
}
