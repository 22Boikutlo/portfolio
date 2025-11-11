import { useEffect, useState } from 'react'
import { GitHub, Email, LinkedIn, Phone } from '@mui/icons-material';
import Image from 'next/image';
import sending from './assets/sendingEmail.gif';

import { Button } from '@mui/material';

const Contact = () => {
  const [contact, setContact] = useState(null);
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult(<Image src={sending} alt="Sending...." className='sending-gif' />);
    const formData = new FormData(event.target);

    formData.append("access_key", "cb664fc8-02da-4f86-8394-117c2cc8cb6f");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error, could not submit form:", data);
      setResult(data.message);
    }
  };

  useEffect(() => {
    async function fetchContact() {
      try {
        const res = await fetch('https://boikutloportfolioapi.azurewebsites.net/api/Owner/2');
        const data = await res.json();
        setContact(data[0]);
      } catch (error) {
        console.error('Failed to fetch contact data:', error);
        alert('Failed to fetch contact data. Please try again later.');
      }
    }
    fetchContact();
  }, []);
  return (

    <div className='container'>
      <h1 className='skills-title'>Contact Me</h1>
      <div className='contact'>

      {/* Contact links */}
      <div className='contactCol'>
        <div className='contactItem'>
          <h2>Contact Information</h2>
          <p>Interested in working together? Reach out and I’ll respond as soon as possible.</p>
          {contact ? (
            <ul>
              <a href={`mailto:${contact.EmailURL}`} target='blank' rel='noopener nonreferrer'>
                <li> <Email /> Email</li>
              </a>

              <a href={`tel:${contact.PhoneNumber}`} target='blank' rel='noopener nonreferrer' >
                <li> <Phone /> {contact.PhoneNumber } </li>
              </a>

              <a href={contact.GitHub} target='blank' rel='noopener nonreferrer' >
                <li> <GitHub /> GitHub</li>
              </a>

              <a href={contact.LinkedInURL} target='blank' rel='noopener nonreferrer' >
                <li> <LinkedIn /> LinkedIn </li>
              </a>
            </ul>
          ) : (<p>Loading contact info..</p>)}
        </div>
      </div>


      {/* Contact Form */}
      <div className='contactCol'>

        <div className='contactItem'>
          <form onSubmit={onSubmit} id="contact">
            <label>Your Name</label>
            <input type="text" placeholder='Enter your name' name="name" required />

            <label>Email Address</label>
            <input type="email" placeholder='Enter your email address' name="email" required />

            <label>Message</label>
            <textarea placeholder='Enter your message' name="message" rows="4" required></textarea>
            <Button variant="contained" color="dark" href="#contact" type="submit">
              Submit Now
            </Button>
          </form>
          <p>{result}</p>

        </div>
      </div>
    </div>
</div>





  )
}

export default Contact