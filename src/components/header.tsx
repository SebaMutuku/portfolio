import {useNavigate} from "react-router-dom";
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import {appColors} from "src/constants/constants";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

const styles = {
    headerTexts: {
        fontWeight: 'bold',
        fontSize: '16px',
        fontFamily: 'Roboto, sans-serif',
        letterSpacing: '0.5px',
        '&:hover': {
            backgroundColor: appColors.hover

        },
        color: appColors.text
    }

}
const Header = () => {
    const navigate = useNavigate();
    return (
        <AppBar position="fixed" sx={{
            mb: 4,
            height: "100px",
            overflow: 'hidden',
            '::-webkit-scrollbar': {
                display: 'none',
            },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
        }}
                style={{
                    backgroundColor: appColors.primary,
                }}>
            <Toolbar sx={{flexGrow: 1, elevation: 0}}>
                <Typography variant="h6" sx={{flexGrow: 1, color: appColors.text}}>
                    Sebastian Mutuku
                </Typography>
                <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                    <Button color="inherit"
                            sx={styles.headerTexts} onClick={() => navigate("/")}>Home</Button>
                    <Button color="inherit" sx={styles.headerTexts}
                            onClick={() => navigate("/education")}>Education</Button>
                    <Button color="inherit" sx={styles.headerTexts}
                            onClick={() => navigate("/experience")}>Experience</Button>
                    <Button color="inherit" sx={styles.headerTexts} onClick={() => navigate("/contactme")}>Contact
                        Me</Button>
                </Box>
                <Box sx={{display: {xs: 'flex', md: 'none'}}}>
                    <Button color="inherit">
                        <MenuIcon/>
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header