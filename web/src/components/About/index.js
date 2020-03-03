import React from 'react';
import './style.scss';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export default function About() {
    return(
        <div className="About" id="about">
            <div className="container">
                <div className="row">
                    <Fade bottom cascade>
                        <div className="col-12 section-header">
                            <div className="SectionPretitle">LEARN MORE</div>
                            <h2 className="SectionTitle">About Us</h2>
                        </div>
                    </Fade>
                    <div className="col-md-6">
                        <Fade top cascade>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam mauris mauris et. Natoque sed eget ultricies fames sagittis adipiscing. 
                                Ligula arcu tellus blandit pellentesque dolor sem. Nibh ultrices vitae et ut. Morbi aliquam congue nunc eu risus. Cras purus ultrices praesent 
                                dictum scelerisque enim quis pellentesque. Pharetra imperdiet ac aliquam gravida sit. Vitae ornare quam turpis adipiscing egestas vitae. Feugiat 
                                mauris tortor interdum dictumst risus.
                            </p>
                        </Fade>
                        <Fade bottom cascade>
                            <div className="items">
                                <div className="item">
                                    <div className="number">1<span className="sufix">M+</span> </div>
                                    <div className="text">Active Users</div>
                                </div>
                                <div className="item">
                                    <div className="number">45</div>
                                    <div className="text">Types of Activities</div>
                                </div>
                                <div className="item">
                                    <div className="number">32</div>
                                    <div className="text">Countries Available</div>
                                </div>
                            </div>
                        </Fade>
                        <Bounce>
                            <a href="#register" className="btn primary-gradient section-cta">Join Us</a>
                        </Bounce>
                    </div>
                    <div className="col-md-6">
                        <Bounce>
                            <div className="video-wrapper">
                                <button className="button btn">
                                    <FontAwesomeIcon icon={faPlay} />
                                </button>
                            </div>
                        </Bounce>
                    </div>
                </div>
            </div>
        </div>
    )
}