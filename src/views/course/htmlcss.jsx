import React, { Component } from 'react';
import MainLayout from '../../layouts/main';

class HtmlCSS extends Component{
  render(){
    return (
      <div className="container">
        <div className="course-title">
          <h1>HTML & CSS</h1>
          <h2>Bahasa digunakan untuk membuat dan mendesain tampilan setiap situs web.</h2>
        </div>
      </div>
    );
  }
}

export default MainLayout(HtmlCSS);