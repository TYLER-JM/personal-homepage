import React from 'react';
import '../../styles/projectCard.scss';

const ProjectCard = function ({ title, tech, desc, href}) {
  return (
      <a href={href} className="card-link" target="blank">
        <div className="card">
          <div className="card__flipper">
            <div className="card__front">
              <p className="card__title">{title}</p>
              <p className="card__tech"><span>{tech}</span></p>
              <p className="card__name"><span>{desc}</span></p>
            </div>
          </div>
        </div>
      </a>
  )

}

export default ProjectCard;