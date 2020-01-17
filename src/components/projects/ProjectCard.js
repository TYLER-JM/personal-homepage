import React from 'react';
import '../../styles/projectCard.scss';

const ProjectCard = function ({ title, tech, desc, href, src}) {
  return (
      // <a href={href} className="card-link" target="blank">
      //   <div className="card">
      //     <div className="card__flipper">
      //       <div className="card__front">
      //         <p className="card__title">{title}</p>
      //         <p className="card__tech"><span>{tech}</span></p>
      //         <p className="card__name"><span>{desc}</span></p>
      //       </div>
      //     </div>
      //   </div>
      // </a>

    // <div class="cards__item">
    <a href={href} className="card__link" target="blank">

      <div className="card">
        {/* <div class="card__image card__image--fence"></div> */}
        <img src={`../../../images/${src}`} alt={`project homepage for ${title}`}/>
        <div className="card__content">
          <div className="card__title">{title}</div>
          <p className="card__tech">{tech}</p>
          <p className="card__text">{desc}</p>
          {/* <a className="card__link" href={href} target="blank"><p>more</p></a> */}
          {/* <button class="btn btn--block card__btn"><a href={href}>More</a></button> */}
        </div>
      </div>
    </a>

    
  )

}

export default ProjectCard;