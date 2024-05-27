import React, {useState} from 'react'
import './ContactForm.css'
import emailjs from 'emailjs-com';

const ContactForm = () => {

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_xdi5m9l', 'template_bwkvp2m', formData, 'X746I-wG2woExFgRN')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          message: ''
        });
        
      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to send message.');
      });
  };

  return (
    <div className='contact-form-content'>
        <form onSubmit={handleSubmit}>
            <div className='name-container'>
                <input type='text' name="firstname" placeholder='First Name' value={formData.firstname} onChange={handleChange} />
                <input type='text' name="lastname" placeholder='Last Name' value={formData.lastname} onChange={handleChange}  />
            </div>

            <input type='text' name="email" placeholder='Email' value={formData.email} onChange={handleChange}  />
            <textarea type='text' name='message' placeholder='Message' rows={3} value={formData.message} onChange={handleChange} />

            <button>SEND</button>
        </form>
    </div>
  )
}

export default ContactForm