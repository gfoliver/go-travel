import React from 'react';
import './style.scss';
import Fade from 'react-reveal/Fade';

export default function Register() {
    return(
        <div className="Register">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <Fade>
                            <div className="form-wrapper">
                                <Fade bottom cascade>
                                    <div className="SectionPretitle">JOIN US</div>
                                    <h2 className="SectionTitle">Register Now</h2>
                                </Fade>

                                <form onSubmit={e => {e.preventDefault()}}>
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name</label>
                                        <input type="text" className="form-control" id="name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">E-mail</label>
                                        <input type="email" className="form-control" id="email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" className="form-control" id="password" />
                                    </div>
                                    <button type="submit" className="btn primary-gradient">Sign Up</button>
                                </form>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}