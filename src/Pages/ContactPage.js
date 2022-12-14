import React from 'react'
import {InnerLayout, MainLayout} from '../styles/Layouts'
import Title from '../Components/Title'
import styled from "styled-components"
import PrimaryButton from '../Components/PrimaryButton'
import ContactItem from '../Components/ContactItem'
import {Phone, Email} from '@mui/icons-material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
const ContactPage = () => {
  return (
    <MainLayout>
      <Title title={'Contact'} span={'Contact'}/>
      <ContactPageStyled>
        <InnerLayout className='contact-section'>
        <div className='left-content'>
          <div className='contact-title'>
              <h4>Get In Touch</h4>
          </div>
          <form className='form'>
              <div className='form-field'>
                <label htmlFor='name'>Enter your name</label>
                <input type="text" id='name'/>
              </div>
              <div className='form-field'>
                <label htmlFor='email'>Enter your email</label>
                <input type="email" id='email' />
              </div>
              <div className='form-field'>
                <label htmlFor='subject'>Enter your subject</label>
                <input type="text" id='subject'/>
              </div>
              <div className='form-field'>
                <label htmlFor='text-area'>Enter your Message</label>
                <textarea name='textarea' id='textarea' cols='30' rows={'10'}></textarea>
              </div>
              <div className='form-field f-button'>
                <PrimaryButton title={'Send Email'}/>
              </div>
          </form>
        </div>
        <div className='right-content'>
            <ContactItem title={'Phone'} icon={<Phone/>} cont1={'+66-789675637'} cont2={'07663520283'}/>
            <ContactItem title={'Email'} icon={<Email/>}  cont1={'loremipsum@gmail.com'} cont2={'info.lorem.ipsum@gmail.com'}/>
            <ContactItem title={'Address'} icon={<LocationOnIcon/>}  cont1={'27 Aldrich Road, London, England'} cont2={'United Kingdom'}/>
        </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  )
}

export default ContactPage
const ContactPageStyled = styled.div`
  .contact-section{
    display:grid;
    grid-template-columns:repeat(2,1fr);
    grid-column-gap:2rem;
    @media screen and (max-width: 978px){
       grid-template-columns: repeat(1, 1fr);
       .f-button{
        margin-bottom:3rem;
       }
        }
  }
  .contact-title{
    h4{
      color:var(--white-color);
      padding: 1rem 0;
      font-size:1.8rem;
    }
  }
  .form{
    width: 100%;
    @media screen and (max-width: 502px){
          width: 100%;
     }
  }
  .form-field{
    margin-top:2rem;
    position:relative;
    width: 100%;
    label{
      position:absolute;
      left: 20px;
      top: -19px;
      display:inline-block;
      background-color:var(--background-dark-color);
      padding:0 .5rem;
      color:inherit;
    }
    input{
      border:1px solid var(--border-color);
      outline:none;
      background:transparent;
      height: 50px;
      padding:0 15px;
      width: 100%;
      color:inherit;
    }
    textarea{
      background-color:transparent;
      border:1px solid var(--border-color);
      outline:none;
      color:inherit;
      width: 100%;
      padding:.8rem 1rem;
        
    }
  }
  .right-content{
    display:grid;
    grid-template-columns:repeat(1, 1fr);
    @media screen and (max-width: 502px){
     width: 70%;
        }
  }
`;  
