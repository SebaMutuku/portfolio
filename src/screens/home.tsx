import React from "react";
import {makeStyles} from '@mui/styles';
import {Box, Button, Card, CardContent, Grid, ListItem, Theme, Typography} from "@mui/material";
import {appColors, getDateDifference} from "src/constants/constants";
import CardComponent from "src/components/card";
import Header from "src/components/header";
import {Star} from "@mui/icons-material";

const useStyles = makeStyles((theme: Theme) => ({
    root: {}, whatIDo: {
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


const Summary = () => {
    const handleClick = () => {
        window.open('https://github.com/SebaMutuku', '_blank', 'noopener,noreferrer');
    };

    const classes = useStyles();
    const currentDate = new Date();
    const startDate = new Date("01-04-2018")
    const {years} = getDateDifference(startDate, currentDate);
    return (<div className={classes.summary}>
        <CardComponent cardContent={<>
            <Box sx={{
                display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', mt: 10
            }}>
                <Box sx={{flex: 1, textAlign: 'center', px: 2}}>
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        fontFamily='Josefin Sans'
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
                            fontFamily: 'Josefin Sans',
                            fontSize: '20px',
                        }}>
                        Android and Web Backend Engineer with {years}+ years of experience — an innovative and talented
                        software developer with strong proficiency in Java, Spring, Spring Boot, and web service
                        creation (SOAP and REST). Experienced in Scala, Python, Django, Kotlin, and cloud-native
                        development.
                        Skilled in Git and Git Workflows, with certifications in CI/CD using GitHub Actions and
                        Microsoft Team Foundation Git. Deep knowledge of Docker, Kubernetes, OpenShift, Spring Cloud,
                        and Configuration Server. Proficient in Linux, shell scripting, and deployment on Linux
                        environments.
                        Experienced in developing frontends with React Native (Android & iOS), Flutter (cross-platform),
                        and React JS. Worked extensively with financial applications including Temenos and Finacle, and
                        their related systems.
                        Specialized in building health-related software using the Google FHIR SDK and FHIR Resources.
                        Experienced with the J-easy Rules Engine for implementing complex business logic. Strong focus
                        on scalable backend architecture, DevOps automation, and delivering high-quality,
                        production-ready software.
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
                    }} onClick={handleClick}>
                Star me and follow me on Github</Button>
        </>}/>
    </div>);

}

const WhatIDo = () => {
    const cardData = [{
        title: 'Android Development',
        description: ["Java, Kotlin and React native (JS and TS) with expo, Redux/MobX", "XML Layouts, Jetpack Compose and View Components", "LiveData, ViewModel, Room, WorkManager, and Navigation", "Retrofit, OkHttp, and Volley", "Dagger and Hilt", "JUnit, Espresso, Robolectric and Jest", "SQLite, Room, and Realm", "Firebase Analytics, Crashlytics, and App Performance Monitoring.", "Firebase Authentication and OAut2 and Api Authentication"]
    }, {
        title: 'Backend Development',
        description: ["Languages: Java, Python, JavaScript, TypeScript, Kotlin", "Relational: MySQL, PostgreSQL, SQLite, MariaDB, Oracle Database, Microsoft SQL Server", "NoSQL: MongoDB, Redis, Cassandra, CouchDB, DynamoDB, Firebase Realtime Database, Couchbase", "Java: Spring Boot, Java EE, Dropwizard, Micronaut", "Python: Django, Flask, FastAPI, Pyramid", "JavaScript/TypeScript: Express.js, NestJS, Koa, Hapi.js, Sails.js", "Kotlin: Ktor, Spring Boot (Kotlin and Java)", "Others: Serverless Framework, Apollo Server (GraphQL), Meteor", "JUnit, TestNG, Mockito, AssertJ, Cucumber, Jasmine", "JUnit, Kotest, MockK, Spek, Kluent", "Django (Python): unittest, pytest, Django Test Framework, Factory Boy"]
    }, {
        title: 'Web Development',
        description: ["Languages: HTML, CSS, JavaScript, TypeScript", "Frameworks: React, Angular", "Testing: Jest, Mocha, Chai, Jasmine, Cypress, Selenium, Puppeteer, Testing Library", "Web sockets", "Consuming Apis, graphQL and Apollo", "React Hooks and state management with Redux and context", "Web hosting"]
    }, {
        title: 'CI/CD',
        description: ["Code Collaboration and versioning", "Automated Build", "Automated Testing", "Code Analysis with SonarQube", "Automated Image tagging with docker", "Deployment to Staging with Docker and Kubernetes", "Integration Testing in Staging", "Post-Deployment Testing", "Monitoring and Logging with Sentry and Firebase", "Istio for api management(as a gateway)", "Openshift deployments", "Grafana logs with LOKI", "Rollback Plan", "Performance Monitoring", "Code Documentation"]
    },];
    const classes = useStyles();
    return (<div className={classes.whatIDo}>
        <Typography style={{
            fontSize: '50px', textDecoration: 'underline', fontWeight: "bold"
        }}>What I do:
        </Typography>
        <Box sx={{flexGrow: 1, p: 2}}>
            <Grid container spacing={5} justifyContent="center">
                {cardData.map((card, index) => (<Grid item xs={12} sm={6} md={3} key={index}>
                    <Card
                        sx={{
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
                            <CardContent sx={{
                                background: appColors.primary, borderRadius: '8px'
                            }}>
                                <Typography variant="h5" component="div" style={{
                                    fontWeight: '600', color: appColors.white,
                                }}>
                                    {card.title}
                                </Typography>
                            </CardContent>
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