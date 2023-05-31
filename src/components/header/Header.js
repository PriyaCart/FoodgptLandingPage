import React, { useState } from "react";
import './header.css';
import logo from "../../assets/fo-logo.png";
import menu from "../../assets/f-menu.png";


function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [navlink1, setNavlink1] = useState("link")
  const [navlink2, setNavlink2] = useState("dummy")
  const [navlink3, setNavlink3] = useState("dummy")
  const [navlink4, setNavlink4] = useState("dummy")

  const sample = (event) => {
    console.log(event.target.id)
    console.log(event.target)
    setIsVisible(!isVisible);
    setIsChecked(!isVisible);
 
  }
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    setIsVisible(event.target.checked);  
  };

  const navsample = (event) => {
    if(event.target.id == "link1"){
      setNavlink1("link")
      setNavlink2("dummy")
      setNavlink3("dummy")
      setNavlink4("dummy")

    }
    if(event.target.id == "link2"){
      setNavlink2("link")
      setNavlink1("dummy")
      setNavlink3("dummy")
      setNavlink4("dummy")
    }
    if(event.target.id == "link3"){
      setNavlink3("link")
      setNavlink1("dummy")
      setNavlink2("dummy")
      setNavlink4("dummy")

    }
    if(event.target.id == "link4"){  
      setNavlink4("link")
      setNavlink1("dummy")
      setNavlink3("dummy")
      setNavlink2("dummy")

    }
  }
 
 
  return (
    <div className='header'>
    <div className='header-left'><img src={logo} alt='logo' className='food-logo'/><span className='logo-food'>Food<span className='logo-gpt'>GPT</span></span></div>
     <div className="web-view">
      <nav id='food-navbar'>
       <ul className='header-right'>
        <li><a href='#home' onClick={navsample} id="link1" className={navlink1}>Home</a></li>
        <li><a href='#features' onClick={navsample} id="link2" className={navlink2}>Features</a></li>
        <li><a href='#my-testimonial' onClick={navsample} id="link3" className={navlink3}>Testimonials</a></li>
        <li><a href='#faqs' onClick={navsample} id="link4" className={navlink4}>FAQs</a></li>
      </ul>
    </nav>
     </div>
    <div className="mob-view">
    <input type='checkbox' id="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
    <label for="checkbox"><img className='menu-icon' src={menu} alt="menu"  /></label>
    { isVisible && <nav id='food-navbar'>
      <ul className='header-right'>
        <li><a href='#home' onClick={sample}>Home</a></li>
        <li><a href='#features' onClick={sample}>Features</a></li>
        <li><a href='#my-testimonial' onClick={sample}>Testimonials</a></li>
        <li><a href='#faqs' onClick={sample}>FAQs</a></li>
      </ul>
    </nav>
    }
    </div>
</div>
  )
}

export default Header