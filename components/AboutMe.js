import React from 'react';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <div id="about" className="about-me">
      <div className="skills">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <Image
                src="/images/ProfilePicture.jpeg"
                alt="Boikutlo Shaun Rampora"
                width={300}
                height={300}
                className="rounded-circle profile"
              />
            </div>
            <div className="col-md-6">
              <h2>Boikutlo Shaun Rampora</h2>
              <p><strong>Software Developer</strong></p>
              <p>
                Welcome to my portfolio website! My name is Boikutlo Rampora, and I am a passionate software developer with a strong interest in creating innovative solutions. 
                I have experience in various programming languages and frameworks, and I am always eager to learn new technologies.
              </p>
              <p>
                In my free time, I enjoy working on personal projects, contributing to open-source initiatives, and exploring the latest trends in technology. 
                I believe in the power of collaboration and continuous learning, and I am excited to connect with like-minded individuals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
