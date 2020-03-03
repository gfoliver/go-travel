import React from 'react';
import MembersIcon from '../../img/members-icon.svg';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

export default function Gallery() {
    return(
        <div className="Gallery" id="gallery">
            <div className="container">
                <div className="row">
                    <Fade bottom cascade>
                        <div className="col-12 section-header">
                            <div className="SectionPretitle">GALLERY OF OUR TRIPS</div>
                            <h2 className="SectionTitle">Completed Journeys</h2>
                        </div>
                    </Fade>
                    <div className="col-12 journey-wrapper">
                        <Fade top cascade>
                            <div className="journey">
                                <div className="title">Gennemur</div>
                                <div className="members">
                                    <img src={MembersIcon} alt="Members Icon"/>
                                    <div className="text">32 Members</div>
                                </div>
                                <a href="#" className="read-more">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </a>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-md-6 journey-wrapper">
                        <Fade top cascade>
                            <div className="journey">
                                <div className="title">Seule</div>
                                <div className="members">
                                    <img src={MembersIcon} alt="Members Icon"/>
                                    <div className="text">14 Members</div>
                                </div>
                                <a href="#" className="read-more">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </a>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-md-6 journey-wrapper">
                        <Fade top cascade>
                            <div className="journey">
                                <div className="title">Perpilliers</div>
                                <div className="members">
                                    <img src={MembersIcon} alt="Members Icon"/>
                                    <div className="text">22 Members</div>
                                </div>
                                <a href="#" className="read-more">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </a>
                            </div>
                        </Fade>
                    </div>
                </div>
                <Bounce>
                    <a href="#" className="btn primary-gradient section-cta">All Galeries</a>
                </Bounce>
            </div>
        </div>
    )
}