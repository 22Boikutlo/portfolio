import { Button } from '@mui/material'
import React from 'react'
import { GitHub,Email, LinkedIn, Phone } from '@mui/icons-material'
import {TextField} from '@mui/material'
import { useState, useEffect } from 'react'


const Footer = () => {
    const [contact,setContact] = useState(null);
    useEffect(() => {
        async function fetchContact() {
            try {
                const res = await fetch('https://boikutloportfolioapi.azurewebsites.net/Owner/1003');
                const data = await res.json();
                setContact(data[0]); // assuming API returns an array and you want the first
            } catch (error) {
                alert('Failed to fetch contact data. Please try again later.');
                // Optionally log the error for debugging
                console.error('Failed to fetch contact data:');
            }
        }
        fetchContact();
    }, []);
    if (!contact) return <p>Loading...</p>;
    const handleSubmit = (event) => {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        if(name === "")
            {
                alert("Please enter your name");
                return;
            }
        if(email === "")
            {
                alert("Please enter your email");
                return;
            }
        if(message === "")
            {
                alert("Please enter your message");
                return;
            }            
        alert("Form submitted successfully!")
        ;
    }
  return (
    <>
        <div className='footer'id='contact'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        
                        <h2>Should you have any business or queries</h2>
                        <form className='text-field'>
                            <div className='form-group'>                               
                                <TextField id="name" label="Name"   variant="standard"  />
                            </div>
                            <div className='form-group'>                              
                                <TextField id="email" label="Email"  variant="standard" />
                            </div>
                            <div className='form-group'>
                                <TextField id="message" label="Message" variant="standard" rows={4} multiline/>                                
                            </div>               
                        </form>
                        <Button variant="contained" className='myBtn' color="primary" onClick={handleSubmit}>Submit</Button>
                    </div>
                    <div className='col-md-6'>
                        <h2>Contact Information</h2>
                        <p>Boikutlo Rampora</p>
                        <p><Email/> <a href={contact.EmailURL}>Boikutlo Rampora Email</a></p>
                        <p><LinkedIn/><a href={contact.LinkedInURL} >Boikutlo Rampora LinkedIn</a></p>
                        <p><GitHub/><a href={contact.GitHub}>Boikutlo Rampora GitHub</a></p>
                        <p><Phone/><a href={contact.Phone}>+27 72 873 5988</a></p>                        
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Footer