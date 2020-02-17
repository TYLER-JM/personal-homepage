import React from 'react';
import ProjectCard from './ProjectCard';
import generateId from '../../Helpers/generateId';

const Projects = function() {
  const projects = [
    {
      title: "Stuvv",
      tech: "React, Ruby on Rails, PostgreSQL",
      desc: "A marketplace where users can rent out their stuff, or rent stuff from other users.",
      source: "https://github.com/TYLER-JM/stuvv-react-frontend",
      src: "stuvv-img.png",
      live: "https://stuvv.netlify.com"
    },
    {
      title: "Scheduler",
      tech: "React, Storybook, Jest, Cypress, WebSockets",
      desc: "View, and schedule interview appointments.",
      source: "https://github.com/TYLER-JM/scheduler",
      src: "adding.png",
      live: "https://adoring-wiles-39556f.netlify.com"
    },
    {
      title: "Toodleedoo",
      tech: "Express, EJS, PostgreSQL, Sass, Bootstrap, Google APIs",
      desc: "A 'smart' To-Do List, leveraging third-party APIs to sort tasks automatically.",
      source: "https://github.com/TYLER-JM/toodleedoo",
      src: "home-page.png",
      live: "https://toodleedoo.com/landing"
    },
    {
      title: "Tweeter",
      tech: "Express, AJAX, jQuery, CSS",
      desc: "A twitter clone, focusing on front-end, responsive design.",
      source: "https://github.com/TYLER-JM/tweeter",
      src: "under-1024.png",
      live: false
    },
    {
      title: "Bar Chart",
      tech: "jQuery, HTML, CSS",
      desc: "An API to generate bar charts on a web page.",
      source: "https://github.com/TYLER-JM/barChart_repo",
      src: "example-barChart2.png",
      live: false
    }
  ]

  const allProjectCards = projects.map(project => {
    return (
      <ProjectCard
        title={project.title}
        tech={project.tech}
        desc={project.desc}
        source={project.source}
        src={project.src}
        key={generateId(8)}
        live={project.live}
      />
    )
  })

  return (
    <article className="section projects" id="projects">
      <h2>Projects</h2>

      <div className="scroll-me">
        {/* <ul className="card-list"> */}
          {allProjectCards}
        {/* </ul> */}
      </div>
    </article>
  );
}

export default Projects;