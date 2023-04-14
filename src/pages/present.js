import React from 'react';
import '../styles/present.css';
import Form from '../components/Form';
import angled from "../assets/car1.jpg";
import front from "../assets/car2.jpg";
import side from "../assets/car3.jpg";
import bannerEV from "../assets/bannerEV.jpg";
import maybe from "../assets/maybebanner.jpg";

function present() {
    return (
        <div>
            
            <div className="title" style={{ backgroundImage: `url(${maybe})` }}>
                <h1>Presentation</h1>
            </div>
            

            <div className='angled'>
                <img src = {angled} alt='Angled view of car'/>
                <div className='angled-text'>
                    <p>At the start of the project, Cenntro had asked us to brainstorm with ideas for possible uses for their newly introduced iChassis. Our team quickly began brainstorming and we came up with many possibilities with which Cenntro could offer potential clients. The top five ideas we presented were: Security Patrol Unit, Mobile Vending Machine, Package Delivery, Mobile Directory and Mobile Utilities. </p>
                    <p>We all decided we liked the Mobile Utilities idea and decided to move forward with it. Originally, Mobile Utilities included many things such as: Electronic Chargers, Gasoline, Vaccuum, Tire Repair Kits, Jumper Cables, Emergency Contact to Authorities and many more. The main idea was to have an Autonomous Vehicle equipped with utilities that would prove useful in a parking lot setting. </p>
                </div>
            </div>


            <div className='front'>
                <div className='front-text' >
                    <p>With all these ideas we settled in on the fact that EV charging has some issues currently, mainly that the charging stations can be very busy and congested most of the time. We came up with the idea of being able to have a Mobile EV charging station. </p>
                    <p>The way the EV charging would work is we would have iChassis 100 models readily available in parking lots. Then customers with EV vehicles could use an online interface to request an iChassis 100 equipped with an overhead EV charger. The iChassis would then navigate to the location of the customers vehicle ready to charge their EV. This solves the issue of limited EV charge ports at popular locations like shopping malls and marketplaces.</p>
                </div>
                <img src = {front} alt='Front view of car'/>
            </div>


            <div className="EV" style={{ backgroundImage: `url(${bannerEV})` }}>
               <p>Our idea had EVolved.</p> 
            </div>


            <div className='side'>
                <img src = {side} alt='Side view of car'/>
                <div className='side-text'>
                    <p>We now had a practical idea that could actually bring value to our society today in an ever growing market for EVs.</p>
                    <p>This idea would take teams of Engineers and years to bring to fruition, so we had to focus on an aspect of the idea we felt that we could produce. We all wanted to work with Artificial Intelligence and so we decided to create our own "iChassis" and implement the ability for the Chassis to drive to a desired location in the parking lot. This meant the Chassis would need to safely navigate through a parking lot to the desired location. Our Hardware and Obstacle Detection team got to work. </p>
                </div>
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