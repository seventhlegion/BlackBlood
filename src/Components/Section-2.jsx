import React from 'react';
import './Styles/Section-2.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function Section2() {
  return (
        <Carousel className='carousel' showStatus={false} transitionTime={1000} useKeyboardArrows={true}>
            <div className='pic1'>
                <div className='pic-container'>
                    <h1 className='pic-h1'>
                        La Rioja Alta Gran Reserva™
                    </h1>
                    <p className='pic-p'>
                        Series from 2009<br/>
                        The perfect grape from iranian fields<br/>
                        The La Rioja Alta Gran Reaserva™ is a best choice to make a great night<br/>
                        All of iranian taste are in your hand
                    </p>
                    <button className='slider-btn'>Shop Now</button>
                </div>
            </div>
            <div className='pic2'>
                <div className='pic-container'>
                    <h1 className='pic-h1'>
                        Available!
                    </h1>
                    <p className='pic-p'>
                        Search in Locator to find all bars and wine shopes in near of you<br/>
                        Available in 1368 bars and 894 wine shopes of country
                    </p>
                    <button className='slider-btn'>Learn More</button>
                </div>
            </div>
            <div className='pic3'>
                <div className='pic-container'>
                    <h1 className='pic-h1'>
                        Mountain
                    </h1>
                    <p className='pic-p'>
                        Old like mountains series from 1980 - 2000 <br/>
                        Strong feels with 42% alcohol
                    </p>
                    <button className='slider-btn'>Shop Now</button>
                </div>
            </div>
        </Carousel>
    )
}
