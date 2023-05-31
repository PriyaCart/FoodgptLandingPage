import React, { useState } from 'react';
import './help.css';

function Help() {
 const [from, setFrom] = useState('');
 const to = 'priya@fidisys.com';
 const subject = 'Contact Request';
 function handleClick() {
    const mailtoUrl = `mailto:${to}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoUrl;
  }
  const [isActive1, setIsActive1] = useState(false);
  const [addclass1, setAddclass1] = useState('plus')
  const [addclass2, setAddclass2] = useState('plus')
  const [addclass3, setAddclass3] = useState('plus')
  function handleClick1() {

    setIsActive1(!isActive1);
    if(isActive1 !== true){
        setAddclass1('minus')
    }
    else{
        setAddclass1('plus')
    }
  }
  const [isActive2, setIsActive2] = useState(false);

  function handleClick2() {
    setIsActive2(!isActive2);
    if(isActive2 !== true){
        setAddclass2('minus')
    }
    else{
        setAddclass2('plus')
    }
  }
  const [isActive3, setIsActive3] = useState(false);

  function handleClick3() {
    setIsActive3(!isActive3);
    if(isActive3 !== true){
        setAddclass3('minus')
    }
    else{
        setAddclass3('plus')
    }
  }

  return (
    <div className='container' id='faqs'>
    <div className='row col-md-12 help '>
        <div className='col-md-6 help-left'>
        <div className={`faq ${isActive1 ? 'active' : ''}`}>
                <button className='help-left-line' onClick={handleClick1}> 
                     <span className='help-left-text'>How does foodGPT work?</span>
                    <span className={addclass1}>{isActive1 ? '-' : '+'}</span>
               </button>
                <div className="faq-answer">
                    <p>When you enter a city name in the search bar, foodGPT uses OpenAI APIs to provide you with a list of popular dishes in that city.</p>
               </div>
        </div>
        <div className={`faq ${isActive2 ? 'active' : ''}`}>
                <button className='help-left-line' onClick={handleClick2}> 
                     <span className='help-left-text'>Is foodGPT free to use?</span>
                    <span className={addclass2}>{isActive2 ? '-' : '+'}</span>
               </button>
                <div className="faq-answer">
                    <p>Yes, foodGPT is completely free to use.</p>
               </div>
        </div>
        <div className={`faq ${isActive3 ? 'active' : ''}`}>
                <button className='help-left-line extra-text' onClick={handleClick3}> 
                     <span className='help-left-text'>Are the dishes listed in foodGPT always available in the city I search for?</span>
                    <span className={addclass3}>{isActive3 ? '-' : '+'}</span>
               </button>
                <div className="faq-answer faq-answer3">
                    <p>While we try to ensure that the dishes listed are currently available in the city you search for, we cannot guarantee availability as restaurant menus can change frequently.</p>
               </div>
        </div> 
       </div> 
        <div className='col-md-6 help-right'>
            <h2>How we can help you?</h2>
            <p>Follow our newsletter. We will regulary update our latest project and availability.</p>
            <div className='input-container'>
                <input type='text' placeholder='Enter your Email' value={from} onChange={(e) => setFrom(e.target.value)}/>
                <div className='help-links'>
                   <button onClick={handleClick}>Lets Talk</button>
                   <a href='#faqs'>More FAQ <i class="fas fa-arrow-right"></i></a>    
                </div>
            </div>
           
        </div>
    </div>
    <div className='help-mob'>
    <div className='help-mob-top'>
        <h2>How We Can Help You?</h2>
        <p className='para-help'>Follow our newsletter. We will regulary update our latest project and availability.</p>
        <div className='input-container'><input type='text' placeholder='Enter your Email' value={from} onChange={(e) => setFrom(e.target.value)}/><button onClick={handleClick}>Lets Talk</button></div>
        <p className='link-container'><a href='#faqs'>More FAQ <i class="fas fa-arrow-right"></i></a></p> 
        </div>
    <div className='help-mob-bottom'>
        <div className={`faq ${isActive1 ? 'active' : ''}`}>
                <button className='help-left-line' onClick={handleClick1}> 
                     <span className='help-left-text'>How does foodGPT work?</span>
                    <span className={addclass1}>{isActive1 ? '-' : '+'}</span>
               </button>
                <div className="faq-answer">
                    <p>When you enter a city name in the search bar, foodGPT uses OpenAI APIs to provide you with a list of popular dishes in that city.</p>
               </div>
        </div>
        <div className={`faq ${isActive2 ? 'active' : ''}`}>
                <button className='help-left-line' onClick={handleClick2}> 
                     <span className='help-left-text'>Is foodGPT free to use?</span>
                    <span className={addclass2}>{isActive2 ? '-' : '+'}</span>
               </button>
                <div className="faq-answer">
                    <p>Yes, foodGPT is completely free to use.</p>
               </div>
        </div>
        <div className={`faq ${isActive3 ? 'active' : ''}`}>
                <button className='help-left-line extra-text' onClick={handleClick3}> 
                     <span className='help-left-text'>Are the dishes listed in foodGPT always available in the city I search for?</span>
                    <span className={addclass3}>{isActive3 ? '-' : '+'}</span>
               </button>
                <div className="faq-answer faq-answer3">
                    <p>While we try to ensure that the dishes listed are currently available in the city you search for, we cannot guarantee availability as restaurant menus can change frequently.</p>
               </div>
        </div>      
    </div>
  
</div>
</div>
  )
}

export default Help