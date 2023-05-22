import { Card, CardContent, Typography, Box } from "@mui/material"
import React from "react"

const LatestVideoCard = (props) => {
    return(
        <>
        <Card {...props}>
            <CardContent>
                <Typography variant="cardTitle"> Latest Video Performance</Typography>
                <Box sx={Styles.LatestVideoContainer}>
                    <Box sx={Styles.LatestVideoThumbnail} component={'img'} src="src/assets/thumbnail.png"/>
                    <Typography sx={Styles.LatestVideoTittle}>ReactJs Searchbar in 5 minutes</Typography>
                </Box>
                <Typography sx={Styles.LatestVideoTimeLabel} variant="h7">First 6 hours:</Typography>
                <Box sx={Styles.LatestVideoStatsRow}>
                    <Typography variant="h7">Views</Typography>
                    <Typography variant="h7">225</Typography>
                </Box>
                <Box sx={Styles.LatestVideoStatsRow}>
                    <Typography variant="h7">Watch Time</Typography>
                    <Typography variant="h7">30</Typography>
                </Box>
                <Box sx={Styles.LatestVideoStatsRow}>
                    <Typography variant="h7">Likes</Typography>
                    <Typography variant="h7">23</Typography>
                </Box>
                <Typography sx={Styles.CardAction} variant="link">GO TO VIDEO ANALYTICS</Typography>
                <Typography sx={Styles.CardAction} variant="link">SEE COMMENTS(12)</Typography>
            </CardContent>
        </Card>
        </>
    )
}

/** @type {import("@mui/material").SxProps} */
const Styles = {
    LatestVideoContainer : {
       width : '100%',
       position : 'relative'
    },
    LatestVideoThumbnail : {
       width: '100%',
       mt:1,
       filter : 'brightness(20%)',
       display : 'block'
    },
    LatestVideoTittle : {
         position: 'absolute',
         bottom : 0,
         left : 0,
         right : 0,
         color : 'neutral.light',
         textAlign : 'center',
         fontWeight : 'bold',
         fontSize : '1rem',
         mb:2
    },
    LatestVideoTimeLabel : {
        mt:2,
        color : 'neutral.normal'
    },
    LatestVideoStatsRow : {
        display : 'flex',
        justifyContent : 'space-between',
        mt:2
    },
    CardAction : {
        mt:2
    }
}

export default LatestVideoCard;