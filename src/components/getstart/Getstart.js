import React from 'react';
import startimg from '../../assets/fo-juice.png';
import './getstart.css';

function Getstart() {
  return (
    <div className='container getstart'>
      <div className='row col-md-12'>
         <div className='col-md-6 getstart-left'>
             <p>The perfect Travel companion for all your food needs.</p>
             <p>Get Started Today, It’s FREE</p>
             <a href='https://populardish.netlify.app/'> <button className='start-btn'>Start Now</button></a>
      
         </div>
         <div className='col-md-6 getstart-right'>
             <img className='start-img' src={startimg} alt='dots' />
         </div>
        </div>
    </div>
  )
}

export default Getstart