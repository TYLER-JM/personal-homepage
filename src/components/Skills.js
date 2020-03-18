import React from 'react';

const Skills = function() {
  return (
    <div className="section skills">
      <div className="logos">
        <div className="logos__column">
          <img src="images/html5.png" alt="html logo" />
          <div className="fix-width">
            <img src="images/css3.png" alt="css logo" />
          </div>
          <img src="images/Sass.png" alt="sass logo" />
        </div>
        <div className="logos__column">
          <img src="images/javascript.png" alt="javascript logo" />
          <img src="images/node.png" alt="node logo" />
          <img src="images/jquery.gif" alt="jQuery logo" />
          <img src="images/react.png" alt="React logo" />
          <img src="images/vue-js.png" alt="Vue.js logo" />
        </div>
        <div className="logos__column">
          <img src="images/ruby.png" alt="Ruby logo" />
          <img src="images/rails.png" alt="Ruby on Rails logo" />
        </div>
        <div className="logos__column">
          <img src="images/php.png" alt="PHP logo" />
          <div className="fix-width">
            <img src="images/codeigniter.png" alt="Codeigniter logo" />
          </div>
        </div>
        <div className="logos__column">
          <div className="fix-width">
            <img src="images/postgres.png" alt="Postres logo" />
          </div>
          <img src="images/mysql.png" alt="Mysql logo" />
        </div>
        <div className="logos__column">
          <img src="images/git.png" alt="git version control logo" />
        </div>
      </div>
    </div>
  )
}

export default Skills;