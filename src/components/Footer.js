import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<div className="footer-container">
			<section className="footer-subscription">
				<p className="footer-subscription-heading">
				Join the Adventure newsletter to reveive out best vacation deals
				</p>
				<p className="footer-subscription-text">
				You can unsubscribe at any time.
				</p>
				<div className="input-areas">
					<form>
						<input type="email" name="email" placeholder="Your Email" className="footer-input"/>
						<Button buttonStyle='btn--outline'>Subscribe</Button>
					</form>
				</div>
			</section>
			<div className="footer-links">
				<div className="footer-link-wrapper">
					<div className="footer-link-items">
						<h2>About Us</h2>
						<Link to='/sign-up'>How it works</Link>
						<Link to='/'>Testimonials</Link>
						<Link to='/'>Careers</Link>
						<Link to='/'>Investors</Link>
						<Link to='/'>Terms of Services</Link>
					</div>
					<div className="footer-link-items">
						<h2>Contact Us</h2>
						<Link to='/sign-up'>Contact</Link>
						<Link to='/'>Support</Link>
						<Link to='/'>Destinations</Link>
						<Link to='/'>Sponsorphips</Link>				
					</div>
				</div>
				<div className="footer-link-wrapper">
					<div className="footer-link-items">
						<h2>Videos</h2>
						<Link to='/sign-up'>Submit Videos</Link>
						<Link to='/'>Ambassadors</Link>
						<Link to='/'>Agency</Link>
						<Link to='/'>Influencer</Link>					
					</div>
					<div className="footer-link-items">
						<h2>Social Media</h2>
						<Link to='/sign-up'>Instagram</Link>
						<Link to='/'>Facebook</Link>
						<Link to='/'>Youtube</Link>
						<Link to='/'>Twitter</Link>
					</div>
				</div>
			</div>
			<section className='social-media'>
				<div className='social-media-wrap'>
					<div className="footer-logo">
						<Link to="/" className="social-logo">
							TRVL <i className="fab fa-typo3"></i>
						</Link>
					</div>
					<small className='website-rights'>TRVL &copy; 2021</small>
					<div className="social-icons">
						<Link to="/" className="social-icon-link facebook" target="_blank" aria-label="Facebook">
							<i className="fab fa-facebook-f"></i>
						</Link>
						<Link to="/" className="social-icon-link instagram" target="_blank" aria-label="Instagram">
							<i className="fab fa-instagram"></i>
						</Link>
						<Link to="/" className="social-icon-link twitter" target="_blank" aria-label="Twitter">
							<i className="fab fa-twitter"></i>
						</Link>
						<Link to="/" className="social-icon-link linkedin" target="_blank" aria-label="Linkedin">
							<i className="fab fa-linkedin"></i>
						</Link>
					</div>
				</div>
			</section>
		</div>

		)
}

export default Footer;