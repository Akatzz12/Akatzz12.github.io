import React from 'react'
import './Home.css'

const Home = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: [
        "Artificial Intelligence", "Machine Learning", "Deep Learning", 
        "Computer Vision", "Natural Language Processing", "Large Language Models (LLMs)",
        "Generative AI", "Transformer Networks", "Reinforcement Learning"
      ]
    },
    {
      title: "Programming & Frameworks",
      skills: [
        "Python", "TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "OpenAI"
      ]
    },
    {
      title: "Research & Analysis",
      skills: [
        "Research", "Statistical Analysis", "Data Visualization", "Model Fine-Tuning & Optimization",
        "Data Preprocessing & Annotation", "Prompt Engineering"
      ]
    },
    {
      title: "Healthcare AI",
      skills: [
        "Medical Data Analysis", "Clinical Decision Support Systems", "Medical Imaging AI"
      ]
    }
  ]

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Kapileshwor Ray Amat</h1>
            <h2 className="hero-subtitle">AI Engineer & Software Developer</h2>
            <p className="hero-description">
              Passionate about leveraging artificial intelligence and machine learning to solve complex problems and drive innovation in research and industry applications.
            </p>
          </div>
        </div>
      </section>

      <section className="about-skills">
        <div className="container">
          <div className="about-skills-grid">
            <div className="about-section">
              <h2 className="section-title">About Me</h2>
              
              <div className="about-content">
                <div className="about-text">
                  <p>
                    Currently, I serve as a <strong>Doctoral Graduate Research Assistant</strong> at North Dakota State University, where my focus lies in advanced AI and machine learning research. My work supports projects that merge theoretical research with practical applications, particularly in the field of healthcare. This role has allowed me to deepen my skills in LLMs, responsible AI, and interdisciplinary research collaborations.
                  </p>
                  
              
                  
                </div>
              </div>
            </div>

            <div className="skills-section">
              <h2 className="section-title">Skills & Expertise</h2>
              
              <div className="skills-single-card">
                <div className="all-skills">
                  <div className="skills-list">
                    {skillCategories.flatMap(category => category.skills).map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="experience">
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          
          <div className="experience-timeline">
            <div className="experience-item">
              <div className="experience-header">
                <h3 className="job-title">Doctoral Graduate Research Assistant</h3>
                <h4 className="company">North Dakota State University</h4>
                <div className="job-details">
                  <span className="duration">Jan 2025 - Present</span>
                  <span className="location">Fargo, ND</span>
                </div>
              </div>
              <div className="job-description">
                <p>
                  Spearheading cutting-edge research in Large Language Models (LLMs) and Generative AI, with a specific emphasis on their application in healthcare. My work involves developing and implementing AI solutions that are not only innovative but also adhere to responsible AI principles, ensuring ethical and safe deployment in medical contexts. This includes developing new methodologies for medical data analysis, model fine-tuning and optimization for clinical decision support systems, and creating AI-powered tools for healthcare.
                </p>
              </div>
              <div className="job-skills">
                <span className="skill-tag">NumPy</span>
                <span className="skill-tag">Pandas</span>
                <span className="skill-tag">Scikit-Learn</span>
                <span className="skill-tag">TensorFlow</span>
                <span className="skill-tag">PyTorch</span>
                <span className="skill-tag">Hugging Face Transformers</span>
                <span className="skill-tag">LangChain</span>
                <span className="skill-tag">AI Research</span>
                <span className="skill-tag">Machine Learning</span>
                <span className="skill-tag">Medical AI</span>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3 className="job-title">Software Engineer</h3>
                <h4 className="company">Evangelist Apps</h4>
                <div className="job-details">
                  <span className="duration">Aug 2023 - Nov 2024</span>
                  <span className="location">Remote</span>
                </div>
              </div>
              <div className="job-description">
                <p>
                  Led end-to-end software design, development, and project management for multiple projects. Applied expertise across various core development areas, including front-end development with React, back-end development with Java and Python, database management with MySQL, and testing with Selenium and Playwright. Responsibilities included gathering requirements, creating technical specifications, managing development teams, and ensuring timely delivery of high-quality software.
                </p>
              </div>
              <div className="job-skills">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Software Development</span>
                <span className="skill-tag">Testing</span>
                <span className="skill-tag">Jira</span>
                <span className="skill-tag">Appium</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Webdriver</span>
                <span className="skill-tag">Typescript</span>
                <span className="skill-tag">Selenium</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">DBeaver</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Playwright</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="education">
        <div className="container">
          <h2 className="section-title">Education</h2>
          
          <div className="education-single-card">
            <div className="all-education">
              <div className="education-item-inline">
                <div className="education-header">
                  <h3 className="degree-title">Ph.D. in Computer Science</h3>
                  <h4 className="institution">North Dakota State University</h4>
                  <div className="education-details">
                    <span className="duration">2025 - 2029</span>
                    <span className="location">Fargo, ND</span>
                  </div>
                </div>
              </div>

              <div className="education-item-inline">
                <div className="education-header">
                  <h3 className="degree-title">B.Tech in Computer Science and Engineering Specialization in Internet of Things</h3>
                  <h4 className="institution">Jain (Deemed-to-be University)</h4>
                  <div className="education-details">
                    <span className="duration">2020 - 2024</span>
                    <span className="location">Bangalore, KA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-copyright">
              <p>© 2025 Kapileshwor Ray Amat. All rights reserved.</p>
            </div>
            <div className="footer-links">
              <a href="mailto:kapileshworray@gmail.com" className="footer-link" title="Email">
                <svg className="footer-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/kapilray/" target="_blank" rel="noopener noreferrer" className="footer-link" title="LinkedIn">
                <svg className="footer-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://github.com/Akatzz12" target="_blank" rel="noopener noreferrer" className="footer-link" title="GitHub">
                <svg className="footer-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
