import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { forwardRef, useState } from "react";
import AnalyticsTabHead from "./AnalyticsTabHead";
import ArrowDropDownCircleSharpIcon from '@mui/icons-material/ArrowDropDownCircleSharp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TabPannel from "../../components/TabPannel";
import {Line} from 'react-chartjs-2';
import getMainChartData, { mainChartOptions } from "./ChartConfig";

const ViewsTabHead = forwardRef((props, ref) => <AnalyticsTabHead {...props}
title='views'
icon = {<ArrowDropDownCircleSharpIcon/>}
value='21.4K'
subtitle={'700 less then usual'}
/>);

const WatchTimeTabHead = forwardRef((props, ref) => <AnalyticsTabHead {...props}
title='Watch Time'
icon = {<ArrowDropDownCircleSharpIcon color="green" sx={{transform : 'rotate(180deg)'}}/>}
value='400'
subtitle={'27 more then usual'}
/>);

const SubscribersTabHead = forwardRef((props, ref) => <AnalyticsTabHead {...props}
title='Subscribers'
icon = {<CheckCircleIcon color="green"/>}
value='+140'
subtitle={'about the same as usual'}
/>);

const RevenueTabHead = forwardRef((props, ref) => <AnalyticsTabHead {...props}
title='Revenue'
icon = {<ArrowDropDownCircleSharpIcon color="green" sx={{transform : 'rotate(180deg)'}}/>}
value='+240.02'
subtitle={'70 more than usual'}
/>);

const OverViewChart = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        console.log('handleChange called:', newValue);
        setValue(newValue);
    }
    return (
        <Box sx={Styles.container}>
            <Tabs value={value} onChange={handleChange}>
                <Tab component={ViewsTabHead} id="tab-0" />
                <Tab component={WatchTimeTabHead} id="tab-1" />
                <Tab component={SubscribersTabHead} id="tab-2" />
                <Tab component={RevenueTabHead} id="tab-3" />
            </Tabs>
            <TabPannel value={value} index={0} mt={0}>
                <Box sx={Styles.mainChart}>
                    <Line options={mainChartOptions} data={getMainChartData()}/>
                </Box>
            </TabPannel>

            <TabPannel value={value} index={1} mt={0}>
                <Box sx={Styles.mainChart}>
                    <Line options={mainChartOptions} data={getMainChartData()}/>
                </Box>
            </TabPannel>
            <TabPannel value={value} index={2} mt={0}>
                <Box sx={Styles.mainChart}>
                    <Line options={mainChartOptions} data={getMainChartData()}/>
                </Box>
            </TabPannel>
            <TabPannel value={value} index={3} mt={0}>
                <Box sx={Styles.mainChart}>
                    <Line options={mainChartOptions} data={getMainChartData()}/>
                </Box>
            </TabPannel>
            <Tabs value={value} onChange={handleChange}>
                    <Tab label='Chart -1' id="tab-0" />
                    <Tab label='Chart -2' id="tab-1" />
                    <Tab label='Chart -3' id="tab-2" />
                    <Tab label='Chart -4' id="tab-3" />
                </Tabs>
        </Box>
    )
}

export default OverViewChart;

/** @type{import("@mui/material").SxProps} */
const Styles = {
    container: {
       width : '100%'
    },
    mainChart : {
       height:250,
       border:1,
       borderColor:'neutral.medium',
       pt:4,
       borderTop:'none',
       borderRadius : 1
    },

}