import { Button, colors } from '@mui/material'
import React from 'react'
import "../../public/styles/global/styles.css"
import "../../public/styles/bootstrap/bootstrap.grid.css";
import Footer from '@/components/Footer';

const projects = () => {
  return (  
    <>
    <div>
        <div className='projects'>  
            <div className='container'> 
                <h1>Projects</h1>
                <p>Welcome to the projects page!</p>
                <div className='row'>
                    <div className='col-md-4'>                   
                        <div className='project-item'>
                            <h2>Store Management</h2>   
                            <p>First Windows Forms application.Sql and C#</p>
                            <Button variant="contained" color="primary" href="https://github.com/22Boikutlo/Portfolio-website">View Project</Button>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='project-item'>
                            <h2>Plumbing Website</h2>
                            <p>LPS website showcasing their work and contact info.</p>
                            <Button variant="contained" color="primary" href="https://github.com/22Boikutlo/Portfolio-website">View Project</Button>        
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='project-item'>
                            <h2>Portfolio Website</h2>   
                            <p>showcasing my skills and contact information</p>
                            <Button variant="contained" color="primary" href="https://github.com/22Boikutlo/Portfolio-website">View Project</Button>
                        </div>
                    </div>    
                </div>

            </div>     
        </div>

        <div className='contact'>
            <p>Boikutlo Rampora</p>
            <p>Contact: <a href="mailto:boikutlo.rampora@fananetworks.co.za">Boikutlo Rampora Email</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/boikutlo-shaun-rampora-7b7914167">Boikutlo Rampora LinkedIn</a></p>
            <p>GitHub: <a href="https://github.com/22Boikutlo/Portfolio-website">Boikutlo Rampora GitHub</a></p>
        </div>
        <Footer/>  
    </div>
    </>    
  )
}

export default projects