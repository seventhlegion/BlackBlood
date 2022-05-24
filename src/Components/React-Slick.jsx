import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../Components/Styles/react-slick.css';

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      autoplay: false,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 3,
      centerMode: true,
      
      responsive: [{
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        }
      }],
      
    }
    return (
      <div className="section-slider">
        <Slider className="main-slider" {...settings}>
          <div>
            <div className="img1">
              <div className="info">
                <p className="info-title">
                  Broadleaf
                </p>
                <p>
                  since 2008
                </p>
                <input className="products-shop-btn" type={'button'} value={'Shop Now'} />
              </div>
            </div>
          </div>
          <div>
            <div className="img2">
              <div className="info">
                <p className="info-title">
                  ModA
                </p>
                <p>
                  since 2018
                </p>
                <input className="products-shop-btn" type={'button'} value={'Shop Now'} />
              </div>
            </div>
          </div>
          <div>
            <div className="img3">
              <div className="info">
                <p className="info-title">
                  Bacardi
                </p>
                <p>
                  since 2001
                </p>
                <input className="products-shop-btn" type={'button'} value={'Shop Now'} />
              </div>
            </div>
          </div>
          <div>
            <div className="img4">
              <div className="info">
                <p className="info-title">
                  Borsao
                </p>
                <p>
                  since 2015
                </p>
                <input className="products-shop-btn" type={'button'} value={'Shop Now'} />
              </div>
            </div>
          </div>
          <div>
            <div className="img5">
              <div className="info">
                <p className="info-title">
                  Ferrari
                </p>
                <p>
                  since 2017
                </p>
                <input className="products-shop-btn" type={'button'} value={'Shop Now'} />
              </div>
            </div>
          </div>
          <div>
            <div className="img6">
              <div className="info">
                <p className="info-title">
                  Chianiti
                </p>
                <p>
                  since 2010
                </p>
                <input className="products-shop-btn" type={'button'} value={'Shop Now'} />
              </div>
            </div>
          </div>
          <div>
            <div className="img7">
              <div className="info">
                <p className="info-title">
                  Ondulé
                </p>
                <p>
                  since 2014
                </p>
                <input className="products-shop-btn" type={'button'} value={'Shop Now'} />
              </div>
            </div>
          </div>
          <div>
            <div className="img8"> 
              <div className="info">
                <p className="info-title">
                  Rasteau
                </p>
                <p>
                  since 2020
                </p>
                <input className="products-shop-btn" type={'button'} value={'Shop Now'} />
              </div>
            </div>
          </div>
          <div>
            <div  className="img9">
              <div className="info">
                <p className="info-title">
                  Kal-Simone
                </p>
                <p>
                  since 2013
                </p>
                <input className="products-shop-btn" type={'button'} value={'Shop Now'} />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}