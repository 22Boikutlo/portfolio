import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Button } from '@mui/material';
import Link from 'next/link';
import Title from './Title';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState(null);

  async function fetchSkills() {
    try {
      const res = await fetch('https://boikutloportfolioapi.azurewebsites.net/api/Skill');
      const data = await res.json();
      setSkills(data);
    } catch (err) {
      console.error('Failed to fetch skills data:', err);
      setError('Failed to fetch skills. Please try again later.');
    }
  }
  useEffect(() => {
    fetchSkills();
  }, []);

  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (skills.length === 0) return <p>Loading skills...</p>;

  // Optional: Group skills into categories based on index or API structure
  const groupedSkills = {
    Languages: skills.slice(0, 5),
    Frameworks: skills.slice(5, 9),
    Databases: skills.slice(9, 10),
    Tools: skills.slice(10, 12),
    Methodologies: skills.slice(12, 15),
    OS: skills.slice(15, 17),
    Environments: skills.slice(17, 25),
    Soft: ['Problem Solving', 'Teamwork', 'Communication', 'Adaptability'],
    Interests: ['Software Development', 'Cloud Computing', 'Artificial Intelligence'],
    Certifications: ['Azure Fundamentals (LinkedIn)', 'Git Essentials (LinkedIn)'],
  };

  return (
    <div id="skills" className="skills">
      <div className="container">
        <Title title='Skills' subTitle='I have listed my competencies and I have classed accordingly' />
        

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {Object.entries(groupedSkills).map(([category, items], index) => (
            <SwiperSlide key={index}>
              <div className="skills-item">
                <h2>{category}</h2>
                <ul>
                  {items.map((item, idx) => (
                    <li key={idx}>{typeof item === 'string' ? item : item.SkillName}</li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Skills;
