import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  
  return (
    <Router>
      <main >
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </main>
    </Router>
  );
}

export default App;
