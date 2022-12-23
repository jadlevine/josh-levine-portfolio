import projectImage from '../assets/projectIcon.png'
import TttImg from '../assets/TttImg.png'
import FskImg from '../assets/FskImg.png'
import SkImg from '../assets/SkImg.png'
import { Link } from 'react-router-dom'

const Projects = () => {
  const projectsList = [
    {
      name: 'Tic-Tac-Toe',
      image: TttImg,
      github: 'https://github.com/jadlevine/u1_hw_tic_tac_toe',
      deployed: 'https://youliketictactoe.surge.sh/',
      description:
        'A simple game built in VanillaJS, with win/lose/draw condiitons, a computer opponent, and a scoreboard'
    },
    {
      name: 'Full Stack Kingdom',
      image: FskImg,
      github: 'https://github.com/jadlevine/Full-Stack-Kingdom',
      deployed: 'https://full-stack-kingdom-jal.herokuapp.com/',
      description:
        'A Full-Stack MERN application for planning a visit to the fictional theme park'
    },
    {
      name: 'Seq Keeper',
      image: SkImg,
      github: 'https://github.com/jadlevine/seq-keeper',
      deployed: 'https://seq-keeper.herokuapp.com/',
      description:
        'A Full-Stack PERN applicaiton that integrates the searching capabilities of the NCBI and allows users to catalog gene and DNA/RNA sequence data'
    }
  ]

  return (
    <div className="page-body">
      <div className="page-body-top"></div>
      <div className="projects-container">
        {projectsList.map((project) => (
          <div key={project.name} className="project-card">
            <div>
              <img className="project-img" src={project.image}></img>
              <h2 className="project-name">{project.name}</h2>
              <p className="project-description">{project.description}</p>
            </div>
            <div className="link-row">
              <a href={project.github} className="link-out clickable">
                GitHub
              </a>
              <div className="link-out divider">|</div>
              <a href={project.deployed} className="link-out clickable">
                App
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="page-body-bottom"></div>
    </div>
  )
}

export default Projects
