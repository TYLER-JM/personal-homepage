import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAlt, faCode, faLink } from '@fortawesome/free-solid-svg-icons';


const ProjectCard = function ({ title, tech, desc, source, src, live}) {

  return (

      <div className="card">

        <div className="card__content">
          <div className="card__title">
          {live && 
              <a className='card__link card__link--live' href={live}>
                <FontAwesomeIcon icon={faLink} />
              </a>
            }
            <span>{title}</span>
          </div>
          <p className="card__tech">{tech}</p>
          <p className="card__text">{desc}</p>
          <a className="card__link source-code" href={source} target="blank">
            <FontAwesomeIcon icon={faCode} className='source-code'/>
          </a>
        </div>
      </div>
    
  )

}

export default ProjectCard;