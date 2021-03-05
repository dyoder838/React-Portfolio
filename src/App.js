import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import About from './pages/About/'
import Projects from './pages/Projects/'
import Nav from "./components/Nav"
import Footer from "./components/Footer"


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    navBar: {
        zIndex: 1,
    },
    foot: { 
        
        position: "fixed",
        bottom: 0,
        width: "100%"
    },
    about: {

        position: "relative",
        bottom: -250,
        left: 75
    }, 
    project: {
       margin: 100,
       Position: "relative",
        zIndex: 0, 
    }
  }));

function App() {

    const classes = useStyles();

    return (
        <Router>
            
            <Grid container className={classes.root} >

                <Grid item xs={12} className={classes.navBar}>
                    <Nav />
                </Grid>

                    <Grid item xs={12} className={classes.about}>
                        <Route exact path="/" component={About} />
                    </Grid>

                    <Grid item xs={12} className={classes.project}>
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
