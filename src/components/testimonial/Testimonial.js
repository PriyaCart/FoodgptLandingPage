import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import testimonialImg from "../../assets/f-testimonial.png";
import './testimonial.css';
import quote from "../../assets/f0-quote.png";
import leave from "../../assets/f-leave.png"

function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };
    const testimonial = ["foodGPT is an absolute must-have for any food lover. The app is incredibly accurate and always provides great recommendations for popular dishes in any given city. It's like having a personal food guide in your pocket!",
    "I never knew where to start when it came to exploring the food scene in a new city, until I discovered foodGPT. This app has saved me so much time and effort by pointing me in the direction of the best local dishes.",
    "I love foodGPT! As a foodie who travels often, this app has been a game-changer.  I struggled with google for searching popular dishes of city I visit. It's so easy to find the most popular dishes in any city I visit.",
    "As someone who is always looking for new and exciting foods to try, I can't get enough of foodGPT. The app is so user-friendly and the results are always spot-on. I've discovered so many delicious dishes thanks to this app!",
    " It's the ultimate food searching app and has helped me discover so many amazing dishes I never would have known about otherwise. I tasted the popular dish of the places with the help of Food GPT. Thank you, foodGPT!"
    ]
    return (
      <div id="my-testimonial">    
      <div className='container testimonial' id="testimonial">
        <div className="row col-md-12">
         <div className='col-md-5 testimonial-left'>
             <img className="testimonialImg" src={testimonialImg} alt='testimonial'/>
         </div>
          <div className='col-md-7 testimonial-right'>
            <p className="what-say">What they say</p>
            <h5>What Our Customers Say About Us</h5>
          <Slider {...settings}>
        {
          testimonial.map((obj) => {
            return(
              <div className="fb-container">
                  <div className="feedback">
                      <p>{obj}</p>  
                  </div>  
                  <div><img src={quote} alt="quote"/> </div> 
               
              </div>
            )
         })
        }
        </Slider>
       
          </div>
      </div>
      </div>

      <img className="leaveImg" src={leave} alt='testimonial'/>

      
        <div className='testimonial-mob'>
         <div className='testimonial-top'>
           <h5>What Our Customers Say About Us</h5>
           <p className="what-say">What they say</p>
        
         <Slider {...settings}>
       {
         testimonial.map((obj) => {
           return(
             <div className="fb-container">
                 <div className="feedback">
                     <p>{obj}</p>  
                 </div>  
                 <div><img src={quote} alt="quote"/> </div> 
              
             </div>
           )
        })
       }
       </Slider>
      
         </div>
      
     </div>
   
     </div>
    );
  }

  export default Testimonial
