import React, { useState } from 'react';
import './certifications.css';
import project4 from "./images/project4.png";
const Certifications = () => {
  const [openCert, setOpenCert] = useState(null);

  const handleTitleClick = (index) => {
    setOpenCert(index === openCert ? null : index);
  };

  const certifications = [
    {
      title: 'Certification Title 1',
      link: 'https://coursera.org/verify/ZAVW9BGBGTDT',
    },
    {
      title: 'Certification Title 2',
      link: 'https://coursera.org/verify/NEURD8MQMSXY',
    },
    {
      title: 'Certification Title 3',
      link: 'https://www.coursera.org/certification3',
    },
  ];

  return (
    <div className="certifications-container">
      <h1 className="certifications-heading">Certificates</h1>
      <div className="certifications-list">
        {certifications.map((certification, index) => (
          <div key={index} className="certification">
            <h2
              className={`certification-title ${openCert === index ? 'open' : ''}`}
              onClick={() => handleTitleClick(index)}
            >
              {certification.title}
            </h2>
            {openCert === index && (
              <a className="certification-link" href={certification.link} target="_blank" rel="noopener noreferrer">
                Go to Coursera
              </a>
            )}
          </div>
        ))}
      </div>
      <div className="certificate-image">
      <img src={project4} alt="Certificate" />
      </div>
    </div>
    
  );
};

export default Certifications;
