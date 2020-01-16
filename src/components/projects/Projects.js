import React from 'react';
import ProjectCard from './ProjectCard';
import generateId from '../../Helpers/generateId';

const Projects = function() {
  const projects = [
    {
      title: "Stuvv",
      tech: "React, Ruby on Rails, PostgreSQL",
      desc: "Rent out your stuff, why not?",
      href: "https://github.com/TYLER-JM/stuvv-react-frontend",
      src: "stuvv-img.png"
    },
    {
      title: "Scheduler",
      tech: "React, Storybook, Jest, Cypress",
      desc: "Schedule interview appointments",
      href: "https://github.com/TYLER-JM/scheduler",
      src: "adding.png"
    },
    {
      title: "Toodleedoo",
      tech: "Express, EJS, PostgreSQL, Sass, Bootstrap, Google APIs",
      desc: "A 'smart' To-Do List, leveraging third-party APIs to sort tasks",
      href: "https://github.com/TYLER-JM/toodleedoo",
      src: "home-page.png"
    },
    {
      title: "Tweeter",
      tech: "Express, AJAX, jQuery, CSS",
      desc: "A twitter clone, focusing on front-end, responsive design",
      href: "https://github.com/TYLER-JM/tweeter",
      src: "under-1024.png"
    },
    {
      title: "Bar Chart",
      tech: "jQuery, HTML, CSS",
      desc: "An API to generate bar charts on a web page",
      href: "https://github.com/TYLER-JM/barChart_repo",
      src: "example-barChart2.png"
    }
  ]

  const allProjectCards = projects.map(project => {
    return (
      <ProjectCard
        title={project.title}
        tech={project.tech}
        desc={project.desc}
        href={project.href}
        src={project.src}
        key={generateId(8)}
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