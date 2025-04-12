import React from 'react';
import Header from "src/components/header";
import { Box, Card, CardContent, Container, Divider, Typography } from "@mui/material";
import { Email, GitHub, LinkedIn, LocationOn, Phone } from "@mui/icons-material";
import { appColors } from "src/constants/constants";

export default function ContactMe() {
    return (
        <>
            <Header />
            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    paddingTop: 8
                }}
            >
                <Card
                    variant="outlined"
                    sx={{
                        width: "100%",
                        maxWidth: 700,
                        backgroundColor: appColors.card,
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                        borderRadius: '12px',
                        overflow: 'hidden',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                            transform: 'scale(1.02)',
                            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                        }
                    }}
                >
                    <CardContent sx={{ backgroundColor: appColors.primary }}>
                        <Typography
                            variant="h4"
                            fontFamily="Josefin Sans"
                            sx={{ color: appColors.primary }}
                            gutterBottom
                        >
                            Contact Me
                        </Typography>
                        <Divider sx={{ backgroundColor: appColors.primary, mb: 2 }} />
                        <Typography
                            variant="body1"
                            sx={{ color: appColors.white }}
                            fontFamily="Josefin Sans"
                        >
                            Feel free to reach out for collaboration, freelance projects, or just to connect.
                        </Typography>
                    </CardContent>

                    <CardContent sx={{ backgroundColor: appColors.white, paddingY: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                            <Email sx={{ color: appColors.primary, marginRight: 1 }} />
                            <Typography fontFamily="Josefin Sans" sx={{ color: appColors.primary }}>
                                seb.mutuku@gmail.com
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                            <Phone sx={{ color: appColors.primary, marginRight: 1 }} />
                            <Typography fontFamily="Josefin Sans" sx={{ color: appColors.primary }}>
                                +254 ... ... ...
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                            <LocationOn sx={{ color: appColors.primary, marginRight: 1 }} />
                            <Typography fontFamily="Josefin Sans" sx={{ color: appColors.primary }}>
                                Nairobi, Kenya
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                            <LinkedIn sx={{ color: appColors.primary, marginRight: 1 }} />
                            <Typography
                                fontFamily="Josefin Sans"
                                component="a"
                                href="https://www.linkedin.com/in/sebastian-mutuku-8023031a3/"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    color: appColors.primary,
                                    textDecoration: "none",
                                    '&:hover': { textDecoration: "underline", color: appColors.primary }
                                }}
                            >
                                https://www.linkedin.com/in/seba-mutuku/
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <GitHub sx={{ color: appColors.primary, marginRight: 1 }} />
                            <Typography
                                fontFamily="Josefin Sans"
                                component="a"
                                href="https://github.com/SebaMutuku"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    color: appColors.primary,
                                    textDecoration: "none",
                                    '&:hover': { textDecoration: "underline", color: appColors.primary }
                                }}
                            >
                                github.com/SebaMutuku
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Container>
        </>
    );
}
