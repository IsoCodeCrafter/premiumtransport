import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/About.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'TypeScript', level: 75 },
    { name: 'Python', level: 70 },
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header" data-aos="fade-up">
          <h2>Hakkımda</h2>
          <p className="subtitle">Kendimi Tanıtayım</p>
        </div>

        <div className="about-content">
          <div className="about-text" data-aos="fade-right">
            <div className="profile-image">
              <img src="https://via.placeholder.com/300" alt="Profile" />
            </div>
            <div className="text-content">
              <h3>Full Stack Web Developer</h3>
              <p className="lead">
                4 yıllık deneyimli bir Full Stack Web Developer'ım. Modern web teknolojileri
                kullanarak kullanıcı dostu ve ölçeklenebilir uygulamalar geliştiriyorum.
              </p>
              <p>
                Sürekli kendimi geliştirmeye ve yeni teknolojiler öğrenmeye odaklanıyorum.
                Temiz kod yazmayı ve en iyi uygulamaları takip etmeyi önemsiyorum.
                Takım çalışmasına yatkın ve problem çözme becerileri güçlü bir geliştiriciyim.
              </p>
            </div>
          </div>

          <div className="skills-section" data-aos="fade-left">
            <h3>Yeteneklerim</h3>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                      data-aos="width"
                      data-aos-delay={index * 100}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
