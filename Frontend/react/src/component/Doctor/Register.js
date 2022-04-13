import React, { useState } from "react";
import NavBar from '../../Navbar'
import { useNavigate } from "react-router";

export const withRouter = (Component) => {



    const Wrapper = (props) => {
        const history = useNavigate();
        return <Component history={history} {...props} />;
    };
    return Wrapper;
};


function Register() {


    const nav = useNavigate();

    const [Doctor, setDoctor] = useState({
        doctor_contact: '',
        doctor_degree: '',
        doctor_fees: '',
        doctor_name: '',
        doctor_speciel: '',
        email: '',
        password: ''
    });



    const handleInput = (e) => {

        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        setDoctor({ ...Doctor, [name]: value })
    }

    const Reset =()=>{
        setDoctor({
            doctor_contact: '',
            doctor_degree: '',
            doctor_fees: '',
            doctor_name: '',
            doctor_speciel: '',
            email: '',
            password: ''
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecord = { ...Doctor }

        console.log(Doctor);


        const errorblock = document.getElementById("errormsg")

        fetch('/Doctor/Doctor_Registration', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Doctor),
        })
            .then(response => {
                if (response.ok) {
                    alert(Doctor.doctor_name + " registered succesfully !")
                    //errorblock.innerHTML = '<span  class="alert alert-success">Registration Successfull</span>'
                    nav("/DHome")

                } else {
                    //alert("Invalid")
                    errorblock.innerHTML = '<span  class="alert alert-danger">Registration Failed refresh and try again</span>'

                    setDoctor({
                        doctor_contact: "",
                        doctor_degree: '',
                        doctor_fees: '',
                        doctor_name: '',
                        doctor_speciel: '',
                        email: '',
                        password: ''
                    });
                }
            })
            .catch(error => console.log(error.message))


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
                                                    <h3 class="mb-5 text-uppercase">Doctor registration form</h3>

                                                    <div class="row">
                                                        <div class="col-md-12 mb-4">
                                                            <div class="form-outline">
                                                                <input type="text" id="form3Example1m" name="doctor_name" class="form-control form-control-lg" value={Doctor.doctor_name} onChange={handleInput} required />
                                                                <label class="form-label" for="form3Example1m">Full name</label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-12 mb-4">
                                                            <div class="form-outline">
                                                                <input type="text" id="form3Example1m1" name="doctor_degree" value={Doctor.doctor_degree} class="form-control form-control-lg" onChange={handleInput} required />
                                                                <label class="form-label" for="form3Example1m1">Degree</label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <div class="row">
                                                        <div class="col-md-12 mb-4">
                                                            <div class="form-outline">
                                                                <input type="text" id="form3Example1m1" name="doctor_speciel" value={Doctor.doctor_speciel} class="form-control form-control-lg" onChange={handleInput} required />
                                                                <label class="form-label" for="form3Example1m1">Specialization</label>
                                                            </div>
                                                        </div>
                                                    </div> */}

                                                    <div class="row">
                                                        <div class="col-md-12 mb-4">
                                                        
                                                            <div class="form-outline" >
                                                            <label class="form-label" for="form3Example1m1">Specialization : &nbsp;</label>
                                                                <select defaultChecked="choose" name="doctor_speciel" value={Doctor.doctor_speciel} onChange={handleInput} required>           
                                                                    <option value="none" selected hidden>Select an Option</option>                                                         
                                                                    <option name="doctor_speciel" value="Gynacologist">Gynacologist</option>
                                                                    <option name="doctor_speciel" value="PhysioTherapist">PhysioTherapist</option>
                                                                    <option name="doctor_speciel" value="Diabetics">Diabetologist</option>
                                                                    <option name="doctor_speciel" value="Oncologist">Oncologist</option>                                
                                                                    <option name="doctor_speciel" value="Nuerologist">Nuerologist</option>
                                                                    <option name="doctor_speciel" value="Pediatric">Pediatric</option>
                                                                    <option name="doctor_speciel" value="Dentist">Dentist</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>



                                                    <div class="form-outline mb-4">
                                                        <input pattern="^[5-9][0-9]{9}" type="text" id="form3Example90" name="doctor_contact" value={Doctor.doctor_contact} class="form-control form-control-lg" onChange={handleInput} required />
                                                        <label class="form-label" for="form3Example90">Contact No.</label>
                                                    </div>

                                                    <div class="form-outline mb-4">
                                                        <input type="text" id="form3Example90" name="doctor_fees" value={Doctor.doctor_fees} class="form-control form-control-lg" onChange={handleInput} required />
                                                        <label class="form-label" for="form3Example90">fees ( ₹ )  </label>
                                                    </div>

                                                    <div class="form-outline mb-4">
                                                        <input type="email" id="form3Example97" name="email" value={Doctor.email} class="form-control form-control-lg" onChange={handleInput} required />
                                                        <label class="form-label" for="form3Example97">Email ID</label>
                                                    </div>

                                                    <div class="form-outline mb-4">
                                                        <input type="password" id="form3Example99" name="password" value={Doctor.password} class="form-control form-control-lg" onChange={handleInput} required />
                                                        <label class="form-label" for="form3Example99">Password</label>
                                                    </div>

                                                    <div id="errormsg">

                                                    </div>

                                                    <div class="d-flex justify-content-end pt-3">
                                                        <button type="reset" class="btn btn-light btn-lg" value="Reset" onClick={Reset}>Reset all</button>

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