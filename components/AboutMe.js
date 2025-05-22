import React from 'react'
import Image from '../public/images/ProfilePicture.jpeg'

const AboutMe = () => {
  console.log(Image);
  return (
    <>
        <div id = 'about'>
          <div className='about-me'>
              <div className='skills'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6'>
                    <img src={Image.src} alt='Boikutlo' className='profile' />
                </div>
                <div className='col-md-6'>
                  <div className='about-me'>
                    <h2>Boikutlo Shaun Rampora</h2>
                    <p>Software Developer</p>
                    <p>Welcome to my portfolio website! My name is Boikutlo Rampora, and I am a passionate software developer with a strong interest in creating innovative solutions. I have experience in various programming languages and frameworks, and I am always eager to learn new technologies.</p>
                    <p>In my free time, I enjoy working on personal projects, contributing to open-source initiatives, and exploring the latest trends in technology. I believe in the power of collaboration and continuous learning, and I am excited to connect with like-minded individuals.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>    
    </>
  )
}

export default AboutMe