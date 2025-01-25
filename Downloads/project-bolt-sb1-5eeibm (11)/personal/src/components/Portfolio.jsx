import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Portfolio.css';

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-ticaret Platformu',
      description: 'Modern ve kullanıcı dostu bir e-ticaret platformu',
      image: 'https://via.placeholder.com/400x300',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      id: 2,
      title: 'Mobil Uygulama',
      description: 'Cross-platform mobil uygulama',
      image: 'https://via.placeholder.com/400x300',
      category: 'mobile',
      technologies: ['React Native', 'Firebase'],
      link: '#'
    },
    {
      id: 3,
      title: 'UI/UX Tasarım',
      description: 'Modern arayüz tasarımı',
      image: 'https://via.placeholder.com/400x300',
      category: 'design',
      technologies: ['Figma', 'Adobe XD'],
      link: '#'
    },
    {
      id: 4,
      title: 'Blog Platformu',
      description: 'Kişisel blog platformu',
      image: 'https://via.placeholder.com/400x300',
      category: 'web',
      technologies: ['Next.js', 'Tailwind CSS'],
      link: '#'
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <div className="section-header" data-aos="fade-up">
          <h2>Portföy</h2>
          <p className="subtitle">Son Projelerim</p>
        </div>

        <div className="filter-buttons" data-aos="fade-up">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Tümü
          </button>
          <button
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            Web
          </button>
          <button
            className={`filter-btn ${filter === 'mobile' ? 'active' : ''}`}
            onClick={() => setFilter('mobile')}
          >
            Mobil
          </button>
          <button
            className={`filter-btn ${filter === 'design' ? 'active' : ''}`}
            onClick={() => setFilter('design')}
          >
            UI/UX
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={project.id * 100}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.link} className="project-link">
                    Detaylar
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
