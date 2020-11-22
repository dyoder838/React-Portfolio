import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import DescriptionIcon from '@material-ui/icons/Description';
import Resume from "../../assets/resume.pdf"

const useStyles = makeStyles({
    root: {
        width: 500,
    },

    stickToBottom: {
        width: '100%',
        position: "sticky",
        bottom: 0,
        
    }
});

export default function LabelBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} className={classes.stickToBottom}>
            <BottomNavigationAction target="_blank" label="GitHub" value="GitHub" icon={<GitHubIcon onClick={event => window.open("https://github.com/dyoder838", "_blank")}/>} />
            <BottomNavigationAction target="_blank" label="LinkedIn" value="LinkedIn" icon={<LinkedInIcon onClick={event => window.open("https://linkedin.com/in/daniel-j-yoder", "_blank")}/>} />
            <BottomNavigationAction label="Email" href="mailto:dyoder838@gmail.com" value="dyoder838@gmail.com" icon={<AlternateEmailIcon />} />
            <BottomNavigationAction label="Resume" value="resume" icon={<DescriptionIcon onClick={event => window.open(Resume, "_blank")}/>} />
        </BottomNavigation>
    );
}