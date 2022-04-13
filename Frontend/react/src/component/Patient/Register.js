import React, { useState } from "react";
import NavBar from '../../Navbar'
import { useNavigate } from "react-router-dom";





export const withRouter = (Component) => {
    
    
    const Wrapper = (props) => {
        const history = useNavigate();
        return <Component history={history} {...props} />;
    };
    return Wrapper;
};


function Register() {
    
    const nav = useNavigate();

    const [Patient, setPatient] = useState({

        email: '',
        password: '',
        firstName: '',
        lastName: '',
        address: '',
        gender: '',
        contact: '',
        date: '',
    });



    const handleInput = (e) => {

        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        setPatient({ ...Patient, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecord = { ...Patient }

        console.log(Patient);

        const errorblock = document.getElementById("errormsg")

        fetch('/Patient/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Patient),
        })
        .then(response => {
            if(response.ok){
                alert(Patient.firstName + " registered succesfully !")
                //errorblock.innerHTML = '<span  class="alert alert-success">Registration Successfull</span>'
                  nav("/PHome")  
                 
            }else{
                //alert("Invalid")
               errorblock.innerHTML = '<span  class="alert alert-danger">Registration Failed refresh and try again</span>'
               
               setPatient({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: '',
                gender: '',
                contact: '',
                date: '',
            });
        }
    }).catch(error => console.log(error.message))

       
    }


    //  handleSubmit(event) {
    //     event.preventDefault();
    //     const { Doctor } = this.state;

    //     await fetch('/Doctor/Doctor_Registration', {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(Doctor),
    //     });
    //      this.props.history.push('/');
    // }


    return (


        <div>
            <NavBar />


            <div>
                <section class="h-100 " style={{ backgroundColor: "#FF9966" }}>
                    <div class="container py-5 h-100">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col">
                                <div class="card card-registration my-4">
                                    <div class="row g-0">
                                        <div class="col-xl-6 d-none d-xl-block">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                                                alt="Sample photo"
                                                class="img-fluid"
                                                style={{ borderTopLeftRadius: ".25rem", borderBottomLeftRadius: ".25rem" }}
                                            />

                                        </div>
                                        <div class="col-xl-6">
                                            <form onSubmit={handleSubmit} action="#">
                                                <div class="card-body p-md-5 text-black">
                                                    <h3 class="mb-5 text-uppercase">Patient registration form</h3>

                                                    <div class="row">
                                                        <div class="col-md-12 mb-4">
                                                            <div class="form-outline">
                                                                <input type="text" id="form3Example1m" name="firstName" class="form-control form-control-lg" value={Patient.firstName} onChange={handleInput} required />
                                                                <label class="form-label" for="form3Example1m">FirstName</label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-12 mb-4">
                                                            <div class="form-outline">
                                                                <input type="text" id="form3Example1m" name="lastName" class="form-control form-control-lg" value={Patient.lastName} onChange={handleInput} required />
                                                                <label class="form-label" for="form3Example1m">lastName</label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-12 mb-4">
                                                            <div class="form-outline">
                                                                <input type="text" id="form3Example1m" name="address" class="form-control form-control-lg" value={Patient.address} onChange={handleInput} required />
                                                                <label class="form-label" for="form3Example1m">Adress</label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-12 mb-4">
                                                            <div class="form-outline">


                                                                <input type="date" id="form3Example1m" name="date" class="form-control form-control-lg" value={Patient.date} onChange={handleInput} required />
                                                                <label class="form-label" for="form3Example1m" >Date of Birth</label>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div onChange={handleInput}>
                                                        <label> Gender : </label>
                                                        <input type="radio" value="male" id="male"
                                                            name="gender" style={{ marginLeft: 20 }} required />
                                                        <label for="male">Male</label>

                                                        <input type="radio" value="female" id="female"
                                                            name="gender" style={{ marginLeft: 20 }} required />
                                                        <label for="female">Female</label>

                                                        <input type="radio" value="other" id="other"
                                                            name="gender" style={{ marginLeft: 20 }} required />
                                                        <label for="female">Other</label>
                                                        <br />
                                                        <br />

                                                    </div>










                                                    <div class="form-outline mb-4">
                                                        <input type="tel" id="form3Example90" name="contact" value={Patient.contact}
                                                       pattern="^[7-9][0-9]{9}" class="form-control form-control-lg" onChange={handleInput} required />
                                                        <label class="form-label" for="form3Example90">Contact No.</label>
                                                    </div>

                                                    <div class="form-outline mb-4">
                                                        <input type="email" id="form3Example97" name="email" value={Patient.email} class="form-control form-control-lg" onChange={handleInput} required />
                                                        <label class="form-label" for="form3Example97">Email ID</label>
                                                    </div>

                                                    <div class="form-outline mb-4">
                                                        <input type="password" id="form3Example99" name="password" value={Patient.password} class="form-control form-control-lg" onChange={handleInput} />
                                                        <label class="form-label" for="form3Example99">Password</label>
                                                    </div>

                                                    <div id="errormsg">

                                                    </div>

                                                    <div class="d-flex justify-content-end pt-3">
                                                        <button type="reset" class="btn btn-light btn-lg" >Reset all</button>

                                                        <button type="submit" class="btn btn-dark btn-lg btn-block">Submit form</button>{' '}

                                                    </div>


                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )

}

export default Register;