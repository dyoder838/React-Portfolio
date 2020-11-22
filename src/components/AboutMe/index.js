import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import Bio from "../Bio";
import Selfie from "../Selfie";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    paper: {
        padding: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        fontSize: "24px"
    },

}));

export default function Overlay(props) {
    const classes = useStyles();

    return (
        <Grid
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.root}
        >

            <Grid item xs={12}>
                <Paper className={classes.paper}>About Me</Paper>
            </Grid>


            <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
                <Bio />
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
                <Selfie />
            </Grid>


        </Grid>
    );
}