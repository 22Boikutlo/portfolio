import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const Skills = () => {
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
                <li>C#</li>
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
                <li>React</li>
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
