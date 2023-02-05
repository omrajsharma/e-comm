import React from 'react'
import BuySellLogo from '../../assets/buy-sell-crop-logo.png'
import FacebookIcon from '../../assets/icons/facebook.png'
import TwitterIcon from '../../assets/icons/twitter.png'
import InstagramIcon from '../../assets/icons/instagram.png'
import LinkedinIcon from '../../assets/icons/linkedin.png'
import './Footer.css'

function Footer() {
  return (
    <div>
        <footer>
            <div className="footer-top">
              <div className="footer-col">
                <div className="footer-col-head">Popular Location</div>
                <div className="footer-col-item">Delhi</div>
                <div className="footer-col-item">Mumbai</div>
                <div className="footer-col-item">Bangalore</div>
                <div className="footer-col-item">Hyderabad</div>
                <div className="footer-col-item">Chennai</div>
                <div className="footer-col-item">Pune</div>
                <div className="footer-col-item">Kolkata</div>
                <div className="footer-col-item">Jaipur</div>
                <div className="footer-col-item">Ahmedabad</div>
              </div>
              <div className="footer-col">
                <div className="footer-col-head">Trending Searches</div>
                <div className="footer-col-item">Bikes</div>
                <div className="footer-col-item">Watches</div>
                <div className="footer-col-item">Books</div>
                <div className="footer-col-item">Clothes</div>
                <div className="footer-col-item">Shoes</div>
                <div className="footer-col-item">Furniture</div>
                <div className="footer-col-item">Mobiles</div>
                <div className="footer-col-item">Laptops</div>
                <div className="footer-col-item">Fridge</div>
                <div className="footer-col-item">AC</div>
              </div>
              <div className="footer-col">
                <div className="footer-col-head">About Us</div>
                <div className="footer-col-item">About BuySell Group</div>
                <div className="footer-col-item">BuySell Blog</div>
                <div className="footer-col-item">Contact Us</div>
                <div className="footer-col-item">BuySell for Businesses</div>
              </div>
              <div className="footer-col">
                <div className="footer-col-head">BuySell</div>
                <div className="footer-col-item">Help</div>
                <div className="footer-col-item">Sitemap</div>
                <div className="footer-col-item">Legal & Privacy information</div>
              </div>
              <div className="footer-brand-col" >
                <img src={BuySellLogo} alt="" />
                <div className='footer-brand-social'>
                  <img src={FacebookIcon} alt="" />
                  <img src={TwitterIcon} alt="" />
                  <img src={InstagramIcon} alt="" />
                  <img src={LinkedinIcon} alt="" />
                </div>
                <div className="footer-brand-app-download">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="" />
                </div>
              </div>
              
            </div>
            <div className="footer-bottom">
              Made with <span className="heart">❤️</span> at BuySell
            </div>
        </footer>
    </div>
  )
}

export default Footer