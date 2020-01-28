import React from 'react';
import '../../styles/projectCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';


const ProjectCard = function ({ title, tech, desc, source, src, live}) {

  return (

      <div className="card">
        <a className="card__link" href={live ? live : source} target="blank">
        <img src={`../../../images/${src}`} alt={`project homepage for ${title}`}/>
        </a>
        <div className="card__content">
          <div className="card__title">{title}</div>
          <p className="card__tech">{tech}</p>
          <p className="card__text">{desc}</p>
          <a className="card__link source-code" href={source} target="blank">
            <FontAwesomeIcon icon={faCode} />
          </a>
        </div>
      </div>
    // </a>

    
  )

}

export default ProjectCard;