import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = function() {
  const projects = [
    {
      title: "Stuvv",
      tech: "React, Ruby on Rails, PostgreSQL",
      desc: "Rent out your stuff, why not?",
      href: "https://github.com/TYLER-JM/stuvv-react-frontend"
    },
    {
      title: "Scheduler",
      tech: "React, Storybook, Jest, Cypress",
      desc: "Schedule interview appointments",
      href: "https://github.com/TYLER-JM/scheduler"
    },
    {
      title: "Toodleedoo",
      tech: "Express, EJS, PostgreSQL, Sass, Bootstrap, Google APIs",
      desc: "A 'smart' To-Do List, leveraging third-party APIs to sort tasks",
      href: "https://github.com/TYLER-JM/toodleedoo"
    },
    {
      title: "Tweeter",
      tech: "Express, AJAX, jQuery, CSS",
      desc: "A twitter clone, focusing on front-end, responsive design",
      href: "https://github.com/TYLER-JM/tweeter"
    },
    {
      title: "Bar Chart",
      tech: "jQuery, HTML, CSS",
      desc: "An API to generate bar charts on a web page",
      href: "https://github.com/TYLER-JM/barChart_repo"
    }
  ]

  const allProjectCards = projects.map(project => {
    return (
      <ProjectCard
        title={project.title}
        tech={project.tech}
        desc={project.desc}
        href={project.href}
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