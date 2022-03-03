import React from 'react'
import Header from './Header'
import './Services.css'
import shocks from '../assets/images/shocks.jpg';

const Services = () => {
  return (
    <div className='services'>
        <div className='topbanner'>
            <Header/>
            <h3 className='bannertitle'> Our <span className='spancolor' >Services</span></h3>
            <p className='bannerdesc'>Delivering a top notch quality services to our customers
            is our priority</p>

        </div>
        <div className='servicearea'>
            <h3>What we Do</h3>
            <div className='servicelist'>
                  <div className='servicecard1'>
                       <img className='imagecard' src={shocks} alt=''/>
                       <div className='servicecard'>
                            <h4>Shock Repair</h4>
                            <p>Details about shock repair </p>
                        </div>
                  </div>
                  <div className='servicecard1'>
                       <img className='imagecard' src={shocks} alt=''/>
                       <div className='servicecard'>
                            <h4>Shock Repair</h4>
                            <p>Details about shock repair </p>
                        </div>
                  </div>
                  <div className='servicecard1'>
                       <img className='imagecard' src={shocks} alt=''/>
                       <div className='servicecard'>
                            <h4>Shock Repair</h4>
                            <p>Details about shock repair </p>
                        </div>
                  </div>
                  <div className='servicecard1'>
                       <img className='imagecard' src={shocks} alt=''/>
                       <div className='servicecard'>
                            <h4>Shock Repair</h4>
                            <p>Details about shock repair </p>
                        </div>
                  </div>
                  <div className='servicecard1'>
                       <img className='imagecard' src={shocks} alt=''/>
                       <div className='servicecard'>
                            <h4>Shock Repair</h4>
                            <p>Details about shock repair </p>
                        </div>
                  </div>
                  <div className='servicecard1'>
                       <img className='imagecard' src={shocks} alt=''/>
                       <div className='servicecard'>
                            <h4>Shock Repair</h4>
                            <p>Details about shock repair </p>
                        </div>
                  </div>
           
            </div>

        </div>

    </div>

    
  )
}

export default Services