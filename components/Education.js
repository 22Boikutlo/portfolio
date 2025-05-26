import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import UfsLogo from '../public/images/ufslogo.png';
import Image from 'next/image';

const Education = () => {
  return (
    <div id="education" className="education">
      <div className="container">
        <h1><SchoolIcon /> Education</h1>

        <div className="row">
          <div className="col-md-6">
            <article className="education-item">
              {/* @*<Image src={UfsLogo} alt="UFS Logo" width={80} height={80} />@* */}
              <h2>University of the Free State</h2>
              <p>Bachelor of Science in Computer Information Systems</p>
              <p>2021 - 2024</p>
              <p><strong>Relevant Courses:</strong> Software Development, Database Management, Web Development</p>
            </article>
          </div>

          <div className="col-md-6">
            <article className="education-item">
              <h2>Masemola High School</h2>
              <p>Matriculation Certificate</p>
              <p>2017</p>
              <p><strong>Subjects:</strong> Mathematics, Physical Science, Life Science, Agriculture</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
