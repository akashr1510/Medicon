import React from "react";
import Card from "./Card";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SData from "./SData";

const Service = () => {
    return (
        <>
            <Navbar />
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row gy-4">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            {
                                SData.map((val, ind) => {
                                    return <Card key={ind}
                                        imgsrc={val.imgsrc}
                                        title={val.title}
                                        link={val.link}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Service;