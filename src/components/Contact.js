import React, { useState } from 'react'
import Header from './Header'
import './Contact.css'
import validate from './Validateinfo';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

const Contact = () => {

  const [inputs,setInputs] =useState({});
  const [errors ,setErrors] = useState({});


  const update = (e) =>{
    const {name,value} = e.target
    setInputs(values => ({...values ,[name] :value}))
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    setErrors(validate(inputs)); 
    
  }
  
  return (
    <div className='contact'>
      <div className='contactbanner'>
            <Header/>
            <h3 className='bannertitle'> Contact  <span className='spancolor' >Us</span></h3>

        </div>
        <div className='contactform'>
          <div className='contactdetails'>
            <h3> Contact</h3>
            <div className='socialtext'>
              <h3>Phone</h3>
              <p>+254743713416</p>
              <h3>Working Hours</h3>
              <p>Mon - Friday : 8am - 7pm</p>
              <p>Sartuday : 8am - 5pm</p>
              <p>Closed on Sunday</p>
              <div className='socialscontact'>
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


            </div>
          </div>
          <div className='formarea'>
            <h3> Send Us a Message</h3>
            <form className='form' onSubmit={handleSubmit}>
              <label className='label' for='username'>Name</label>
                <input
                id='username'
                className='forminput'
                type='text'
                name='username'
                value={inputs.username}
                placeholder='Enter Your Name'
                onChange={update}
                />
                {errors.username && <p className='errormssg'>{errors.username}</p>}
                <label className='label' for='email'>Email</label>
                <input
                id='Email'
                className='forminput'
                type='text'
                name='email'
                value={inputs.email}
                placeholder='Enter Your Email'
                onChange={update}
                />
              {errors.email && <p className='errormssg' >{errors.email}</p>}
              <label className='label' for='message' >Message </label>
                <textarea
                className='textinput'
                id='message'
                required
                name='message'
                placeholder='Message'
                value={inputs.message}
                onChange={update}

                />
              {errors.  message && <p className='errormssg'>{errors.message}</p>}
              <button className='contactbtn' type='submit'> Send</button>
            </form>
            

          </div>
          


        </div>

    </div>
  )
}

export default Contact