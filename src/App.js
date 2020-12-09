import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import About from './pages/About'
import Projects from './pages/Projects'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    // navBar: {
    //     position: "fixed",
    //     top: 0,
    //     width: "100%"
    foot: { 
        
        position: "fixed",
        bottom: 0,
        width: "100%"
    },
    about: {

        position: "relative",
        bottom: -250,
        left: 75
    }
  }));

function App() {

    const classes = useStyles();

    return (
        <Router>
            
            <Grid container className={classes.root} >

                <Grid item xs={12} className={classes.navBar}>
                    <Navbar />
                </Grid>

                    <Grid item className={classes.about}>
                        <Route exact path="/" component={About} />
                    </Grid>

                    <Grid item >
                        <Route exact path="/projects" component={Projects} />
                    </Grid>

                <Grid item xs={12} className={classes.foot} >
                <Footer  />
                </Grid>

            </Grid>
        </Router>
    );
}

export default App;
