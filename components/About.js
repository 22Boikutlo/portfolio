import React, { useEffect, useState } from 'react'

const Hero = () => {
  const [owner, setOwner] = useState();
    async function fetchOwner() {
      try {
        const res = await fetch('https://boikutloportfolioapi.azurewebsites.net/api/Owner/2');
        const data = await res.json();
        setOwner(data[0]);
      } catch (error) {
        alert('Failed to fetch owner data. Please try again later.');
        // Log the error for debugging
        console.error('Failed to fetch owner data:', error);
      }
    }
    useEffect(() => {
  
      fetchOwner();
    }, []);
    if (!owner) return <p>Loading owner information...Refresh the page to accelerate the loading of  owner information...</p>;
  return (
    <div className='hero' id='about'>
      <div className='heroContainer'>
        <div className='heroText'>
          <h1>{owner.FirstName} {owner.MiddleName} {owner.LastName}</h1>
          
              <h2><strong>{owner.OwnerRole}</strong></h2>
              <p>{owner.AboutMe}</p>
        </div>
      </div>
    </div>
  )
}

export default Hero