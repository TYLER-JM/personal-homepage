import React from 'react';

const Posts = function() {
  return (
    <article className="section posts" id="posts">
      <p className="title">I have also written a few posts, if you're interested</p>
      <a href="https://medium.com/@rufustheblog/a-beginners-guide-to-web-frameworks-a131b625ee95">
        <div className="post-card">
          <div>
            <img src="../../images/mvc.png" alt="web frame work"/>
          </div>
          <p>Web Frameworks and MVC architecture</p>
        </div>
      </a>
      <a href="https://medium.com/@rufustheblog/so-you-want-to-use-an-orm-with-javascript-3895f9d437e6">
        <div className="post-card">
          <div>
            <img src="../../images/sequelizejs.png" alt="Sequelize logo"/>
          </div>
          <p>learning the Sequelize ORM for Javascript</p>
        </div>
      </a>
    </article>
  );
}

export default Posts;