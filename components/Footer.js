import { Button } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
                <h2>Should you have any business or queries</h2>
                <form>
                    <div className='form-group'>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>               
                </form>
                <Button variant="contained" className='myBtn' color="primary">Submit</Button>
        </div>
        
    </div> 
    </>
  )
}

export default Footer