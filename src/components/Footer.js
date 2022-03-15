import  FacebookRounded  from '@mui/icons-material/FacebookRounded'
import  Twitter  from '@mui/icons-material/Twitter'
import  Instagram  from '@mui/icons-material/Instagram'
import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import WhatsappRounded  from '@mui/icons-material/WhatsappRounded'
import  Mail from '@mui/icons-material/Mail'
import Phone from '@mui/icons-material/Phone'
import Map from '@mui/icons-material/Map'




const Footer = () => {
  return (
    <div className='footer'>
        <div className='footerlist'>
            <div className='footerlogo'>
                <h3 className='text-5xl font-bold '>MyStore</h3>

            </div>
            <div className='menulinks'>
                <h3>Quick Links </h3>
                <p> Home</p>
                <p>  Services</p>
                <p> About Us </p>
                
                

            </div>
            <div className='contact'>
                <h3>Stay In Touch</h3>
                <p> <Mail/> info@mystore.com</p>
                <p> <Phone/> +254743713416</p>
                <p> <Map/> Nairobi , Kenya</p>

                
                


            </div>

        </div>
        <div className='socials'>
            <FacebookRounded fontSize='large' className='socialinks'/>
            <Instagram fontSize='large' className='socialinks'/>
            <Twitter fontSize='large' className='socialinks'/>
            <WhatsappRounded fontSize='large' className='socialinks'/>
        </div>
    </div>
  )
}

export default Footer