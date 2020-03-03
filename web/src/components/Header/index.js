import React from 'react';
import './style.scss';
import Fade from 'react-reveal/Fade';


export default function Header() {
    return (
        <div className="Header">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <Fade bottom>
                            <h1 className="logo"><span className="color-primary">GO</span>Travel</h1>
                        </Fade>
                    </div>
                    <div className="col-9">
                        <Fade bottom cascade>
                            <nav className="nav justify-content-end align-items-center">
                                <a href="#destinations" className="nav-item">Destinations</a>
                                <a href="#about" className="nav-item">About</a>
                                <a href="#gallery" className="nav-item">Gallery</a>
                                <a href="#members" className="nav-item">Members</a>
                                <a href="#register" className="nav-item btn outline-white nav-button">Register</a>
                                <a href="#" className="nav-item btn primary-gradient nav-button">Sign Up</a>
                            </nav>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}