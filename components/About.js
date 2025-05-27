import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const AboutMe = () => {
  const [owner, setOwner] = useState(null);

  useEffect(() => {
    async function fetchOwner() {
      try {
        const res = await fetch('https://localhost:44347/api/Owner/1003');
        const data = await res.json();
        setOwner(data[0]);
      } catch (error) {
        console.error('Failed to fetch owner data:', error);
      }
    }

    fetchOwner();
  }, []);

  if (!owner) return <p>Loading...</p>;

  return (
    <div id="about" className="about-me">
      <div className="skills">
        <div className="container">
          <div className="row align-items-center">
           <div className="col-md-6 text-center">
              <Image
                src={`/images/${owner.ProfilePicture || 'ProfilePicture.jpeg'}`}
                alt={`${owner.FirstName} ${owner.LastName}`}
                width={300}
                height={300}
                className="rounded-circle profile"
              />
            </div>
            <div className="col-md-6">
              <h2>{owner.FirstName} {owner.LastName}</h2>
              <p><strong>{owner.OwnerRole}</strong></p>
              <p>{owner.AboutMe}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
