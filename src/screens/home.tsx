import React from "react";
import {makeStyles} from '@mui/styles';
import {Button, IconButton, Stack, Theme} from "@mui/material";
import {appColors, getDateDifference} from "src/constants/constants";
import CardComponent from "src/components/card";
import Header from "src/components/header";
import {GitHub, Google, Star} from "@mui/icons-material";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginTop: "120px"
    },
    whatIDo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
    },
    summary: {
        padding: '10px'

    }

}));


const Summary = () => {
    const classes = useStyles();
    const currentDate = new Date();
    const startDate = new Date("01-04-2018")
    const {years, months} = getDateDifference(startDate, currentDate);
    return (
        <div className={classes.summary}>
            <CardComponent cardContent={
                <>
                    <h1>
                        Profile summary
                    </h1>
                    <p style={{
                        fontSize: '20px',
                        fontFamily: 'Roboto, sans-serif',
                    }}>
                        <p>Android and Web Backend with <b> {years + months / 12} years</b> of experience, innovative
                            and
                            talented Senior Software engineer
                            with Java , Spring and Spring Boot, Spring-boot security Implementation,microservices,
                            Web service creation (SOAP and REST),Scala, Python, Django, Kotlin, Spring and Spring Boot
                            Framework
                            experience and spring Quarkus.
                        </p>
                        In addition, I have experience in Git, Git Workflows,with certification in CI/CD with Github
                        Actions,
                        Microsoft TeamFoundation GIT, Docker, Kubernetes,
                        Azure Clouds, experienced in mobile UI frameworks like React Native for android and iOS
                        development,Flutter for both Android and iOS and jetpack compose.
                        I have used Linux and have experience in Linux commands, shell scripting and deployment on Linux
                        environments.
                    </p>
                </>}/>
            <div className={classes.summary}>
                <Stack direction="row" spacing={2}>
                    <IconButton
                        color="default"
                        sx={{
                            width: "45px",
                            height: "45px",
                            borderRadius: '50%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: appColors.black,
                        }}
                    >
                        <GitHub sx={{
                            color: appColors.white,
                        }}/>
                    </IconButton>
                    <IconButton
                        color="default"
                        sx={{
                            width: "45px",
                            height: "45px",
                            borderRadius: '50%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: appColors.red,
                        }}
                    >
                        <Google sx={{
                            color: appColors.white,
                        }}/>
                    </IconButton>
                </Stack>
                <p>
                    <Button variant="outlined" startIcon={<Star style={{color: "gold"}}/>}>Star me on Github</Button>
                </p>

            </div>
        </div>
    );

}

const WhatIDo = () => {
    const classes = useStyles();
    return (
        <div className={classes.whatIDo}>
            <header style={{
                fontSize: '50px',
                fontFamily: "-moz-initial"
            }}>What I do
            </header>

        </div>
    )
}

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header/>
            <Summary/>
            <WhatIDo/>
        </div>
    );
}

export default Home