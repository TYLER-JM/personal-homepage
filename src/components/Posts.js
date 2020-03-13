import React from 'react';

const Posts = function() {

  const screenWidth = () => {
    const width =  window.innerWidth
    console.log(width);
  }
  screenWidth();
  return (
    <article className="section posts" id="posts">
      <h2 className="title">Posts</h2>
      <a href="https://medium.com/@rufustheblog/a-beginners-guide-to-web-frameworks-a131b625ee95">
        <div className="post-card">
          <div>
            <img src="../../images/mvc.png" alt="web frame work"/>
          </div>
            <p className="post-card__title">Web Frameworks and MVC architecture</p>

              <p className="post-card__description">
                Object-relational mapping (ORM), as the name implies, is a way for an object-oriented programming language…
              </p>
            
        </div>
      </a>
      <a href="https://medium.com/@rufustheblog/so-you-want-to-use-an-orm-with-javascript-3895f9d437e6">
        <div className="post-card">
          <div>
            <img src="../../images/sequelizejs.png" alt="Sequelize logo"/>
          </div>
          <p className="post-card__title">Learning the Sequelize ORM for Javascript</p>
         
            <p className="post-card__description">
              Lets learn about Web Frameworks. Before we can get into the details of individual frameworks, we need to understand…
            </p>
          
        </div>
      </a>
    </article>
  );
}

export default Posts;