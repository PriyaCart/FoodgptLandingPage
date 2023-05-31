import React from 'react';
import './introduction.css';
import intro from '../../assets/f-introduction.png';
import intro1 from '../../assets/f-intro-1.png';
import intro2 from '../../assets/f-intro-2.png';
import intro3 from '../../assets/f-intro-3.png';
import intro4 from '../../assets/f-intro-4.png';
import mintro1 from '../../assets/m-intro1.png';
import mintro2 from '../../assets/m-intro2.png';
function Introduction() {
  return (
    <div className='introduction1' id="home">
    <div className='introduction'>
      <div className='intro-text'>
        <div className='intro-text-left'>
            <h1 className='intro-head1'>Never settle for</h1>
            <h1 className='intro-head2'>A mediocre meal again</h1>
            <p>Your ultimate food companion for every occasion. Say goodbye to the hassle of finding great food while traveling. With Food Explorer, you can enjoy the best dishes that any city has to offer, all at your fingertips.</p>
            <a href='https://populardish.netlify.app/' target="_blank" rel="noreferrer"> <button className='getstart-btn'>Get Started For Free <i class="fas fa-arrow-right"></i></button></a>
        </div>
        <div className='intro-img-container'>
            <img className='intro-img' src={intro} alt='food'/>
        </div>
      </div>
      <div className='web-view'>
          <img className='intro1-img' src={intro1} alt='food'/>
          <img className='intro2-img' src={intro2} alt='food'/>
          <img className='intro3-img' src={intro3} alt='food'/>
          <img className='intro4-img' src={intro4} alt='food'/>
      </div>
      <div className='mob-view'>
          <img className='m-intro1' src={mintro1} alt='food'/>
          <img className='m-intro2' src={mintro2} alt='food'/>
      </div>
    </div>
    </div>
  )
}

export default Introduction