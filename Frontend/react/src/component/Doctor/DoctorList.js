import { Component } from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import Footer from "../../Footer";

export default class DoctorList extends Component {

  state = {
    Doctor: []
  };

  async componentDidMount() {
    const response = await fetch('/Doctor/show');
    const body = await response.json();
    this.setState({ Doctor: body });
  }
  render() {
    const { Doctor } = this.state;
    return (
      <div>
        <Header />
        <br />
        <h1 style={{textAlign:"center"}}><u>Doctor List</u></h1>
        <div style={{ margin: 40 }}>
          <table class="table table-default table-bordered table-responsive " style={{ border: "solid" }} >
            <thead class="thead-default" >
              <tr>
                <th>ID</th>
                <th>Doctor Name</th>
                <th>Doctor Email</th>
                <th>Doctor Degree</th>
                <th>Specialization</th>
                <th>Fees</th>
                <th>Mobile No.</th>
                <th>Action</th>
              </tr>
            </thead>
            {Doctor.map(doctor =>
              <tbody>
                <tr key={doctor.doctor_id}>

                  <td>{doctor.docotor_id}</td>
                  <td>{doctor.doctor_name}</td>
                  <td>{doctor.email}</td>
                  <td>{doctor.doctor_degree}</td>
                  <td>{doctor.doctor_speciel}</td>
                  <td>{doctor.doctor_fees}</td>
                  <td>{doctor.doctor_contact}</td>
                  <td><div class="d-grid gap-2 justify-content-left">
                    <tr>
                      <td>&nbsp;&nbsp;&nbsp;</td>
                      <td >
                        {/* <button type="submit" class="btn btn-primary btn-sm btn-block">Edit</button> */}
                        <Link className='btn btn-primary' to={'/Doctor/Edit/'+doctor.docotor_id}>Edit</Link>
                        </td>
                      
                    </tr>

                  </div></td>

                </tr>

              </tbody>
            )}

          </table>
        </div>
<Footer/>
      </div>

    )
  }

}

