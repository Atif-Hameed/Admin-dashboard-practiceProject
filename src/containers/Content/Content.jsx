import { Box, Tab, Tabs, Typography } from "@mui/material"
import { useState } from "react";
import TabPannel from "../../components/TabPannel";
import { DataGrid } from "@mui/x-data-grid";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';

const columns = [
    {
        field: 'thumbnail',
        headerName: 'Video',
        minWidth: 500,
        flex: 4,
        renderCell: (params) => <Box sx={Styles.VideoColumn} >
            <Box
                component={'img'}
                sx={Styles.videoThumbnail}
                src={params.row.thumbnail}
            />
            <Box sx={Styles.videoDetails}>
                <Typography sx={Styles.videoTitle}>Must Know Javascript Interview Questions | part 1</Typography>
                <Typography sx={Styles.videoDescription}>In this video you will learn how to solve Javascript Interview Questions.</Typography>
            </Box>
        </Box>
    },
    {
        field: 'visibility',
        headerName: 'visibility',
        minWidth: 170,
        flex: 2,
        renderCell: (params) => <Box sx={Styles.iconColumn}>
            <VisibilityOutlinedIcon />
            <Typography sx={Styles.iconColumnText}>{params.row.visibility}</Typography>
        </Box>
    },
    {
        field: 'monetization',
        headerName: 'monetization',
        minWidth: 170,
        flex: 2,
        renderCell: (params) => <Box sx={Styles.iconColumn}>
            <AttachMoneyOutlinedIcon />
            <Typography sx={Styles.iconColumnText}>{params.row.monetization}</Typography>
        </Box>
    },
    {
        field: 'views',
        headerName: 'views',
        minWidth: 170,
        flex: 1,
    },
    {
        field: 'comments',
        headerName: 'comments',
        minWidth: 170,
        flex: 1,
    }

]

const videos = [
    { id: 1, thumbnail: 'src/assets/thumbnail.png', visibility: 'Public', monetization: 'On', views: 100, comments: 12 },
    { id: 2, thumbnail: 'src/assets/thumbnail2.png', visibility: 'Public', monetization: 'On', views: 100, comments: 12 },

];

const posts = [
    { id: 1, thumbnail: 'src/assets/thumbnail2.png', visibility: 'Public', monetization: 'On', views: 100, comments: 12 },
    { id: 2, thumbnail: 'src/assets/thumbnail2.png', visibility: 'Public', monetization: 'On', views: 100, comments: 12 },
    { id: 3, thumbnail: 'src/assets/thumbnail.png', visibility: 'Public', monetization: 'On', views: 100, comments: 12 },

];

const playlists = [
    { id: 1, thumbnail: 'src/assets/thumbnail.png', visibility: 'Public', monetization: 'On', views: 100, comments: 12 },
];

const lives = [
];

const Content = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (
        <>
            <Box>
                <Typography sx={Styles.pageTitle} variant="h5">Content</Typography>
            </Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label='Videos' id="tab-0" />
                    <Tab label='Live' id="tab-1" />
                    <Tab label='Post' id="tab-2" />
                    <Tab label='Videos' id="tab-3" />
                </Tabs>
                <TabPannel value={value} index={0}>
                    <DataGrid
                        rows={videos}
                        columns={columns}
                        pageSize={25}
                        rowsperPageOptions={[25]}
                        checkboxSelection
                        autoHeight
                        rowHeight={70}
                    />
                </TabPannel>
                <TabPannel value={value} index={1}>
                    <DataGrid
                        rows={lives}
                        columns={columns}
                        pageSize={25}
                        rowsperPageOptions={[25]}
                        checkboxSelection
                        autoHeight
                        rowHeight={70}
                    />
                </TabPannel>
                <TabPannel value={value} index={2}>
                    <DataGrid
                        rows={posts}
                        columns={columns}
                        pageSize={25}
                        rowsperPageOptions={[25]}
                        checkboxSelection
                        autoHeight
                        rowHeight={70}
                    />
                </TabPannel>
                <TabPannel value={value} index={3}>
                    <DataGrid
                        rows={playlists}
                        columns={columns}
                        pageSize={25}
                        rowsperPageOptions={[25]}
                        checkboxSelection
                        autoHeight
                        rowHeight={70}
                    />
                </TabPannel>
            </Box>
        </>
    )
}

export default Content;

/** @type{import("@mui/material").SxProps} */
const Styles = {
    pageTitle: {
        mb: 2
    },
    videoThumbnail: {
        width: 120,
    },
    videoTitle: {
        fontSize: '0.8rem',
        width: 490,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        '&:hover': {
            textDecoration: 'underline',
            cursor: 'pointer'
        }
    },
    videoDescription: {
        fontSize: '0.7rem',
        color: 'neutral.normal',
        width: 490,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
    },
    videoDetails: {
        ml: 2
    },
    VideoColumn: {
       display : 'flex',
       justifyContent : 'center',
       alignItems : 'center'
    },
    iconColumn: {
        display: 'flex',
        alignItems: 'center'
    },
    iconColumnText: {
        ml: 1,
        fontSize: '0.9rem'
    }

}