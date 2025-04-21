import {Card, CardContent, Container, Divider, Typography} from '@mui/material';
import React from 'react';
import Header from "src/components/header";
import {appColors} from "src/constants/constants";

export default function Education() {
    const EducationCard = () => {
        return (<Container
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                textAlign: 'center',
            }}
        >
            <Card
                variant="outlined"
                sx={{
                    width: "100%",
                    marginTop: 200,
                    margin: '1em auto',
                    backgroundColor: appColors.card,
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                    borderRadius: '12px',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                        transform: 'scale(1.02)', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                    },
                }}
            >
                <CardContent
                    sx={{backgroundColor: appColors.primary, borderTopLeftRadius: 12, borderTopRightRadius: 12}}>
                    <Typography variant="h4" component="div" gutterBottom fontFamily="Josefin Sans"
                                color={appColors.white}>
                        South Eastern Kenya University
                    </Typography>

                </CardContent>

                <CardContent sx={{backgroundColor: appColors.white}}>
                    <Divider sx={{backgroundColor: appColors.white, marginBottom: 2}}/>
                    <Typography variant="body1" fontFamily="Josefin Sans" color={appColors.primary}>
                        Degree: Bachelor of Science
                    </Typography>
                    <Typography variant="body1" fontFamily="Josefin Sans" color={appColors.primary}>
                        Field of Study: Electronics (Major in Computer Engineering)
                    </Typography>
                    <Typography variant="body1" fontFamily="Josefin Sans" color={appColors.primary}>
                        Year: 2013 – 2017
                    </Typography>
                    <Typography variant="h4" component="div" gutterBottom fontFamily="Josefin Sans"
                                color={appColors.primary}>
                        Certifications
                    </Typography>
                    <Divider sx={{backgroundColor: appColors.primary, marginBottom: 2}}/>
                    <Typography variant="body1" fontFamily="Josefin Sans" color={appColors.primary}>
                        React Native by TestDome
                    </Typography>
                    <Typography variant="body1" fontFamily="Josefin Sans" color={appColors.primary}>
                        CI/CD with GitHub Actions – Udemy
                    </Typography>
                    <Typography variant="body1" fontFamily="Josefin Sans" color={appColors.primary}>
                        Docker & Kubernetes for Developers – Udemy
                    </Typography>
                </CardContent>
            </Card>
        </Container>);
    };

    return (<>
        <Header/>
        <EducationCard/>
    </>);
}
