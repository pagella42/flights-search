import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Index from './pages/index';
import Search from './pages/search/search';
import Flights from './pages/flights/flights';
import Header from './components/Header';




export default function App() {
  return (
    <Router>
      <Route path="/" render={() => <Header/>} />
      <Route exact path="/" render={() => <Index />} />
      <Route exact path="/search" render={() => <Search />} />
      <Route exact path="/flights/:flight" render={({ match }) => <Flights match={match}/>} />
    </Router>

  )
}


