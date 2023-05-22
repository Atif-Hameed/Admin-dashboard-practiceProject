import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import React from "react";
import CircleIcon from '@mui/icons-material/Circle';
import ColorText from "../../components/ColorText";
import { Bar } from "react-chartjs-2";
import { realtimeChartData, realtimeChartOptions } from "./ChartConfig";

const RealtimeChart = () => {
    return(
        <Card sx={Styles.realtimeStatsCard}>
            <CardContent>
                <Box>
                    <Typography variant="cardTitle">Realtime</Typography>
                    <Box sx={Styles.updateLiveRow}>
                        <CircleIcon sx={Styles.dotIcon}/>
                        <Typography variant="h7">
                        <ColorText color='neutral.normal'>Updating Live</ColorText>
                        </Typography>
                    </Box>
                    <Divider sx={Styles.divider} />
                    <Typography sx={Styles.valueText}>4,144</Typography>
                    <Typography variant="h7"><ColorText color='neutral.normal'>Subscribers</ColorText></Typography>

                    <Divider sx={Styles.divider} />
                    <Typography sx={Styles.valueText}>1,784</Typography>
                    <Typography variant="h7"><ColorText color='neutral.normal'>View Last 48 hours</ColorText></Typography>

                    <Box sx={Styles.realtimeChart}>
                        <Bar options={realtimeChartOptions} data={realtimeChartData} />
                    </Box>

                    <Typography variant="link">See more</Typography>
                </Box>
            </CardContent>
        </Card>
    )
}

export default RealtimeChart;

/** @type{import("@mui/material").SxProps} */
const Styles = {
    realtimeStatsCard: {
        mb: 2
    },
    updateLiveRow:{
        display:'flex',
        alignItems : 'center'
    },
    dotIcon : {
        width:10,
        color : 'primary.normal',
        mr:1
    },
    divider : {
        my:2
    },
    valueText : {
        fontSize:'1.3rem',
        fontWeight: '400'
    },
    realtimeChart : {
        height:70,
        mt:4
    }
}