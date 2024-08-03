import {useNavigate} from "react-router-dom";
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import {appColors} from "src/constants/constants";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

const styles = {
    headerTexts: {
        fontWeight: '600', fontFamily: 'Josefin Sans', padding: '0px 2px', margin: '0 5px', '&:hover': {
            // backgroundColor: appColors.hover,
            textDecoration: 'underline',
            color: appColors.white,
            borderRadius: '5px',

        }, color: appColors.white
    }

}
const Header = () => {
    const navigate = useNavigate();
    return (<AppBar position="fixed" sx={{
        mb: 4, height: "100px", overflow: 'hidden', '::-webkit-scrollbar': {
            display: 'none',
        }, msOverflowStyle: 'none', scrollbarWidth: 'none'
    }}
                    style={{
                        backgroundColor: appColors.primary,
                    }} elevation={0}>
        <Toolbar sx={{flexGrow: 1, elevation: 0}}>
            <Typography variant="h4" sx={{
                flexGrow: 1, color: appColors.white, fontFamily: 'Josefin Sans', fontWeight: 'bold'
            }}>
                Sebastian Mutuku
            </Typography>
            <Box sx={{display: {xs: 'none', md: 'flex'}, alignItems: 'center'}}>
                <Typography color="inherit" variant="h6"
                            sx={styles.headerTexts} onClick={() => navigate("/")}>Home</Typography>
                <Typography color="inherit" sx={styles.headerTexts}
                            onClick={() => navigate("/education")} variant="h6">Education</Typography>
                <Typography color="inherit" sx={styles.headerTexts}
                            onClick={() => navigate("/experience")} variant="h6">Experience</Typography>
                <Typography color="inherit" sx={styles.headerTexts}
                            onClick={() => navigate("/projects")} variant="h6">Projects</Typography>
                <Typography color="inherit" sx={styles.headerTexts} onClick={() => navigate("/contactme")} variant="h6">Contact</Typography>
            </Box>
            <Box sx={{display: {xs: 'flex', md: 'none'}}}>
                <Button color="inherit">
                    <MenuIcon/>
                </Button>
            </Box>
        </Toolbar>
    </AppBar>);
}

export default Header