import React from 'react'
import './Footer.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';




const Footer = () => {
  return (
    <div className='footer'>
        <div className='footlogo'>
            <h1>Garage</h1>
        </div>
        <div className='links'>
        <div className='socials'>
                <h3>Follow Us</h3>
                <a href='' placeholder=''>
                    <FacebookRoundedIcon color="primary" fontSize='large'/>
                 </a>
                 <a href='' placeholder=''>
                    <InstagramIcon color="secondary" fontSize='large'/>
                 </a>
                 <a href='' placeholder=''>
                    <TwitterIcon color="primary" fontSize='large'/>
                 </a>
            </div>
            <div className='menulinks'>
                <h3>Menu</h3>
                <a href='' placeholder=''>Home</a>
                <a href='' placeholder=''>Services</a>
                <a href='' placeholder=''>About Us</a>
                <a href='' placeholder=''>Contact</a>


            </div>
            <div className='contact'>
                <h3>Contact Us</h3>
                <p>+254743713416</p>
                <p>reinhardy.odhiambo@gmail.com</p>

            </div>
            

        </div>

    </div>
  )
}

export default Footer