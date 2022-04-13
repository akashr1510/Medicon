
import React, { useState } from "react";
import { createRoutesFromChildren, Navigate } from "react-router";
import Header from "../Header/Header";
import NavBar from '../../Navbar'
import { useNavigate } from "react-router";
import loginimg from "../../images/login.jpg"

function Login() {

    //   const [sign_in_up_model,setsignin_up_model] = useState('');
    const nav = useNavigate();

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');





    const loginApi = () => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "email": Email, "password": Password })
        };

        
        console.log(Email + "  " + Password)
        fetch('/Patient/signin', requestOptions)
            .then(response => response.json())
            .then((response) => {
                localStorage.setItem("id", JSON.stringify(response['id']));
                console.log(response);

                nav("/PAppointment");


            }, error => {
                console.log(error);
                alert("Wrong id and pass")

            }

            );

    }





   







    return (
        <div>
                <NavBar />
            <div>
                <section Class="vh-100" style={{ backgroundColor: "#9A616D" }}>
                    <div Class="container py-5 h-100">
                        <div Class="row d-flex justify-content-center align-items-center h-100">
                            <div Class="col col-xl-10">
                                <div Class="card" style={{ borderRadius: "1rem" }}>
                                    <div Class="row g-0">
                                        <div Class="col-md-6 col-lg-5 d-none d-md-block">
                                            <img
                                                src={loginimg}
                                                alt="login form"
                                                class="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }}
                                            />

                                        </div>
                                        <div Class="col-md-6 col-lg-7 d-flex align-items-center">
                                            <div Class="card-body p-4 p-lg-5 text-black">

                                                <form >

                                                    <div Class="d-flex align-items-center mb-3 pb-1">
                                                        <i Class="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219" }}></i>
                                                        <span Class="h1 fw-bold mb-0">Login</span>
                                                    </div>

                                                    {/* <h5 Class="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Sign into your account</h5> */}

                                                    <div Class="form-outline mb-4">
                                                        <input type="email" id="form2Example17" Class="form-control form-control-lg" name="Email"
                                                            onChange={(e) => setEmail(e.target.value)} />
                                                        <label Class="form-label" for="form2Example17">Email address</label>
                                                    </div>

                                                    <div Class="form-outline mb-4">
                                                        <input type="password" id="form2Example27" Class="form-control form-control-lg" name="Password"

                                                            onChange={(e) => setPassword(e.target.value)} />
                                                        <label Class="form-label" for="form2Example27">Password</label>
                                                    </div>

                                                    <div Class="pt-1 mb-4">
                                                        <button Class="btn btn-dark btn-lg btn-block" type="button" onClick={() => loginApi()} >Login</button>
                                                    </div>
                                                    <p Class="mb-5 pb-lg-2" style={{ color: "#393f81" }}>Don't have an account? <a href="/Patient/register" style={{ color: "#393f81" }}>Register here</a></p>
                                                    


                                                </form>

                                            </div>
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

export default Login;