import {useNavigate} from "react-router-dom";
import {AppBar, Box, Toolbar, Typography, Drawer, List, ListItem, ListItemText, IconButton} from "@mui/material";
import {appColors} from "src/constants/constants";
import MenuIcon from "@mui/icons-material/Menu";
import React, {useState} from "react";

const styles = {
    headerTexts: {
        fontWeight: '600',
        fontFamily: 'Josefin Sans',
        padding: '0px 2px',
        margin: '0 5px',
        '&:hover': {
            textDecoration: 'underline',
            color: appColors.white,
            borderRadius: '5px',
        },
        color: appColors.white
    }
};

const Header = () => {
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    const menuItems = [
        {text: "Home", path: "/"},
        {text: "Education", path: "/education"},
        {text: "Experience", path: "/experience"},
        {text: "Projects", path: "/projects"},
        {text: "Contact", path: "/contactme"}
    ];

    return (
        <>
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
                    }}
                    elevation={0}>
                <Toolbar sx={{flexGrow: 1, elevation: 0}}>
                    <Typography variant="h4" sx={{
                        flexGrow: 1,
                        color: appColors.white,
                        fontFamily: 'Josefin Sans',
                        fontWeight: 'bold'
                    }}>
                        Sebastian Mutuku
                    </Typography>
                    <Box sx={{display: {xs: 'none', md: 'flex'}, alignItems: 'center'}}>
                        {menuItems.map((item) => (
                            <Typography
                                key={item.text}
                                color="inherit"
                                variant="h6"
                                sx={styles.headerTexts}
                                onClick={() => navigate(item.path)}
                            >
                                {item.text}
                            </Typography>
                        ))}
                    </Box>
                    <Box sx={{display: {xs: 'flex', md: 'none'}}}>
                        <IconButton color="inherit" onClick={toggleDrawer(true)}>
                            <MenuIcon/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                sx={{
                    '& .MuiDrawer-paper': {
                        backgroundColor: appColors.primary,
                        color: appColors.white,
                    },
                }}
            >
                <Box sx={{width: 250, padding: '1em'}} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                    <List>
                        {menuItems.map((item) => (
                            <ListItem
                                button
                                key={item.text}
                                onClick={() => navigate(item.path)}
                                sx={{
                                    '&:hover': {
                                        backgroundColor: appColors.hover,
                                    },
                                }}
                            >
                                <ListItemText
                                    primary={item.text}
                                    primaryTypographyProps={{
                                        fontFamily: 'Josefin Sans',
                                        fontWeight: '600',
                                        fontSize: '1.2em',
                                    }}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default Header;