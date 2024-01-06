import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from '../components/Button';
import './Footer.css'



function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
Join the Adventure newsletter to receive 
our best vacation deals
        </p>
        <p className="footer-subscription-text">
            You can unsubscripe at anytime
        </p>
        <div className="input-area">
            <form>
               <input type="email" name="email" placeholder="Email" className="footer-input" />
               <Button buttonStyle='btn--outline'>Subscribe</Button>
            </form>
        </div> 
      </section>

      <div className="footer-links">
        <div className="footer-link-wrapper">
        <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/' >Testimonials</Link>
            <Link to='/' >Careers</Link>
            <Link to='/' >Investors</Link>
            <Link to='/' >Terms of Service</Link>
            </div>
            <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to='/' >Contact </Link>
            <Link to='/' >Support</Link>
            <Link to='/' >Destinations</Link>
            <Link to='/' >Sponsorships</Link>
            </div>
            </div>
            <div className="footer-link-wrapper">
        <div className="footer-link-items">
            <h2>Video</h2>
            <Link to='/' >Submit Video</Link>
            <Link to='/' >Ambassadors</Link>
            <Link to='/' >Agency</Link>
            <Link to='/' >Influencer</Link>
            </div>
            <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to='/' >Instagram</Link>
            <Link to='/' >Facebook</Link>
            <Link to='/' >Youtube</Link>
            <Link to='/' >Twitter</Link>
            </div>
            </div>
      </div>
      <div className=" social-media">
        <div className="social-media-wrap">
                <Link to='/' className="social-logo">
TRVL
                </Link> 
                <small className='website-rights'>
                    TRVL©2024
                </small>
                <div className="social-icons">
                    <Link className="social-icon-Link facebook" 
                    to="/"
                    target="_blank"
                    aria-label='facebook'
                    >
<img src='src/assets/images/facebook.png'/>

                    </Link>

                    <Link className="social-icon-Link instagram" 
                    to="/"
                    target="_blank"
                    aria-label='instagram'
                    >
<img src='src/assets/images/instagram.png'/>

                    </Link>
                    <Link className="social-icon-Link twitter" 
                    to="/"
                    target="_blank"
                    aria-label='twitter'
                    >
<img src='src/assets/images/twitter.png'/>
                    </Link>

                    <Link className="social-icon-Link youtube" 
                    to="/"
                    target="_blank"
                    aria-label='youtube'
                    >
<img src='src/assets/images/youtube.png'/>
                    </Link>
                </div>
            </div>
        </div>
      </div>
    
  )
}

export default Footer
