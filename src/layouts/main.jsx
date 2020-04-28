import React, { Component } from 'react';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

const MainLayout = Components => {
  return class extends Component{
    render(){
      return (
        <>
          <Navigation/>
          <Components/>
          <Footer/>
        </>
      );
    }
  }
}

export default MainLayout;