import techBanner from '../assets/jal_tech_banner_all.png'

const Skills = () => {
  return (
    <div id="skills-body" className="page-body">
      <div className="page-body-top"></div>
      <img src={techBanner} id="tech-banner"></img>

      <div className="skills-list">
        <div className="skills-item">
          <div className="skills-item-header">Languages</div>
          <div className="skills-item-text">
            HTML, CSS, JavaScript, Python, Perl, Markdown, SQL
          </div>
        </div>
        <div className="skills-item">
          <div className="skills-item-header">Databases</div>
          <div className="skills-item-text">PostgreSQL, MongoDB</div>
        </div>
        <div className="skills-item">
          <div className="skills-item-header">Libraries and Frameworks</div>
          <div className="skills-item-text">
            React, Vue, Express, Node, Sequelize, Mongoose, Flask, SQLAlchemy
          </div>
        </div>
        <div className="skills-item">
          <div className="skills-item-header">Bioinformatics</div>
          <div className="skills-item-text">
            NCBI, Entrez, BLAST, MUSCLE, Geneios, Dendroscope
          </div>
        </div>
        <div className="skills-item">
          <div className="skills-item-header">Tools</div>
          <div className="skills-item-text">
            VS Code, Insomnia, Postico, MongoDB Compass/Atlas, Heroku, Surge,
            Trello
          </div>
        </div>
        <div className="skills-item">
          <div className="skills-item-header">Other Techincal Skills</div>
          <div className="skills-item-text">
            OOP, JWT/Auth, RESTful Routing, APIs, Git, GitHub, E/R Diagrams,
            Unix, MacOS, Linux
          </div>
        </div>
        <div className="skills-item">
          <div className="skills-item-header">Core Skills</div>
          <div className="skills-item-text">
            Project Management, Collaboration, Presentations, Stakeholder
            Management, Attention to Detail, Professionalism
          </div>
        </div>
      </div>

      <div className="page-body-bottom"></div>
    </div>
  )
}

export default Skills
