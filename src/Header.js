import React from 'react';
import "./nav.css";





class Header extends React.Component{
    render(){
        return (
            
            <div className="header d-flex align-items-center px-5">
                <div className="para ">
                    <h1>Esraa abdulaziz</h1>
                    <p>web Developer</p>
                    <button type="button" className="btn btn-dark">Contact me </button>
                </div>

            </div>
        )
    }
}
export default Header;

