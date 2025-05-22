import { Diversity1 } from '@mui/icons-material'
import React from 'react'
import SchoolIcon from '@mui/icons-material/School';
import Image from '../public/images/ufslogo.png'

const Education = () => {
    console.log(Image);
  return (
    <>
        <div id='education'>
            
            <div className='projects'>
            <div className='container'>
                <h1><SchoolIcon/> Education</h1>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='education-item'>
                            <h2>University of the Free State</h2>
                            <p>Bachelor of Science in Computer Information Systems</p>
                            <p>2021 - 2024</p>
                            <p>Relevant Courses: Software Development, Database Management, Web Development</p>                            
                        </div>
                    </div>
                   
                    <div className='col-md-6'>
                        <div className='education-item'>
                            <h2>Masemola High School</h2>
                            <p>Matriculation Certificate</p>
                            <p>2017</p>
                            <p>Subjects: Mathematics, Physical Science, Life Science, Agricultural</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Education