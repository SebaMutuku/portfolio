import React from "react";
import {Box, Card, CardContent, Container, ListItem, Typography} from "@mui/material";
import Header from "src/components/header";
import {appColors} from "src/constants/constants";

interface Project {
    title: string;
    description: string;
    technologies: string[];
    achievements?: string[];
}

export default function Projects() {
    const projects: Project[] = [{
        title: "KCB Mobile Banking - Insurance on Mobile",
        description: "Developed and deployed mobile insurance services for KCB Mobile Banking, integrating with backend systems to provide users with seamless insurance services.",
        technologies: ["Java", "Spring", "Spring Boot", "Docker", "Kubernetes", "OpenShift", "Istio"],
        achievements: ["Developed scalable mobile insurance solutions for KCB customers.", "Successfully integrated backend services with mobile apps for real-time insurance data.", "Implemented Istio as a gateway management solution for enhanced security and traffic control.", "Containerized the application using Docker and deployed on Kubernetes with OpenShift for orchestration."]
    }, {
        title: "WHO ANC Mobile App",
        description: "Built testable mobile APK and API backend for WHO ANC projects in Indonesia, Rwanda, Burundi, Nepal, and Brazil.",
        technologies: ["Java", "Kotlin", "Google FHIR SDK", "J-Easy Rules Engine", "GitHub Actions"],
        achievements: ["Closed over 200 issues on WHO ANC and FHIR Core GitHub repos.", "Developed a FHIR Standard Mobile app with WHO ANC guidelines.", "Deployed backend server and authentication gateway on Kubernetes and AWS."]
    }, {
        title: "KCB Bank Tanzania Checkbook Ordering System",
        description: "Developed a functional checkbook ordering system for KCB branches in Tanzania, Rwanda, and Burundi.",
        technologies: ["Java", "Spring Boot", "MySQL", "Temenos T24"],
        achievements: ["Migrated all banking middleware applications for KCB Tanzania during ICDC.", "Built B2C and C2B APIs for Vodacom, Tigo, and Airtel Tanzania telcos."]
    }, {
        title: "Victoria Bank Credit Card Solution",
        description: "Built a credit card processing solution for Victoria Bank Kenya.",
        technologies: ["Java", "JSF", "SOAP", "REST"],
        achievements: ["Optimized several legacy applications and eliminated bugs.", "Performed server and database clean up, migration, and deployment.", "Integrated with third-party systems for credit card processing."]
    }, {
        title: "Ona Kenya FHIR-based Mobile Application",
        description: "Co-developed a mobile application compliant with WHO ANC and FHIR standards.",
        technologies: ["React Native", "FHIR", "Docker", "Kubernetes", "AWS"],
        achievements: ["Delivered WHO ANC, SID Cadre, SID Paud KU (Growth monitoring) apks with backends.", "Trained Indonesia team on building configurable Android applications."]
    }];

    return (<>
        <Header/>
        <Container sx={{ paddingTop: 4, marginTop: '100px' }}>
            <Typography
                variant="h4"
                gutterBottom
                textAlign="center"
                fontFamily="Josefin Sans"
                sx={{
                    color: appColors.primary,
                    zIndex: 10,
                    position: 'relative',
                    marginBottom: 4,
                }}
            >
                Projects
            </Typography>

            {projects.map((project, index) => (
                <Card
                    key={index}
                    variant="outlined"
                    sx={{
                        marginBottom: 4,
                        boxShadow: `0px 4px 8px rgba(0, 0, 0, 0.2)`,
                        borderRadius: '8px',
                        overflow: 'hidden',
                        backgroundColor: appColors.card,
                        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                        '&:hover': {
                            transform: 'scale(1.05)',
                            boxShadow: `0px 8px 16px rgba(0, 0, 0, 0.3)`,
                        },
                    }}
                >
                    <CardContent sx={{ background: appColors.primary, padding: '20px' }}>
                        <Typography variant="h5" component="div" sx={{ fontWeight: '600', color: appColors.white }}>
                            {project.title}
                        </Typography>
                        <Typography variant="body1" sx={{ color: appColors.white, marginTop: 1 }}>
                            {project.description}
                        </Typography>
                    </CardContent>
                    <CardContent sx={{ paddingTop: 2, backgroundColor: appColors.white }}>
                        <Typography variant="body2" color="text.secondary">
                            <strong>Technologies Used:</strong> {project.technologies.join(", ")}
                        </Typography>
                        {project.achievements && (
                            <Box component="ul" sx={{ paddingLeft: 2, marginTop: 1 }}>
                                <strong>Major Contributions:</strong>
                                {project.achievements.map((achievement, idx) => (
                                    <ListItem key={idx} sx={{ listStyle: "disc" }}>
                                        <Typography variant="body2">{achievement}</Typography>
                                    </ListItem>
                                ))}
                            </Box>
                        )}
                    </CardContent>
                </Card>
            ))}
        </Container>
    </>);
}
