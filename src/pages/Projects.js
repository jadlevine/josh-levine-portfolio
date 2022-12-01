// import React from 'react'
import projectImage from '../assets/projectIcon.png'
import { Link } from 'react-router-dom'

const Projects = () => {
  const projectsList = [
    {
      name: 'Tic-Tac-Toe',
      image: projectImage,
      //this github needs CLEANED UP... readme is still from markdown HW!
      github: 'https://github.com/jadlevine/u1_hw_tic_tac_toe',
      deployed: 'https://youliketictactoe.surge.sh/'
    },
    {
      name: 'Treasure Hunter',
      image: projectImage,
      github: 'https://github.com/jadlevine/Treasure-Hunter',
      deployed: 'surge'
    },
    {
      name: "What's in the Fridge",
      image: projectImage,
      github: 'https://github.com/jadlevine/whats_in_the_fridge',
      deployed: 'heroku - n/a'
    },
    {
      name: 'Full Stack Kingdom',
      image: projectImage,
      github: '',
      deployed: 'heroku'
    },
    {
      name: 'Foliage Friends',
      image: projectImage,
      github: '',
      deployed: 'heroku'
    },
    {
      name: 'GradeBook',
      image: projectImage,
      github: '',
      deployed: 'heroku - n/a'
    }
  ]

  return (
    <div>
      <div id="projects-container"></div>
      <h1>Projects</h1>
      {projectsList.map((project) => (
        <div key={project.name} className="project-card">
          <h3>{project.name}</h3>
          <Link to={project.github}>GitHub</Link>
        </div>
      ))}
    </div>
  )
}

export default Projects
