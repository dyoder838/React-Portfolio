import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './pages/About'
import Projects from './pages/Projects'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {

    return (
        <Router>

            <Navbar />

                <Route exact path="/" component={About} />
          
                <Route exact path="/projects" component={Projects} />
           
            <Footer />

        </Router>
    );
}

export default App;
