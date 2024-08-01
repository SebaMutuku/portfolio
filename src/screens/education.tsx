import {Card, CardContent, Container, Divider, Typography} from '@mui/material';
import React from 'react';
import Header from "src/components/header";

export default function Education() {
    const EducationCard = () => {
        return (<Container
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                textAlign: 'center',
            }}>

            <Card variant="outlined" sx={{width: "100%", marginTop: 200, margin: '1em auto'}}>
                <CardContent>
                    <Typography variant="h4" component="div" gutterBottom fontFamily="Josefin Sans">
                        South Eastern Kenya University
                    </Typography>
                    <Divider/>
                    <Typography variant="body1" color="text.secondary" fontFamily="Josefin Sans">
                        Degree: Bachelor of science
                    </Typography>
                    <Typography variant="body1" color="text.secondary" fontFamily="Josefin Sans">
                        Field of Study: electronics (Major in Computer engineering)
                    </Typography>
                    <Typography variant="body1" color="text.secondary" fontFamily="Josefin Sans">
                        Year: 2013 -2017
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography variant="h4" component="div" gutterBottom fontFamily="Josefin Sans">
                        Other certifications
                    </Typography>
                    <Typography variant="body1" color="text.secondary" fontFamily="Josefin Sans">
                        React Native by TestDome
                    </Typography>
                    <Typography variant="body1" color="text.secondary" fontFamily="Josefin Sans">
                        loading ...
                    </Typography>
                    <Typography variant="body1" color="text.secondary" fontFamily="Josefin Sans">
                        loading ...
                    </Typography>
                </CardContent>
            </Card>
        </Container>);
    };
    return (<>
        <Header/>
        <EducationCard/>

    </>)

}