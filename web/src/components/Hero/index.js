import React from 'react';
import Header from '../Header';
import HeroBackground from '../../img/HeroBackground.jpg';
import './style.scss';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
//import PlayStoreIcon from '../../img/google-play.png';
//import AppStoreIcon from '../../img/app-store.png';


export default function Hero() {
    return (
        <div className="Hero">
            <Header />
            <div className="container">
                <Fade bottom cascade>
                    <Fade bottom>
                        <h2 className="HeroTitle font-family-serif">
                            Explore the world <br></br>
                            with exciting people
                        </h2>
                    </Fade>
                    <div className="HeroSubtitle">We help people find ideal company for the joint trips</div>
                    <Bounce>
                        <a href="#register" className="HeroButton btn primary-gradient">Get Started</a>
                    </Bounce>
                </Fade>
            </div>
            <img src={HeroBackground} alt="Background" className="Background" />
        </div>
    )
}