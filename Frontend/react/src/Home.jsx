import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/img4.gif";
import Common from "./Common";
import MessageParser from "./component/ChatBot/MessageParser"
import ActionProvider from "./component/ChatBot/Actionprovider"
import config from "./component/ChatBot/config"
import Navbar from "./Navbar";
import Chatbot from "react-chatbot-kit";
import './App.css'
import 'react-chatbot-kit/build/main.css'
import Footer from "./Footer";


const Home = () => {
    
    return (
        <>
            <Navbar />
            <Common name='Get Your Appointment Booked on '
                imgsrc={web}
                visit="/service"
                btname="Get Started" />
        
            
            {/* <Chatbot 
                    config={config}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}
                    placeholderText='Type hello/help'
                /> */}
            <Footer/>
        </>

    );
};

export default Home;