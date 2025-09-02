import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const AboutMe = () => {
  const [owner, setOwner] = useState(null);

  async function fetchOwner() {
    try {
      const res = await fetch('https://boikutloportfolioapi.azurewebsites.net/api/Owner/1003');
      const data = await res.json();
      setOwner(data[0]);
    } catch (error) {
      alert('Failed to fetch owner data. Please try again later.');
      // Optionally log the error for debugging
      console.error('Failed to fetch owner data:');
    }
  }
  useEffect(() => {

    fetchOwner();
  }, []);

  if (!owner) return <p>Loading...</p>;

  return (
    <div id="about" className="about-me">     
        <div className="container">
          <div className="row">
           <div className="col-md-6">
             
            </div>
            <div className="col-md-6">
              <h2>{owner.FirstName} {owner.LastName}</h2>
              <p><strong>{owner.OwnerRole}</strong></p>
              <p>{owner.AboutMe}</p>
            </div>
          </div>
        </div>
     
    </div>
  );
};

export default AboutMe;
