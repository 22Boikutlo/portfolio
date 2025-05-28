import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import UfsLogo from '../public/images/ufslogo.png';
import Image from 'next/image';
import { useEffect,useState } from 'react';

const Education = () => {
    const [education, setEducation] = useState(null);
    useEffect(() => {
        async function fetchEducation() {
            try {
                const res = await fetch('https://boikutloportfolioapi.azurewebsites.net/api/Education');
                const data = await res.json();
                setEducation({ first: data[0], second: data[1] });
                // assuming API returns an array and you want the first and second entries
            } catch (error) {
              alert('Failed to fetch education data. Please try again later.');
                console.error('Failed to fetch education data:');
            }
        }
        fetchEducation();
    }, []);
    if (!education) return <p>Loading...</p>;

  return (
    <div id="education" className="education">
      <div className="container">
        <h1><SchoolIcon /> Education</h1>

        <div className="row">
          <div className="col-md-6">
            <article className="education-item">
              
              <h2>{education.first?.SchoolName}</h2>
              <p>{education.first?.CourseName}</p>
              <p>{education.first?.Year}</p>
              <p><strong>Relevant Courses:</strong> {education.first?.Subjects}</p>
            </article>
          </div>

          <div className="col-md-6">
            <article className="education-item">
              <h2>{education.second?.SchoolName}</h2>
              <p>{education.second?.CourseName}</p>
              <p>{education.second?.Year}</p>
              <p><strong>Relevant Subjects:</strong> {education.second?.Subjects}</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
