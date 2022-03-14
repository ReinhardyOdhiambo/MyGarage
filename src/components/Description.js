import React from 'react'
import './Description.css'
import Divider from '@mui/material/Divider';
import {Link} from 'react-router-dom';



const Description = () => {
  return (
    <div className='description'>
        <div className='content'>
            <div className='titledesc'>
                <p className='p1'>We Care</p>
                <p className='p2'>About Your Car</p>
            </div>
            <div className='divider'></div>
            <div className='details'>
                    <h1>Our Services</h1>
                    <div className='services'>
                        <ul>
                            <li className='li'>Auto Maintenance Services</li>
                            <li className='li'>Brake Repair Pads & Rotors​</li>
                            <li className='li'>System Diagnosis & Repair​​</li>
                            <li className='li'>Air Conditioning Services​​</li>
                            <li className='li'>Tires & Wheel Balancing​​</li>
                            <li className='li'>Shocks, Struts Replacement​</li>
                        </ul>
                        <Link to={'/services' }><button className='button'>Services</button></Link>
                    </div>
                    
            </div>
            <div className='divider'></div>
            <div className='details'>
                    <h1>Working Hours</h1>
                    <div className='workinghours'>
                        <ul>
                            <li className='li'>Monday-Friday:8am-7pm </li>
                            <li className='li'>Sartuday:9am-4pm</li>
                            <li className='li'>Closed On Sunday</li>
                            
                        </ul>
                    </div>    
                    
            </div>
            <div className='divider'></div>
            <div className='details'>
                    <h1>Contact Us</h1>
                    <ul>
                            <li className='li'>0743713426 </li>
                            <li className='li'>reinhardyomondi@gmail.com</li>
                            <li className='li'>Ngong road</li>
                            
                        </ul>
            </div>





        </div>


    </div>
  )
}

export default Description