import { Box, Divider, Tab, Tabs, Typography } from "@mui/material"
import { useState } from "react";
import TabPannel from "../../components/TabPannel";
import OverViewChart from "./OverviewChart";
import TopVideoList from "./TopVideoList";
import RealtimeChart from "./RealtimeChart";
import LatestVideoCard from "../../components/LatestVideoCard";

const Analytics = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (
        <>
            <Box>
                <Typography sx={Styles.pageTitle} variant="h5">Analytics</Typography>
            </Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label='Overview' id="tab-0" />
                    <Tab label='Content' id="tab-1" />
                    <Tab label='Audience' id="tab-2" />
                    <Tab label='Revenue' id="tab-3" />
                </Tabs>
            </Box>
            <TabPannel value={value} index={0}>
                <Box sx={Styles.overviewContainer}>
                    <Box sx={Styles.statsContainer}>
                        <Typography variant="h5">
                            Your channel got 23,094 views in last 28 days
                        </Typography>
                        <OverViewChart/>
                        <Divider sx={Styles.divider}/>
                        <TopVideoList/>
                    </Box>
                    <Box>
                        <RealtimeChart/>
                        <LatestVideoCard/>
                    </Box>

                </Box>
            </TabPannel>
            <TabPannel value={value} index={1}>
            <TopVideoList/>
            </TabPannel>
            <TabPannel value={value} index={2}>
                <Typography>Test3</Typography>
            </TabPannel>
            <TabPannel value={value} index={3}>
                <Typography>Test4</Typography>
            </TabPannel>
        </>
    )
}

export default Analytics;

/** @type{import("@mui/material").SxProps} */
const Styles = {
    pageTitle: {
        mb: 2
    },
    tabHeader: {
        borderBottom: 1,
        borderColor: 'divider'
    },
    overviewContainer: {
        display: 'grid',
        gridTemplateColumns: { 'md': '1fr', 'lg': '1fr 300px' },
        gap: 2,
        justifyContent: 'center',
    },
    statsContainer: {
        bgcolor: 'neutral.light',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    divider: {
        my:4
    }

}