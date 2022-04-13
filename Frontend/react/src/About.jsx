import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/img3.gif";
import Common from "./Common";
import Navbar from "./Navbar";

const About = () => {
    return (
        <>
            <Navbar />
             <Common 
             name = "Welcome to About Page" 
             imgsrc={web} 
             visit="/contact" 
             btname="Contact Now"
            
            />
        
            
        </>
    );
};

export default About;