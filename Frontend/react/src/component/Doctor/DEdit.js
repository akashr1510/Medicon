import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import Footer from '../../Footer';
import Header from '../Header/Header';

export default function DEdit() {


  let { id } = useParams();
  const [Doctor, setDoctor] = useState({});
  const nav  = useNavigate();

  useEffect(() => {


    fetch('/Doctor/findDoctor/' + id)
      .then(response => response.json())
      .then((response) => {

        // console.log(response)
         setDoctor(response);
         console.log(Doctor);
        // setShow(true)
      }, error => {

        console.log(error);


      }

      );
  }, []);

  const handleInput = (e) => {

    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setDoctor({ ...Doctor, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/Doctor/update', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Doctor),
    })
      .then(response => {
        if (response.ok) {
          alert("updated Suceesfully")
          console.log("Done")
          nav("/Doctor/show");
        }
        else {
          alert("Not updated")
          console.log("Failedxxxxxxx")
        }


      }).catch(error => console.log(error.message))
  }

  const handleDelete = (e) => {
    e.preventDefault();

    fetch('/Doctor/delete/'+id ,{
      method: 'DELETE'   
    })
      .then(response => {
        if (response.ok) {
          alert("deleted Suceesfully")
          console.log("Done")
          nav("/Doctor/show");
        }
        else {
          alert("Not deleted")
          console.log("Failedxxxxxxx")
        }


      }).catch(error => console.log(error.message))
  }


  

  return (
    <div>
      <Header />
      <div className="row">
      <div className="col-3"></div>
        <div className="col-6">
            <div class="mb-3" >
              <form  >
                <br />
                <h1 style={{ textAlign: 'center' }}>Doctor Details</h1>
                <br />
                <fieldset style={{ border: 'solid', width: 600, margin: 'auto', padding: 20 }}>


                <label for="" class="form-label"> <h4>Doctor Id :  {Doctor.docotor_id} &nbsp; </h4></label>
                  <br />
                  <label for="" class="form-label"> <h4>Doctor name :  &nbsp; </h4></label>
                  <input type="text" class="form" name="doctor_name" id="" placeholder="" value={Doctor.doctor_name} onChange={handleInput} required />
                  <br />
                  <label for="" class="form-label" > <h4>Doctor email : &nbsp;</h4>  </label>
                  <input type="text" class="form" name="email" id="" placeholder="" value={Doctor.email} onChange={handleInput} required />
                  <br />
                  <label for="" class="form-label" > <h4>Doctor contact : &nbsp;</h4>  </label>
                  <input type="text" class="form" name="doctor_contact" id="" placeholder="" value={Doctor.doctor_contact} onChange={handleInput} required />
                  <br />
                  <label for="" class="form-label" > <h4>Doctor degree : &nbsp;</h4>  </label>
                  <input type="text" class="form" name="doctor_degree" id="" placeholder="" value={Doctor.doctor_degree} onChange={handleInput} required />
                  <br />
                  <label for="" class="form-label" > <h4> Specialization : &nbsp;</h4>  </label>
                  {/* <input type="text" class="form" name="email" id="" placeholder="" value={Doctor.doctor_speciel} onChange=""required /> */}
                  <select defaultChecked="choose" name="doctor_speciel" value={Doctor.doctor_speciel} onChange={handleInput} required>           
                                                                    <option value={Doctor.doctor_speciel} selected hidden> {Doctor.doctor_speciel}</option>                                                         
                                                                    <option name="doctor_speciel" value="Gynacologist">Gynacologist</option>
                                                                    <option name="doctor_speciel" value="PhysioTherapist">PhysioTherapist</option>
                                                                    <option name="doctor_speciel" value="Diabetics">Diabetologist</option>
                                                                    <option name="doctor_speciel" value="Oncologist">Oncologist</option>                                
                                                                    <option name="doctor_speciel" value="Nuerologist">Nuerologist</option>
                                                                    <option name="doctor_speciel" value="Pediatric">Pediatric</option>
                                                                    <option name="doctor_speciel" value="Dentist">Dentist</option>
                                                                </select>
                  <br />

                 

                  <button type="submit" class="btn btn-dark" onClick={handleSubmit}>Update</button>&nbsp;&nbsp;&nbsp;
                  <button type="reset" class="btn btn-dark" value="submit" onClick={handleDelete}>Delete</button>
                  
                   {/* <Link name="" id="" class="btn btn-primary" ti=""  role="button" onClick={myClick}> Add</Link> */}
                </fieldset>
              </form>

            </div>

          </div>
    </div>
    <Footer/>
    </div>
  )
}

