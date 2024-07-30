import React from "react";
import {makeStyles} from '@mui/styles';
import {Box, Button, Card, CardContent, Grid, ListItem, Theme, Typography} from "@mui/material";
import {appColors, getDateDifference} from "src/constants/constants";
import CardComponent from "src/components/card";
import Header from "src/components/header";
import {Star} from "@mui/icons-material";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        // marginTop: "110px"
    }, whatIDo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        margin: "20px"
    }, summary: {
        padding: '0px', backgroundColor: appColors.primary,

    }
}));


const gridSx = {
    minHeight: 100,
    width: '100%',
    backgroundColor: (theme: {
        palette: { mode: string; };
    }) => theme.palette.mode === 'dark' ? '#1A2027' : appColors.card,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

const Summary = () => {
    const classes = useStyles();
    const currentDate = new Date();
    const startDate = new Date("01-04-2018")
    const {years, months} = getDateDifference(startDate, currentDate);
    return (<div className={classes.summary}>
        <CardComponent cardContent={<>
            <Box sx={{
                display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', mt: 10
            }}>
                <Box sx={{flex: 1, textAlign: 'center', px: 2}}>
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        sx={{
                            color: appColors.white, mb: 2,
                        }}>
                        Profile Summary
                    </Typography>
                    <Typography
                        sx={{
                            color: appColors.white,
                            fontWeight: 500,
                            mb: 2,
                            fontFamily: 'Roboto, sans-serif',
                            fontSize: '18px',
                        }}
                    >
                        Android and Web Backend with <b>{years + months / 12} years</b> of experience,
                        innovative
                        and talented Senior Software Engineer with experience in Java, Spring, Spring Boot,
                        Spring Boot security implementation, microservices, Web service creation (SOAP and
                        REST), Scala, Python, Django, Kotlin, and Quarkus.
                        In addition, I have experience in Git, Git Workflows, with certification in CI/CD with
                        GitHub Actions,
                        Microsoft Team Foundation GIT, Docker, Kubernetes, Azure Cloud. I am experienced in
                        mobile UI frameworks like React Native for Android and iOS development, Flutter for both
                        Android and iOS, and Jetpack Compose.
                        I have used Linux and have experience with Linux commands, shell scripting, and
                        deployment on Linux environments.
                    </Typography>
                </Box>
                <Box sx={{flex: 1, textAlign: 'center', px: 2}}>
                    <img
                        src={require("src/assets/images/hero-img.png")}
                        alt="Profile"
                        style={{
                            width: '100%', maxWidth: '500px', height: 'auto', borderRadius: '8px',
                        }}
                    />
                </Box>
            </Box>
            <Button variant="outlined" startIcon={<Star style={{color: "gold"}}/>}
                    style={{
                        color: appColors.white, borderColor: appColors.white,
                    }}>Star me on Github</Button>
        </>}/>
        {/*<div className={classes.summary}>*/}
        {/*    <Stack direction="row" spacing={2}>*/}
        {/*        <IconButton*/}
        {/*            color="default"*/}
        {/*            sx={{*/}
        {/*                width: "45px",*/}
        {/*                height: "45px",*/}
        {/*                borderRadius: '50%',*/}
        {/*                display: 'flex',*/}
        {/*                justifyContent: 'center',*/}
        {/*                alignItems: 'center',*/}
        {/*                backgroundColor: appColors.black,*/}
        {/*            }}*/}
        {/*        >*/}
        {/*            <GitHub sx={{*/}
        {/*                color: appColors.white,*/}
        {/*            }}/>*/}
        {/*        </IconButton>*/}
        {/*        <IconButton*/}
        {/*            color="default"*/}
        {/*            sx={{*/}
        {/*                width: "45px",*/}
        {/*                height: "45px",*/}
        {/*                borderRadius: '50%',*/}
        {/*                display: 'flex',*/}
        {/*                justifyContent: 'center',*/}
        {/*                alignItems: 'center',*/}
        {/*                backgroundColor: appColors.red,*/}
        {/*            }}*/}
        {/*        >*/}
        {/*            <Google sx={{*/}
        {/*                color: appColors.white,*/}
        {/*            }}/>*/}
        {/*        </IconButton>*/}
        {/*    </Stack>*/}
        {/*    <p>*/}
        {/*    </p>*/}

        {/*</div>*/}
    </div>);

}

const WhatIDo = () => {
    const cardData = [{
        title: 'Android Development',
        description: ["Java, Kotlin and React native (JS and TS) with expo, Redux/MobX", "XML Layouts, Jetpack Compose and View Components", "LiveData, ViewModel, Room, WorkManager, and Navigation", "Retrofit, OkHttp, and Volley", "Dagger and Hilt", "JUnit, Espresso, Robolectric and Jest", "SQLite, Room, and Realm", "Firebase Analytics, Crashlytics, and App Performance Monitoring.", "Firebase Authentication and OAut2 and Api Authentication"]
    }, {
        title: 'Backend Development',
        description: ["Languages: Java, Python, JavaScript, TypeScript, Kotlin", "Relational: MySQL, PostgreSQL, SQLite, MariaDB, Oracle Database, Microsoft SQL Server", "NoSQL: MongoDB, Redis, Cassandra, CouchDB, DynamoDB, Firebase Realtime Database, Couchbase", "Java: Spring Boot, Java EE, Dropwizard, Micronaut", "Python: Django, Flask, FastAPI, Pyramid", "JavaScript/TypeScript: Express.js, NestJS, Koa, Hapi.js, Sails.js", "Kotlin: Ktor, Spring Boot (Kotlin)", "Others: Serverless Framework, Apollo Server (GraphQL), Meteor", "JUnit, TestNG, Mockito, AssertJ, Cucumber, Jasmine", "JUnit, Kotest, MockK, Spek, Kluent", "Django (Python): unittest, pytest, Django Test Framework, Factory Boy"]
    }, {
        title: 'Web Development',
        description: ["Languages: HTML, CSS, JavaScript, TypeScript", "Frameworks: React, Angular", "Testing: Jest, Mocha, Chai, Jasmine, Cypress, Selenium, Puppeteer, Testing Library", "Web sockets", "Consuming Apis, graphQL and Apollo", "React Hooks and state management with Redux and context", "Web hosting"]
    }, {
        title: 'CI/CD',
        description: ["Code Collaboration and versioning", "Automated Build", "Automated Testing", "Code Analysis with SonarQube", "Automated Image tagging with docker", "Deployment to Staging with Docker and Kubernetes", "Integration Testing in Staging", "Post-Deployment Testing", "Monitoring and Logging with Sentry and Firebase", "Rollback Plan", "Performance Monitoring", "Code Documentation"]
    },];
    const classes = useStyles();
    return (<div className={classes.whatIDo}>
        <Typography style={{
            fontSize: '50px', textDecoration: 'underline',
            fontWeight:"bold"
        }}>What I do
        </Typography>
        <Box sx={{flexGrow: 1, p: 2}}>
            <Grid container spacing={5} justifyContent="center">
                {cardData.map((card, index) => (<Grid item xs={12} sm={6} md={3} key={index}>
                    <Card
                        sx={{
                            // width:400,
                            boxShadow: `0px 4px 8px rgba(0, 0, 0, 0.2)`,
                            borderRadius: '8px',
                            overflow: 'hidden',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.05)', boxShadow: `0px 8px 16px rgba(0, 0, 0, 0.3)`,
                            },
                        }}
                    >
                        <CardContent>
                            <Typography variant="h4" component="div" style={{
                                fontWeight: '600',
                            }}>
                                {card.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {card.description.map((item, index) => (<ListItem key={index}>
                                    <li><i className="bi bi-check"></i> <span>{item}</span></li>
                                </ListItem>))}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>))}
            </Grid>
        </Box>

    </div>)
}

const Home = () => {

    const classes = useStyles();
    return (<div className={classes.root}>
        <Header/>
        <Summary/>
        <WhatIDo/>
    </div>);
}

export default Home