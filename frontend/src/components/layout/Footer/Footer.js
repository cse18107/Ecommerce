import React from 'react'
import  playStore  from '../../../images/playstore.png'
import  appStore  from '../../../images/Appstore.png'
import './Footer.css';

export const Footer = () => {
  return (
    <footer id="footer">
        <div className="leftFooter">
            <h4>DOWNLOAD OUR AP4</h4>
            <p>Download App for Android and IOS mobile phone</p>
            <img src={playStore} alt="Play Store"/>
            <img src={appStore} alt="App Store"/>
        </div>
        <div className="midFooter">
            <h1>ECOMMERCE</h1>
            <p>High Quality is our first priority</p>
            <p>Copyrights 2021 &copy; MeSaikatMaity</p>
        </div>
        <div className="rightFooter">
            <h4>Follow Us</h4>
            <a href="https://www.instagram.com/p/CaJxHNcA4u1/">Instagram</a>
            <a href="https://www.youtube.com/watch?v=AN3t-OmdyKA&t=17523s">Youtube</a>
            <a href="https://www.facebook.com/techburner1">Facebook</a>
        </div>
    </footer>
  )
}
