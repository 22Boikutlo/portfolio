import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import { GitHub, Email, LinkedIn, Phone } from '@mui/icons-material';

const Footer = () => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const res = await fetch('https://boikutloportfolioapi.azurewebsites.net/api/Owner/1003');
        const data = await res.json();
        setContact(data[0]); // assuming API returns an array and you want the first
      } catch (error) {
        console.error('Failed to fetch contact data:', error);
        alert('Failed to fetch contact data. Please try again later.');
      }
    }
    fetchContact();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted!');
  };

  if (!contact) return <p>Loading...</p>;

  return (
    <div className="footer" id="contact">
      <div className="container">
        <div className="row">
          {/* Contact Form */}
          <div className="col-md-6">
            <h2>Should you have any business or queries</h2>
            <form className="text-field" action={contact.EmailURL} method="POST" onSubmit={handleSubmit}>
              <div className="form-group">
                <TextField
                  id="name"
                  name="name"
                  label="Name"
                  variant="standard"
                  fullWidth
                  required
                />
              </div>
              <div className="form-group">
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  variant="standard"
                  type="email"
                  fullWidth
                  required
                />
              </div>
              <div className="form-group">
                <TextField
                  id="message"
                  name="message"
                  label="Message"
                  variant="standard"
                  multiline
                  rows={4}
                  fullWidth
                  required
                />
              </div>
              <Button variant="contained" className="myBtn" color="primary" type="submit">
                Submit
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="col-md-6">
            <h2>Contact Information</h2>
            <p>Boikutlo Rampora</p>
            <p>
              <Email />{' '}
              <a href={contact.EmailURL} target="_blank" rel="noopener noreferrer">
                Email
              </a>
            </p>
            <p>
              <LinkedIn />{' '}
              <a href={contact.LinkedInURL} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </p>
            <p>
              <GitHub />{' '}
              <a href={contact.GitHub} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </p>
            <p>
              <Phone />{' '}
              <a href={`tel:${contact.Phone}`}>
                {contact.Phone || '+27 72 873 5988'}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
