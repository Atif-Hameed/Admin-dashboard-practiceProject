import { Avatar, Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined';
import { Link, useLocation } from "react-router-dom";

function SideNav() {
    const {collapsed} = useProSidebar();
    const theme = useTheme();
    const location = useLocation();

    return (
        <Sidebar style={{ height:'100%', top:'auto'}} breakPoint="md" backgroundColor={theme.palette.neutral.light}>
            <Box sx={Styles.avatarContainer}>
                <Avatar sx={Styles.avatar} alt="channel name" src="/src/assets/masoud.jpeg" />
                {!collapsed ? <Typography variant="body2" sx={Styles.yourChannel}>Your channel</Typography> : null}
                {!collapsed ? <Typography variant="overline" >React with Masoud</Typography> : null}
            </Box>
            <Menu
            menuItemStyles={{
                button: ({active}) => {
                    return{
                        backgroundColor: active ? theme.palette.neutral.medium : undefined
                    }
                }
            }}>
                <MenuItem  active={location.pathname === '/'} component={<Link to="/"/>} icon={<DashboardOutlinedIcon/>}>
                    <Typography variant="body2">Dashboard</Typography>
                </MenuItem>

                <MenuItem active={location.pathname === '/content'} component={<Link to="/content" />} icon={<SourceOutlinedIcon/>}>
                    <Typography variant="body2">Content</Typography>
                </MenuItem>
                <MenuItem active={location.pathname === '/analytics'} component={<Link to="/analytics"/>} icon={<AnalyticsOutlinedIcon/>}>
                    <Typography variant="body2">Analytics</Typography>
                </MenuItem>
                <MenuItem active={location.pathname === '/customization'} component={<Link to="/customization"/>} icon={<StyleOutlinedIcon/>}>
                    <Typography variant="body2">Customization</Typography>
                </MenuItem>
            </Menu>
        </Sidebar>
    )
}
/** @type{import("@mui/material").SxProps} */
const Styles = {
    avatarContainer: {
       display:'flex',
       alignItems:'center',
       flexDirection:'column',
       my:5
    },
    avatar:{
        width:'40%',
        height:'auto',
    },
    yourChannel:{
        mt:1
    }
}


export default SideNav;