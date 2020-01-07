import React from 'react';
import '../../styles/projectCard.scss';

const ProjectCard = function () {
  return (
    <ul className="cardItem">
      <li className="card">
        <a href="https://github.com/TYLER-JM/stuvv-react-frontend" target="blank">
          <div className="card__flipper">
            <div className="card__front">
              <p className="card__title">Stuvv</p>
              <p className="card__tech"><span>React, Ruby on Rails, PostgreSQL</span></p>
              <p className="card__name"><span>Rent out your stuff, why not?</span></p>
            </div>
            {/* <div className="card__back">
              <svg height="180" width="180">
                <circle cx="90" cy="90" r="55" stroke="#514d9b" stroke-width="35" />
              </svg>
              <span>113.2</span>
            </div> */}
          </div>
        </a>
      </li>
    </ul>
  )

}

export default ProjectCard;