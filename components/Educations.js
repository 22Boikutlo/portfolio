import React, { useEffect, useState } from 'react';

const Education = () => {
  const [educationList, setEducationList] = useState([]);

  useEffect(() => {
    async function fetchEducation() {
      try {
        const res = await fetch('https://boikutloportfolioapi.azurewebsites.net/api/Education');
        const data = await res.json();
        setEducationList(data || []);
      } catch (err) {
        console.error('Failed to fetch education data:', err);
        alert('Failed to fetch education data.');
      }
    }
    fetchEducation();
  }, []);
  return (
    <div id="education" className="education-timeline">
      <div className="container">
        <h1 className='skills-title'>Education</h1>
        <div className="timeline">
          {educationList.map((edu, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h2>{edu.SchoolName}</h2>
                <p><strong>{edu.CourseName}</strong> ({edu.Year})</p>
                <p>
                  <strong>Subjects:</strong>{ edu.Subjects}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
