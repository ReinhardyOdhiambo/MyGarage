import React from 'react'
import './Highlights.css'
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import PhoneEnabledRoundedIcon from '@mui/icons-material/PhoneEnabledRounded';
import GppGoodRoundedIcon from '@mui/icons-material/GppGoodRounded';


const Highlights = () => {
    return (
        <div className='highlight'>
            <div className='titlehigh'>
               <p> Why Choose Us</p>
            </div>
            <div className='cards'>
                <div className='card'>
                    <PeopleAltRoundedIcon fontSize="large" className='bussicon'/>
                    <h6 className='cardtitle'>Expirience Skill</h6>
                    <p className='carddesc'>This is a short description elaborating 
                    the service you have mentioned above. </p>
                </div>
                <div className='card'>
                    <PhoneEnabledRoundedIcon fontSize="large" className='bussicon'/>
                    <h6 className='cardtitle'>Guaranteed Service</h6>
                    <p className='carddesc'>This is a short description elaborating 
                    the service you have mentioned above. </p>
                </div>
                <div className='card'>
                    <GppGoodRoundedIcon fontSize="large" className='bussicon'/>
                    <h6 className='cardtitle'>Trusted Work</h6>
                    <p className='carddesc'>This is a short description elaborating 
                    the service you have mentioned above. </p>
                </div>
              
                
            </div>
            
        
        </div>
    )
}

export default Highlights
