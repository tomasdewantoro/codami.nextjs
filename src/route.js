import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Courses from './views/courses';
import HtmlCSS from './views/course/htmlcss';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/courses" component={Courses} />
      <Route path="/course-detail/html-css" component={HtmlCSS} />
    </div>
  </Router>
)

export default routing;