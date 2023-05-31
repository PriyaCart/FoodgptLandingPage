import React from 'react';
import fire from '../../assets/fo-fire.png';
import './features.css';
import feature1 from '../../assets/fo-plate.png';
import feature2 from '../../assets/fon-feature2.jpg';
import feature_bg from '../../assets/fo-feature1.png';
import arrow from '../../assets/fo-arrow.png';
import dots from '../../assets/fo-dots.png';
import new1 from '../../assets/new4.jpg';
import mfeature1 from "../../assets/m-feature1.png";

function Features() {
  return (
    <div className='container-fluid features' id="features">
        <div className='row col-md-12 features-top'>
              <img className='fire-img' src={fire} alt='fire'/>
              <h5>FEATURES</h5>
              <h1>Join FoodGPT for a tasty adventure!</h1>
              <p>From street food to fine dining, our app has got you covered</p>
              <img className='dots' src={dots} alt='feature1'/>
        </div>
        <div className='row col-md-12 features-bottom'>
            <div className='col-md-7 feature-bottom-left'>
                <h2>Discover popular <span className='left-red'>local cuisine</span> with <span className='left-green'>Food GPT!</span></h2>
                <p>Just enter the name of the <span className='left-red'>city</span> you're in and our app will generate a list of <span className='left-green'>famous foods</span>, complete with mouth-watering images.</p>
            </div>
            <div className='col-md-5 feature-bottom-right'>
                <div className='bg-fit'>
                   <img className='feature_bg' src={new1} alt='feature1'/>
                   {/* <img className='plate-img' src={feature1} alt='feature1'/> */}
                </div>
              
                {/* <img className='arrow' src={arrow} alt='feature1'/> */}
            </div>
            <div className='feature-bottom-mob'>
                 <img className='m-feature1' src={mfeature1} alt='feature1'/>
                
            </div>

        </div>
        <div className='row col-md-12 features-bottom2'>
            <div className='col-md-6 feature-bottom2-left'>

              <img className='feature2-img' src={feature2} alt='feature2'/>
          
            </div>
            <div className='col-md-6 feature-bottom2-right'>
                <h2>Are you in <span className='left-green'>search </span> of the  <span className='left-red'>ultimate dining</span> experience?</h2>
                <p>No more tedious Google searches for local specialties - <span className='left-green'>Food GPT </span>is your ultimate <span className='left-red'>food companion </span> for any occasion.</p>    
            </div>

        </div>
        <div className='features-bottom2-mob'>
            <div className='feature-bottom2-top'>
            <h2><span className='left-green'>Looking</span> for the <span className='left-red'>perfect dining</span> experience?</h2>
                {/* <h2><span className='left-green'>Looking for</span>dolor sit amet, consectetur <span className='left-red'> adipiscing elit</span></h2> */}
                <p>No more tedious Google searches for local specialties - <span className='left-green'>Food GPT </span>is your ultimate <span className='left-red'>food companion </span>for any occasion</p>    
            </div>
            <div className='feature-bottom2-bottom'>
                <img className='feature2-img' src={feature2} alt='feature2'/>
            </div>
           
        </div>
      
    </div>
  )
}

export default Features