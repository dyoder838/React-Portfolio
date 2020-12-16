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
                direction="column"
                justify="left"
                alignItems="left">
                
                {ProjectDb.map((card, index) =>
                    <Grid key={index} z-index="3" item xs={12} sm={6} md={4} lg={4} xl={4} >
                        <ProjectCard
                        key={index}
                        id={card.id}
                        title={card.title}
                        image={card.image}
                        repository={card.repository}
                        liveLink={card.liveLink}
                        description={card.description}>
                        </ProjectCard>
                    </Grid>)}

            </Grid>

    )
}