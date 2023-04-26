import React from 'react';
import '../styles/present.css';
import Form from '../components/Form';
//import angled from "../assets/car1.jpg";
//import front from "../assets/car2.jpg";
//import side from "../assets/car3.jpg";
import bannerEV from "../assets/bannerEV.jpg";
import maybe from "../assets/maybebanner.jpg";
import idea1 from "../assets/chassisrough1.jpg";
import idea2 from "../assets/chassisrough2.jpg";
//import idea3 from "../assets/chassisrough3.jpg";
import vending from "../assets/chassisrough4.jpg";
import show1 from "../assets/show1.jpg";
import show2 from "../assets/show2.jpg";
import show3 from "../assets/show3.jpg";
import show4 from "../assets/show4.jpg";

import showcasing from "../assets/bridgenRo.jpg";


function present() {
    return (
        <div>
            
            <div className="title" style={{ backgroundImage: `url(${maybe})` }}>
                <h1>Presentation</h1>
            </div>
            

            <div className='paragraph1'>
                <img src = {idea2} alt='ichassis100 mobile directory idea'/>
                <div className='paragraph1-text'>
                    <p>At the start of the project, Cenntro had asked us to brainstorm with ideas for possible uses for their newly introduced iChassis. Our team quickly began brainstorming and we came up with many possibilities with which Cenntro could offer potential clients. The top five ideas we presented were: Security Patrol Unit, Mobile Vending Machine, Package Delivery, Mobile Directory(pictured to left) and Mobile Utilities(pictured below). </p>
                    <p>We all decided we liked the Mobile Utilities idea and decided to move forward with it. Originally, Mobile Utilities included many things such as: Electronic Chargers, Gasoline, Vaccuum, Tire Repair Kits, Jumper Cables, Emergency Contact to Authorities and many more. The main idea was to have an Autonomous Vehicle equipped with utilities that would prove useful in a parking lot setting. </p>
                </div>
            </div>


            <div className='paragraph2'>
                <div className='paragraph2-text' >
                    <p>With all these ideas we settled in on the fact that EV charging has some issues currently, mainly that the charging stations can be very busy and congested most of the time. We came up with the idea of being able to have a Mobile EV charging station. </p>
                    <p>The way the EV charging would work is we would have iChassis 100 models readily available in parking lots. Then customers with EV vehicles could use an online interface to request an iChassis 100 equipped with an overhead EV charger. The iChassis would then navigate to the location of the customers vehicle ready to charge their EV. This solves the issue of limited EV charge ports at popular locations like shopping malls and marketplaces.</p>
                </div>
                <img src = {idea1} alt='ichassis100 mobile utilities idea'/>
            </div>


            <div className="EV" style={{ backgroundImage: `url(${bannerEV})` }}>
               <p>Our idea had EVolved.</p> 
            </div>


            <div className='paragraph3'>
                <img src = {vending} alt='iChassis100 rendered vending machine'/>
                <div className='paragraph3-text'>
                    <p>To the left, we have an official Cenntro rendered image showcasing the potential final design of the iChassis100 for a vending machine. </p>
                    <p>We now had a practical idea that could actually bring value to our society today in an ever growing market for EVs.</p>
                    <p>This idea would take teams of Engineers and years to bring to fruition, so we had to focus on an aspect of the idea we felt that we could produce. We all wanted to work with Artificial Intelligence and so we decided to create our own "iChassis" and implement the ability for the Chassis to drive to a desired location in the parking lot. This meant the Chassis would need to safely navigate through a parking lot to the desired location. Our Hardware and Obstacle Detection team got to work. </p>
                </div>
            </div>


            <div className='paragraph4'>
                <img src = {showcasing} alt='Bridgette with Ro Bert'/>
                <div className='paragraph4-text'>
                    <p>We made our list of parts needed and ordered them right away. Luckily, our team member Bridgette had previous experience building Raspberry Pi cars. She knew exactly what we needed and where the issues would lie. We ordered extra parts like external antenna and extra batteries. The parts came in and Bridgette led the building of the UTD chassis. Below is a list of the parts we used.  
                    </p>
                    <p><a href="https://docs.google.com/spreadsheets/d/1tm3lPVVQ9qCBv7gOGHLOpW0cvU83FtqpZ8IdkWLmLEo/edit#gid=0" target='_blank' rel='noreferrer'>List of parts we ordered to build the UTD Chassis.</a></p>
                    <p>Once it was built, we needed to start working on the object detection and the navigation of the car. This was the hardest part of the project. We had to re-align our goals when navigation didnt prove to be as attainable as we orginally thought. The main issue was our antenna and signal strength was limiting our GPS coordinates from being accurate enough for us to use. Originally, we had planned to use the Input Form at the bottom of this webpage to send a coordinate location to a certain parking spot in the lot(ex: H12). We kept the form on webpage for documentation purposes. We re-evaluated our circumstances but still wanted the car to be able to get to a parking spot on its own. 
                    </p>
                </div>
            </div>


            <div className='picturegrid'>
                <img src = {show1} alt='first'/>
                <img src = {show2} alt='second'/>
                <img src = {show3} alt='third'/>
                <img src = {show4} alt='four'/>
            </div>

            <div className='undergrid'>
                <p> </p>
            </div>






            {/* adding <Form/> here imports the Form from the Form.js file and makes it display on the "present" page */}
            <div className='formTitle'>
                <h3>Enter coordinates using following format: </h3>
            </div>

            <div>
            <Form/>
            </div>

        </div>
    )
}

export default present