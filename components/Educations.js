import React, { useEffect, useState } from 'react';
import SchoolIcon from '@mui/icons-material/School';

const Education = () => {
  const [educationList, setEducationList] = useState([]);
  const [expandedIndexes, setExpandedIndexes] = useState([]);

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

  const toggleExpand = (index) => {
    setExpandedIndexes((prev) =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const getTruncated = (text, limit = 150) =>
    text.length > limit ? text.slice(0, limit) + '...' : text;

  return (
    <div id="education" className="education-timeline">
      <div className="container">
        <h1><SchoolIcon /> Education</h1>
        <div className="timeline">
          {educationList.map((edu, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h2>{edu.SchoolName}</h2>
                <p><strong>{edu.CourseName}</strong> ({edu.Year})</p>
                <p>
                  <strong>Subjects:</strong>{' '}
                  {expandedIndexes.includes(index)
                    ? edu.Subjects
                    : getTruncated(edu.Subjects || '')}
                </p>
                {edu.Subjects?.length > 150 && (
                  <button
                    onClick={() => toggleExpand(index)}
                    className="toggle-btn"
                  >
                    {expandedIndexes.includes(index) ? 'Show Less' : 'Show More'}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
