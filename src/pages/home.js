import React from 'react'
import Banner from "../assets/background.jpg";
import one from "../assets/header_iChassis100.jpg"
import thousand from "../assets/header-iChassis1000.jpg"
//import { Link } from "react-router-dom";
import '../styles/home.css';

function home() {
  return (

    <div>

      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>

        <div className="headerContainer" >
          <h1>Cenntro's iChassis</h1>
          <p>Autonomous Vehicles</p>
          {/* // need to fix external linking,, UPDATE: i commented this out becuase it didnt work but will keep here in case I can figure out how to fix
          <Link to={{ pathname: 'https://www.cenntroauto.com/' }} target='_blank'>
          <button> Cenntro Official Website </button>
          </Link>
          */}
          {/*this method of linking works,  */}
          <a href='https://www.cenntroauto.com/' target='_blank' rel='noreferrer'>
          <button> Cenntro Official Website </button>
          </a>
        </div>
        
      </div>

          
            <div className='seperator'>
            <p>A Leader in Commercial Electric Vehicle Sales and Production</p>
            </div>

            <div className='sep'>
              <p>Self-driving cars like Cenntro's iChassis can revolutionize society. Improving productivity, customer service, and workplace safety in various business industries.</p>
            </div>

            <div className='hundred'>
            <img src = {one} alt='ichassis100'/>
            <p>Cenntro's iChassis enables automation and autonomy through its programmable all-electric platform, which includes drive-by-wire, steer-by-wire, brake-by-wire technology, and CAN communication protocol. It provides the necessary features for businesses to customize and implement automated driving solutions.</p>
            </div>


            <div className='thousand'>
            <img src = {thousand} alt='ichassis1k'/>
            <p>Cenntro's iChassis series offers three models with varying payloads (ranging from 1100 lbs. to 33,000 lbs.) to cater to different use cases. Each model is customizable to meet the specific needs of an application.</p>
            
            </div>

            <div className='chassis'>
              <p>iChassis models shown: iChassis80, iChassis100, iChassis1000, respectively.</p>
            </div>
            


    </div>
    
  )
}

export default home