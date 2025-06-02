import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import Link from 'next/link';


const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    async function fetchSkills() {
      try {
        const res = await fetch('https://boikutloportfolioapi.azurewebsites.net/api/Skill');
        const data = await res.json();
        setSkills({first: data[0], second: data[1], third: data[2], 
          fourth: data[3], fifth: data[4], sixth: data[5], seventh: data[6], eighth: data[7], ninth: data[8], tenth: data[9], eleventh: data[10], twelfth: data[11], thirteenth: data[12], fourteenth: data[13], fifteenth: data[14], sixteenth: data[15], seventeenth: data[16], eighteenth: data[17], nineteenth: data[18], twentieth: data[19], twentyfirst: data[20], twentysecond: data[21], twentythird: data[22], twentyfourth: data[23], twentyfifth: data[24], twentysixth: data[25], twentyseventh: data[26], twentyeighth: data[27], twentyninth: data[28], thirtieth: data[29]});
      } catch (error) {
        alert('Failed to fetch skills data. Please try again later.');
        // Optionally log the error for debugging
        console.error('Failed to fetch skills data:');
      }
    }
    fetchSkills();
  }, []);
  return (
    <div id="skills" className="skills">
      <div className="container">
        <h1>Skills</h1>
        <Link href="/add-skill">
          <Button variant="contained" className='myBtn' color="primary"  >
            Add Skill
          </Button>        
      </Link>

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
          <SwiperSlide>
            <div className="skills-item">
              <h2>Languages</h2>
              <ul>
                <li>{skills.first?.SkillName}</li>
                <li>{skills.forth?.SkillName}</li>
                <li>{skills.third?.SkillName}</li>
                <li>{skills.fifth?.SkillName}</li>
                <li>{skills.sixth?.SkillName}</li>
              </ul>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="skills-item">
              <h2>Frameworks</h2>
              <ul>
                <li>{skills.seventh?.SkillName}</li>
                <li>{skills.eighth?.SkillName}</li>
                <li>{skills.ninth?.SkillName}</li>
                <li>{skills.tenth?.SkillName}</li>
              </ul>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="skills-item">
              <h2>Databases</h2>
              <ul>
                <li>{skills.eleventh?.SkillName}</li>
                <li>MySQL</li>
              </ul>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="skills-item">
              <h2>Tools & Technologies</h2>
              <ul>
                <li>{skills.twelfth?.SkillName}</li>
                <li>Docker</li>
                <li>{skills.thirteenth?.SkillName}</li>
              </ul>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="skills-item">
              <h2>Methodologies</h2>
              <ul>
                <li>{skills.fourteenth?.SkillName}</li>
                <li>{skills.fifteenth?.SkillName}</li>
              </ul>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="skills-item">
              <h2>Operating Systems</h2>
              <ul>
                <li>{skills.sixteenth?.SkillName}</li>
                <li>{skills.seventeenth?.SkillName}</li>
              </ul>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="skills-item">
              <h2>Dev Environments</h2>
              <ul>
                <li>{skills.eighteenth?.SkillName}</li>
                <li>{skills.nineteenth?.SkillName}</li>
                <li>{skills.twentieth?.SkillName}</li>
                <li>{skills.twentyfirst?.SkillName}</li>
                <li>{skills.twentysecond?.SkillName} & {skills.twentythird?.SkillName}</li>
                <li>{skills.twentyfourth?.SkillName} & {skills.twentyfifth?.SkillName}</li>
                <li>Notepad++</li>
              </ul>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="skills-item">
              <h2>Soft Skills</h2>
              <ul>
                <li>Problem Solving</li>
                <li>Teamwork</li>
                <li>Communication</li>
                <li>Adaptability</li>
              </ul>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="skills-item">
              <h2>Interests</h2>
              <ul>
                <li>Software Development</li>
                <li>Cloud Computing</li>
                <li>Artificial Intelligence</li>
              </ul>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="skills-item">
              <h2>Certifications</h2>
              <ul>
                <li>Azure Fundamentals (LinkedIn)</li>
                <li>Azure Admin Essentials (LinkedIn)</li>
              </ul>
            </div>
          </SwiperSlide>
    
        </Swiper>
      </div>
    </div>
  );
};

export default Skills;
