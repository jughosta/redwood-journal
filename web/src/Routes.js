import * as React from 'react'
import { Router, Route } from '@redwoodjs/router'
import DayEntriesPage from 'src/pages/DayEntriesPage/DayEntriesPage'
import StartPage from 'src/pages/HomePage/StartPage'
import NotFound404Page from 'src/pages/NotFoundPage/NotFound404Page'

const Routes = () => {
  return (
    <Router>
      <Route path="/entries/:day" page={DayEntriesPage} name="dayEntries" />
      <Route path="/" page={StartPage} name="home" />
      <Route notfound page={NotFound404Page} />
    </Router>
  )
}

export default Routes
