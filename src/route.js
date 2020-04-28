import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Courses from './views/courses';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/courses" component={Courses} />
    </div>
  </Router>
)

export default routing;