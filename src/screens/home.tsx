import React from "react";
import {makeStyles} from '@mui/styles';
import {
    Button,
    Container,
    Divider,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Paper,
    Stack,
    Theme,
    Typography
} from "@mui/material";
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
        margin: "20px"
    },
    summary: {
        padding: '10px'

    }

}));


const gridSx = {
    minHeight: 100,
    width: '100%',
    backgroundColor: (theme: { palette: { mode: string; }; }) =>
        theme.palette.mode === 'dark' ? '#1A2027' : appColors.card,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

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
                fontFamily: "-moz-initial",
            }}>What I do
            </header>
            <Grid container spacing={1.25} sx={{width: '100%'}}>
                <Grid item xs={6}>
                    <Paper
                        // sx={gridSx}
                    >

                        <img src={require("src/assets/images/android-app.png")} alt="Logo" style={{
                            objectFit: 'fill',
                            // height: '50%',
                            // width: '50%',
                            // // position: 'absolute',
                            // top: 0,
                            // left: 0,
                        }}/>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper sx={gridSx}>
                        <Container>
                            <Typography variant="h4" gutterBottom fontWeight="600" fontFamily="sans-serif">Android Development
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Android SDK"
                                                  secondary="Includes Android Studio and Gradle."/>
                                </ListItem>
                                <Divider/>
                                <ListItem>
                                    <ListItemText primary="Programming Languages"
                                                  secondary="Java, Kotlin and React native (JS and TS) with expo, Redux/MobX"/>
                                </ListItem>
                                <Divider/>
                                <ListItem>
                                    <ListItemText primary="User Interface Frameworks"
                                                  secondary="XML Layouts, Jetpack Compose and View Components"/>
                                </ListItem>
                                <Divider/>
                                <ListItem>
                                    <ListItemText primary="Architecture Components"
                                                  secondary="LiveData, ViewModel, Room, WorkManager, and Navigation."/>
                                </ListItem>
                                <Divider/>
                                <ListItem>
                                    <ListItemText primary="Networking" secondary="Retrofit, OkHttp, and Volley."/>
                                </ListItem>
                                <Divider/>
                                <ListItem>
                                    <ListItemText primary="Dependency Injection" secondary="Dagger and Hilt."/>
                                </ListItem>
                                <Divider/>
                                <ListItem>
                                    <ListItemText primary="Testing" secondary="JUnit, Espresso, Robolectric and Jest"/>
                                </ListItem>
                                <Divider/>
                                <ListItem>
                                    <ListItemText primary="Database" secondary="SQLite, Room, and Realm."/>
                                </ListItem>
                                <Divider/>
                                <ListItem>
                                    <ListItemText primary="Analytics and Monitoring"
                                                  secondary="Firebase Analytics, Crashlytics, and App Performance Monitoring."/>
                                </ListItem>
                                <Divider/>
                                <ListItem>
                                    <ListItemText primary="User Authentication"
                                                  secondary="Firebase Authentication and OAut2 and Api Authentication"/>
                                </ListItem>
                            </List>
                        </Container>
                    </Paper>
                </Grid>
            </Grid>

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