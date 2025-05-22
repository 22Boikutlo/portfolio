import { Sick } from '@mui/icons-material'
import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/a11y'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'


const Skills = () => {
    const getSlidesView = () => {
        if (typeof window !== "undefined") {
        // Client-side-only code
        if (window.innerWidth < 768) {
            return 1;
        } else if (window.innerWidth < 1024) {
            return 2;
        } else {
            return 3;
        }
    }
        
    }
  return (
    <>
        <div id='skills'>
                <div className='skills'>
                    <div className='container'>
                        <h1>Skills</h1>
                    <Swiper
                           // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={getSlidesView()}
                        navigation
                        pagination={{ clickable: true }}
                        //scrollbar={{ draggable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        >

                        <SwiperSlide>
                            <div className='skills-item'>
                                <h2>Programming Languages</h2>
                                <ul>
                                    <li><a src="../public/images.c#.png " ></a>C#</li>
                                    <li>Python</li>
                                    <li>JavaScript</li>
                                    <li>HTML/CSS</li>
                                </ul>
                            </div>
                        </SwiperSlide>                    
                        <SwiperSlide>
                            <div className='skills-item'>
                                <h2>Frameworks</h2>
                                <ul>
                                    <li>React</li>
                                    <li>Node.js</li>
                                    <li>Next.js</li>
                                    <li>ASP.NET Core & MVC</li>
                                    <li>Entity Framework</li>
                                </ul>                            
                            </div> 
                        </SwiperSlide>
                        <SwiperSlide>  
                            <div className='skills-item'>
                                <h2>Databases</h2>
                                <ul>
                                    <li>MS SQL</li>
                                    <li>MySQL</li>
                                </ul>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='skills-item'>
                                <h2>Tools & Technologies</h2>
                                <ul>
                                    <li>Git</li>
                                    <li>Docker</li>
                                    <li>AZURE</li>
                                </ul>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='skills-item'>
                                <h2>Development Methodologies</h2>
                                <ul>
                                    <li>Agile</li>
                                    <li>Scrum</li>
                                    <li>Waterfall</li>
                                </ul>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='skills-item'>
                                <h2>Operating Systems</h2>
                                <ul>
                                    <li>Windows</li>
                                    <li>Linux</li>
                                </ul>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>                            
                                <div className='skills-item'>
                                    <h2>Development Environment</h2>
                                    <ul>
                                        <li>Visual Studio</li>
                                        <li>Visual Studio Code</li>
                                        <li>MS SQL Server Management Studio</li>
                                        <li>GitHub</li>                                
                                        <li>Microsoft Teams</li>
                                        <li>Zoom</li>
                                        <li>Figma</li>
                                        <li>Canva</li>
                                        <li>Notepad++</li>     
                                    </ul>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide>
                                <div className='skills-item'> 
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
                                <div className='skills-item'>
                                    <h2>Interests</h2>
                                    <ul>
                                        <li>Software Development</li>
                                        <li>Cloud Computing</li>
                                        <li>Artificial Intelligence</li>
                                    </ul>
                                </div>
                        </SwiperSlide>
                        
                       <SwiperSlide>
                                <div className='skills-item'>
                                    <h2>Certifications</h2>
                                    <ul>
                                        <li>LinkedIn Certified: Azure Fundamentals</li>
                                        <li>LinkedIn Certified: Azure Administration Essential Training</li>
                                    </ul>
                                </div>
                        </SwiperSlide>
                </Swiper>
                </div>    
            </div>  
        </div>
    </>
  )
}

export default Skills