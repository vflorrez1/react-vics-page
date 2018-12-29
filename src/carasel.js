import React, { Component } from "react";
import Slider from "react-slick";
import './carasel.css'
import kody from './kody.jpg'
import stock from './stock.png'
import stock2 from './stock2.jpg'
import github from './icons/github-logo.svg'
import react from './icons/reactIcon.svg'
import jsicon from './icons/jsicon.svg'
import css from './icons/css3Icon.svg'
import node from './icons/nodejs.svg'
import spotify from './icons/spotify.svg'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: true,
      slidesToShow: 1,
      centerPadding: '100px',
      focusOnSelect: true,
      slidesToScroll: 1
    };
    return (
      <div className="caraGrandad">
        <h2 className="caraTitle"> My Projects</h2>
        <div className="carouselContainer">
          <Slider {...settings}>
            <div className="slideContainer">
              <div className="caraBox">
                <img className="kodflixImg" src={kody} alt="kodflix"></img>
                <div className="ProjTitle">
                  Kodflix
                </div>
                <a className="texty" href="https://github.com/vflorrez1/kodflix/" target="_black">
                  <img src={github} className="faicons" alt="me"></img>
                  <img src={react} className="faicons" alt="me"></img>
                  <img src={jsicon} className="faicons" alt="me"></img>
                  <img src={css} className="faicons" alt="me"></img>
                  <img src={node} className="faicons" alt="me"></img>
                </a>
              </div>
            </div>
            <div className="slideContainer">
              <div className="caraBox">
                <img className="kodflixImg" src={stock} alt="kodflix"></img>
                <div className="ProjTitle">
                  Spotify Siftr
                </div>
                <a className="texty" href="https://github.com/vflorrez1/spotify-siftr" target="_black">
                  <img src={github} className="faicons" alt="me"></img>
                  <img src={react} className="faicons" alt="me"></img>
                  <img src={jsicon} className="faicons" alt="me"></img>
                  <img src={css} className="faicons" alt="me"></img>
                  <img src={spotify} className="faicons" alt="me"></img>
                </a>
              </div>
            </div>
            <div className="slideContainer">
              <div className="caraBox">
                <img className="kodflixImg" src={stock2} alt="kodflix"></img>
                <div className="ProjTitle">
                  More to come
                </div>
                <a className="texty" href="https://github.com/vflorrez1/" target="_black">
                  <img src={github} className="faicons" alt="me"></img>
                </a>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

