import React from 'react';
import './style.scss';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

export default function Destinations() {
    let slider = null;

    function next() {
        slider.slickNext();
    }
    function previous() {
        slider.slickPrev();
    }

    return (
        <div className="Destinations" id="destinations">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <Fade up cascade>
                            <div className="SectionPretitle">WHERE TO GO</div>
                            <h2 className="SectionTitle">Popular Destinations</h2>
                        </Fade>
                    </div>
                    <div className="col-md-3">
                        <Fade right cascade>
                            <div className="arrows-wrapper">
                                <button className="arrow" onClick={previous}>
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </button>
                                <button className="arrow" onClick={next}>
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-12">
                        <div className="carousel-wrapper">
                            <Fade cascade>
                                <Slider ref={c => slider = c} className="carousel" {...{
                                    dots: false,
                                    slidesToShow: 3,
                                    slidesToScroll: 1,
                                    arrows: false,
                                    centerMode: true,
                                    centerPadding: 30,
                                    infinite: true
                                }}>
                                    <div className="location-wrapper">
                                        <div className="location">
                                            <div className="country">Norway</div>
                                            <div className="place">Ghtonswan</div>
                                            <div className="travel-amount">127 people want to travel here</div>
                                            <a href="#" className="btn button primary-gradient">I want to travel here</a>
                                        </div>
                                    </div>
                                    <div className="location-wrapper">
                                        <div className="location">
                                            <div className="country">Madagascar</div>
                                            <div className="place">Miquelon</div>
                                            <div className="travel-amount">231 people want to travel here</div>
                                            <a href="#" className="btn button primary-gradient">I want to travel here</a>
                                        </div>
                                    </div>
                                    <div className="location-wrapper">
                                        <div className="location">
                                            <div className="country">Chile</div>
                                            <div className="place">Vinã del Mar</div>
                                            <div className="travel-amount">88 people want to travel here</div>
                                            <a href="#" className="btn button primary-gradient">I want to travel here</a>
                                        </div>
                                    </div>
                                    <div className="location-wrapper">
                                        <div className="location">
                                            <div className="country">Netherlands</div>
                                            <div className="place">Kinderdijk</div>
                                            <div className="travel-amount">160 people want to travel here</div>
                                            <a href="#" className="btn button primary-gradient">I want to travel here</a>
                                        </div>
                                    </div>
                                    <div className="location-wrapper">
                                        <div className="location">
                                            <div className="country">Sweden</div>
                                            <div className="place">Skåne</div>
                                            <div className="travel-amount">74 people want to travel here</div>
                                            <a href="#" className="btn button primary-gradient">I want to travel here</a>
                                        </div>
                                    </div>
                                    <div className="location-wrapper">
                                        <div className="location">
                                            <div className="country">Argentina</div>
                                            <div className="place">Cerro Catedral</div>
                                            <div className="travel-amount">136 people want to travel here</div>
                                            <a href="#" className="btn button primary-gradient">I want to travel here</a>
                                        </div>
                                    </div>
                                </Slider>
                            </Fade>
                        </div>
                    </div>
                    <div className="col-6">
                        <Bounce>
                            <a href="#" className="primary-gradient btn section-cta">All Destinations</a>
                        </Bounce>
                    </div>
                    <div className="col-6">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
