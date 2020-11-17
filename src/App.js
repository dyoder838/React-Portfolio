import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

const useStyles = makeStyles((theme) => {

})

function App() {
  const classes = useStyles();
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
