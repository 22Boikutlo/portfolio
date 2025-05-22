import { Button } from '@mui/material'
import React from 'react'
import { GitHub,Email, LinkedIn, Phone } from '@mui/icons-material'
import {TextField} from '@mui/material'


const Footer = () => {
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
                        <p><Email/> <a href="mailto:boikutlos@gmail.com">Boikutlo Rampora Email</a></p>
                        <p><LinkedIn/><a href="https://www.linkedin.com/in/boikutlo-shaun-rampora-7b7914167" >Boikutlo Rampora LinkedIn</a></p>
                        <p><GitHub/><a href="https://github.com/22Boikutlo/Portfolio-website">Boikutlo Rampora GitHub</a></p>
                        <p><Phone/><a href="Phone:+27 728735988">+27 72 873 5988</a></p>                        
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Footer