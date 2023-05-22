import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useProSidebar } from "react-pro-sidebar";

function AppHeader() {
    const { toggleSidebar, collapseSidebar, broken} = useProSidebar();
    return (
        <AppBar position="sticky" sx={Styles.appBar}>
            <Toolbar>
                <IconButton color="secondary" onClick={() =>  broken ? toggleSidebar() : collapseSidebar()}>
                    <MenuIcon />
                </IconButton>
                <Box
                    component={'img'}
                    sx={Styles.appLogo}
                    src='/src/assets/sample-logo.png'
                />
                <Box sx={{flexGrow:1}}/>
                <IconButton color="secondary" title="Notifications">
                    <Badge badgeContent={14} color="error">
                        <NotificationsIcon  />
                    </Badge>
                </IconButton>
                <IconButton title="settings" color="secondary">
                    <SettingsIcon/>
                </IconButton>
                <IconButton title="sign out" color="secondary">
                    <LogoutIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}


/** @type{import("@mui/material").SxProps} */
const Styles = {
    appBar: {
        bgcolor: 'neutral.main'
    },
    appLogo: {
        borderRadius:2,
        width:80,
        ml:2,
        cursor: 'pointer'
    }
}

export default AppHeader;