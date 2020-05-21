import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Courses from './views/courses'
import Dashboard from './views/dashboard'
import JoinedCourse from './views/joined'

import HtmlCSS from './views/course/htmlcss'

const routing = (
  <Router>
    <>
      <Route exact path="/" component={App} />
      <Route path="/courses" component={Courses} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/course-detail/html-css" component={HtmlCSS} />
      <Route path ="/success/:class" component={JoinedCourse} />
    </>
  </Router>
)

export default routing;