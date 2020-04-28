import React, { Component } from "react";
import MainLayout from '../layouts/main';

class Courses extends Component {
  render(){
    function SkillCard(props) {
      return (
        <div className="skill-item-wrapper col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <div className="skill-item">
            <h2>{props.title}</h2>
            <img src={props.image} width="100px" height="110px" alt={props.title} />
            <p className="skill-desc">{props.desc}</p>
          </div>
        </div>
      );
    }

    return (
      <div class="courses container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title"><img src="https://d2aj9sy12tbpym.cloudfront.net/assets/languages/language_list/html-d55f9f9c51ce7c499c71c8c50d012164782602def8da6e623d50bc523e71fe3d.svg" alt="course list" height="25px" /><h2>Pemrograman</h2></div>
          </div>
          <SkillCard
            title="HTML & CSS"
            desc="Bahasa digunakan untuk membuat dan mendesain tampilan setiap situs web."
            image="https://d2aj9sy12tbpym.cloudfront.net/assets/languages/language_list/html-d55f9f9c51ce7c499c71c8c50d012164782602def8da6e623d50bc523e71fe3d.svg"
          />
          <SkillCard
            title="JavaScript"
            desc="Bahasa fleksibel yang digunakan di mana saja, mulai dari
            situs web interaktif hingga server backend."
            image="https://d2aj9sy12tbpym.cloudfront.net/assets/languages/language_list/es6-f27d15ffcd93edaaf6ade3c76c857d6890ade85e91fee07fb5a39458b2195c9c.svg"
          />
          <SkillCard
            title="SQL"
            desc="Bahasa digunakan untuk membuat dan mendesain tampilan setiap situs web."
            image="https://d2aj9sy12tbpym.cloudfront.net/assets/languages/language_list/html-d55f9f9c51ce7c499c71c8c50d012164782602def8da6e623d50bc523e71fe3d.svg"
          />
          <SkillCard
            title="Node.js"
            desc="Bahasa digunakan untuk membuat dan mendesain tampilan setiap situs web."
            image="https://d2aj9sy12tbpym.cloudfront.net/assets/languages/language_list/html-d55f9f9c51ce7c499c71c8c50d012164782602def8da6e623d50bc523e71fe3d.svg"
          />
        </div>
      </div>
    );
  }
}

export default MainLayout(Courses);