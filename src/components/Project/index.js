import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ProjectCard from "../ProjectCard"
import ProjectDb from "../../projects.json";

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
            className={classes.root}
            spacing={3}
            direction="row"
            justify="center"
            alignItems="center">


            {ProjectDb.map((card, index) =>
                <Grid key={index} position="flex" item xs={12} sm={6} md={6} lg={4} xl={3} ><ProjectCard
                    key={index}
                    id={card.id}
                    title={card.title}
                    image={card.image}
                    repository={card.repository}
                    liveLink={card.liveLink}
                    description={card.description}>
                </ProjectCard></Grid>)}

        </Grid>

    )
}