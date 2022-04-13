import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import Header from '../Header/Header';

export default function PEdit() {
    let { id } = useParams();
    const [Patient, sePatient] = useState({});
  const nav  = useNavigate();

  const handleInput = (e) => {

    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    sePatient({ ...Patient, [name]: value })
  }

  useEffect(() => {


    fetch('/Patient/findPatient/' + id)
      .then(response => response.json())
      .then((response) => {

        // console.log(response)
         sePatient(response);
        console.log(Patient)
        // setShow(true)
      }, error => {

        console.log(error);


      }

      );
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/Patient/update', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Patient),
    })
      .then(response => {
        if (response.ok) {
          alert("updated Suceesfully")
          console.log("Done")
          nav("/Patient/view");
        }
        else {
          alert("Not updated")
          console.log("Failedxxxxxxx")
        }


      }).catch(error => console.log(error.message))
  }

  const handleDelete = (e) => {
    e.preventDefault();

    fetch('/Patient/delete/'+id ,{
      method: 'DELETE'   
    })
      .then(response => {
        if (response.ok) {
          alert("deleted Suceesfully")
          console.log("Done")
          nav("/Patient/view");
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
                <h1 style={{ textAlign: 'center' }}>Patient Details</h1>
                <br />
                <fieldset style={{ border: 'solid', width: 600, margin: 'auto', padding: 20 }}>


                <label for="" class="form-label"> <h4>Patient Id :  {Patient.id} &nbsp; </h4></label>
                  <br />
                  <label for="" class="form-label"> <h4>Doctor firstname :  &nbsp; </h4></label>
                  <input type="text" class="form" name="firstName" id="" placeholder="" value={Patient.firstName} onChange={handleInput} required />
                  <br />
                  <label for="" class="form-label"> <h4>Doctor lastname :  &nbsp; </h4></label>
                  <input type="text" class="form" name="lastName" id="" placeholder="" value={Patient.lastName} onChange={handleInput} required />
                  <br />
                  <label for="" class="form-label" > <h4>Patient email : &nbsp;</h4>  </label>
                  <input type="text" class="form" name="email" id="" placeholder="" value={Patient.email} onChange={handleInput} required />
                  <br />
                  <label for="" class="form-label" > <h4>Patient contact : &nbsp;</h4>  </label>
                  <input type="text" class="form" name="contact" id="" placeholder="" value={Patient.contact} onChange={handleInput} required />
                  <br />
                  
                
                  <button type="submit" class="btn btn-dark" onClick={handleSubmit}>Update</button>&nbsp;&nbsp;&nbsp;
                  <button type="reset" class="btn btn-dark" value="submit" onClick={handleDelete}>Delete</button>
                  
                  
                </fieldset>
              </form>

            </div>
              
          </div>
    </div>
    </div>
  )
}
