import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useEffect, useState } from 'react';

const Skills = () => {
  const { skills, setSkills } = useState(null);
  useEffect(() => {
    async function fetchSkills() {
      try {
        const res = await fetch('https://localhost:44347/api/Skills');
        const data = await res.json();
        setSkills({ first: data[0], second: data[1], third: data[2], fourth: data[3], fifth: data[4], sixth: data[5], seventh: data[6], eighth: data[7], ninth: data[8], tenth: data[9], eleventh: data[10], twelfth: data[11], thirteenth: data[12], fourteenth: data[13], fifteenth: data[14] });
      } catch (error) {
        console.error('Failed to fetch skills data:', error);
      }
    }
    fetchSkills();
  }, []);
  return (
    <div id="skills" className="skills">
      <div className="container">
        <h1>Skills</h1>

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
              <h2>Programming Languages</h2>
              <ul>
                <li>React</li>
                <li>Python</li>
                <li>JavaScript</li>
                <li>HTML/CSS</li>
              </ul>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="skills-item">
              <h2>Frameworks</h2>
              <ul>
                <li>{skills.first?.}</li>
                <li>Node.js</li>
                <li>Next.js</li>
                <li>ASP.NET Core</li>
                <li>Entity Framework</li>
              </ul>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="skills-item">
              <h2>Databases</h2>
              <ul>
                <li>MS SQL</li>
                <li>MySQL</li>
              </ul>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="skills-item">
              <h2>Tools & Technologies</h2>
              <ul>
                <li>Git</li>
                <li>Docker</li>
                <li>Azure</li>
              </ul>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="skills-item">
              <h2>Methodologies</h2>
              <ul>
                <li>Agile</li>
                <li>Scrum</li>
                <li>Waterfall</li>
              </ul>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="skills-item">
              <h2>Operating Systems</h2>
              <ul>
                <li>Windows</li>
                <li>Linux</li>
              </ul>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="skills-item">
              <h2>Dev Environments</h2>
              <ul>
                <li>Visual Studio</li>
                <li>VS Code</li>
                <li>SSMS</li>
                <li>GitHub</li>
                <li>Teams, Zoom</li>
                <li>Figma, Canva</li>
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
