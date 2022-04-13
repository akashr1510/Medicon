import React from "react";

import { NavLink } from "react-router-dom";

const dothis =(name)=>{
    console.log(name)
    
}

const Card = (props) => {
    return (
        <>
            
            <div className="col-md-4 col-10 mx-auto" >
            <NavLink to={props.link}>
                <div className="card">
                    
                    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                    <div className="card-body" >
                        <hr />
                        <h3 className="card-title font-weight-bold" style={{textAlign:'center',color:'black'}}>{props.title}</h3>
                        {/* <br /> */}
                        {/* <NavLink to={props.link} className="btn btn-primary">click</NavLink> */}
                      
                    </div>
                </div>
                </NavLink>
            </div>
           

            

        </>
    );
};

export default Card;