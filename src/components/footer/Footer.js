import React, { useState } from 'react';
import logo from '../../assets/fo-logo.png';
import './footer.css';
import fb from '../../assets/fo-fb.png';
import insta from '../../assets/fo-insta.png';
import twitter from '../../assets/fo-twitter.png';


function Footer() {
    const [from, setFrom] = useState('');
    const to = 'priya@fidisys.com';
    const subject = 'Contact Request';
    function handleClick() {
       const mailtoUrl = `mailto:${to}?subject=${encodeURIComponent(subject)}`;
       window.location.href = mailtoUrl;
     }
  return (
    <>
    <div className='container footer'>
        <div className='row col-md-12'>
          <div className='col-md-6 footer-col1'>
            <div className='logo-content'><img src={logo} alt="logo"/><span className='logo-text'>Food<span className='text-gpt'>GPT</span></span> </div>     
            <div className='social-media'>
               <a href='https://www.instagram.com/fidisys/?hl=en' target="_blank" rel="noreferrer"><img src={insta} alt="logo"/></a>
               <a href='https://twitter.com/fidisysinc' target="_blank" rel="noreferrer"><img src={twitter} alt="logo"/></a>
               <a href='https://www.facebook.com/fidisys/' target="_blank" rel="noreferrer"><img src={fb} alt="logo"/></a>
           </div>
           <div className='footer-btn-container'><button className='footer-btn' onClick={handleClick}>Contact Us</button></div>
        </div>
        <div className='col-md-2 footer-20 footer-col2'>
            <span>Work With Us</span>
            <span>Advertise With Us</span>
            <span>Support Us</span>
            <span>Business Advices</span>
        </div>
        <div className='col-md-2 footer-20 footer-col3'>
            <span>Our Work</span>
            <span>Our Commitment</span>
            <span>Our Team</span>
        </div>
        <div className='col-md-2 footer-20 footer-col4'>
            <span>About Us</span>
            <span>FAQs</span>
            <span>Report a Bug</span>
        </div>
      </div>
    </div>
     <div className='footer-mob'>
      <div className='footer-col1'>
         <div className='logo-content'><img src={logo} alt="logo"/><span className='logo-text'>Food<span className='text-gpt'>GPT</span></span> </div>     
         <div className='footer-col1-bottom'>
               <div className='footer-btn-container'><button className='footer-btn' onClick={handleClick}>Contact Us</button></div>
               <div className='social-media'>
               <a href='https://www.instagram.com/fidisys/?hl=en' target="_blank" rel="noreferrer"><img src={insta} alt="logo"/></a>
               <a href='https://twitter.com/fidisysinc' target="_blank" rel="noreferrer"><img src={twitter} alt="logo"/></a>
               <a href='https://www.facebook.com/fidisys/' target="_blank" rel="noreferrer"><img src={fb} alt="logo"/></a>
                </div>
         </div>
        
     </div>
     <div className='footer-about'>
     <div className='footer-about1'>
         <span>Work With Us</span>
         <span>Advertise With Us</span>
         <span>Support Us</span>
         <span  className='last-span'>Business Advices</span>
     </div>
     <div className='footer-about2'>
         <span>Our Work</span>
         <span>Our Commitment</span>
         <span>Our Team</span>
     </div>
     <div className='footer-about3'>
         <span>About Us</span>
         <span>FAQs</span>
         <span>Report a Bug</span>
     </div>
     </div>
 </div>
 </>
  )
}

export default Footer