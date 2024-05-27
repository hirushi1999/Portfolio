import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import EmailIcon from "./assets/gmail.png"
import GitIcon from "./assets/github.png"
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
  return (
    <section className='contact-container'>
        <h5>Contact Me</h5>

        <div className='contact-content'>
            <div style={{ flex: 1 }}>
                <ContactInfoCard iconUrl={ EmailIcon } text="hirushinethmini1999@gmail.com" />
                <ContactInfoCard iconUrl={ GitIcon } text="https://github.com/hirushi1999" />
            </div>
            <div style={{ flex: 1 }}>
                <ContactForm />
            </div>
        </div>
    </section>
  )
}

export default ContactMe