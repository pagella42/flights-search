import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Index from './pages/index';
import Search from './pages/search/search';
import Flights from './pages/flights/flights';
import Header from './components/Header';




export default function App() {
  let solution=(N) =>{
    var enable_print = 0;
    while (N > 0) {
      if (enable_print == 0 && N % 10 != 0) {
        enable_print = 1;
      }
      if (enable_print == 1) {
        console.log((N % 10).toString());
      }
      N = Math.floor(N / 10);
    }
  }
  
solution(1320456000)

  return (
    <Router>
      <Route path="/" render={() => <Header/>} />
      <Route exact path="/" render={() => <Index />} />
      <Route exact path="/search" render={() => <Search />} />
      <Route exact path="/flights/:flight" render={({ match }) => <Flights match={match}/>} />
    </Router>

  )
}


