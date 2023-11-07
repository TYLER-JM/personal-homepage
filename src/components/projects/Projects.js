import React from 'react';
import ProjectCard from './ProjectCard';
import generateId from '../../Helpers/generateId';

const Projects = function() {
  const projects = [
    {
      title: "Team Fantasy",
      tech: "React, NextJS, Prisma, SupaBase",
      desc: "A platform to track and manage a team-based fantasy sports league. Using NextJS, and deployed with Vercel",
      source: "https://github.com/TYLER-JM/team-fantasy-v2",
      live: "https://team-fantasy-v2.vercel.app/"
    },
    {
      title: "Stuvv",
      tech: "React, Ruby on Rails, PostgreSQL",
      desc: "This was a project from web dev bootcamp; a marketplace where users can rent out their stuff, or rent stuff from other users.",
      source: "https://github.com/TYLER-JM/stuvv-react-frontend",
      src: "stuvv-img.png",
      live: false
    },
    {
      title: "Davies Base",
      tech: "Vue, CSS, Webpack, PHP (Codeigniter), MySQL",
      desc: "A searchable database of characters from the novels of Robertson Davies.",
      source: "https://github.com/TYLER-JM/davies_vue",
      src: "current_implementation.gif",
      live: false
    },
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

      <div className="projects__container">
          {allProjectCards}
      </div>
    </article>
  );
}

export default Projects;