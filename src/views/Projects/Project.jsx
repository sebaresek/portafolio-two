import React from 'react';  
import './Projects.css'



const  Project = ({ title, description, imgUrl, link }) => {

    return (
      <div className='card-container'>
          <div class="card">
            <div class="front-content">
              <img className="" src={imgUrl} alt={title} />
            </div>

            <div className="content">
              <p className="">{title}</p>
              <p className="">{description}</p>
              <p className=""> 
              {/* Link: <br/>  */}
              {link} </p>
            </div>
          </div>
      </div>
    );
};

export default Project;