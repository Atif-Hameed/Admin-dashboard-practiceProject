import { Avatar, Box, Card, CardContent, Divider, Typography } from "@mui/material"
import LatestVideoCard from "../../components/LatestVideoCard";
import ColorText from "../../components/ColorText";

const Dashboard = () => {
    return (
        <Box>
            <Typography sx={Styles.pageTitle} variant="h5">Channel Dashboard</Typography>
            <Box sx={Styles.columnsContainer}>
                <LatestVideoCard sx={Styles.item} />

                <Card sx={{ mb: 2, p: '16px' }}>              {/*A change ahve made their sx={Styles.item} should here but i write customizely */}
                    <Typography variant="cardTitle">Latest post</Typography>
                    <Box sx={Styles.postAuthorSection}>
                        <Avatar sx={Styles.Avatar} src="src/assets/masoud.jpeg" />
                        <Typography sx={Styles.postMeta}>React with Masoud</Typography>
                        <Typography sx={Styles.postMeta}>May 20, 2023</Typography>
                    </Box>
                    <Typography variant="body2">I asked ChatGPT to tell me a joke about react js, hi is not only smart but also funny :)) we are going to have a video about it tomorow</Typography>
                    <Divider sx={Styles.divider} />
                    <Box sx={Styles.postStats}>
                        <Typography variant="body2">Likes</Typography>
                        <Typography variant="body2">Comments</Typography>
                        <Typography variant="h6">12</Typography>
                        <Typography variant="h6">6</Typography>
                    </Box>
                    <Typography sx={Styles.cardAction} variant="link">GO TO COMMUNITY TAB</Typography>
                </Card>

                <Card sx={Styles.item}>
                    <CardContent>
                        <Typography variant="cardTitle">Channel analytis</Typography>
                        <Typography variant="h7">Current subscribers</Typography>
                        <Typography variant="h4">4,114</Typography>
                        <Typography variant="h7">4,114</Typography>
                        <Typography variant="h7">
                            <ColorText color={'green.main'}>+77</ColorText>
                            <ColorText color={'neutral.normal'}>in last 28 days</ColorText>
                        </Typography>
                        <Divider sx={Styles.divider} />
                        <Typography variant="h6">Summery</Typography>
                        <Typography variant="h8">
                            <ColorText color={'neutral.normal'}>Last 28 days</ColorText>
                        </Typography>

                        <Box sx={Styles.videoStatsRow}>
                            <Typography variant="h7">Views</Typography>
                            <Typography variant="h7">225</Typography>
                        </Box>
                        <Box sx={Styles.videoStatsRow}>
                            <Typography variant="h7">Watch Time (hours)</Typography>
                            <Typography variant="h7">30</Typography>
                        </Box>
                        <Box sx={Styles.videoStatsRow}>
                            <Typography variant="h7">Estimate Revenue</Typography>
                            <Typography variant="h7">$450</Typography>
                        </Box>
                        <Divider sx={Styles.divider} />

                        <Typography variant="h6">Top Videos</Typography>
                        <Typography variant="h8">
                            <ColorText color={'neutral.normal'}>Last 48 hours . Views</ColorText>
                        </Typography>

                        <Box sx={Styles.videoStatsRow}>
                            <Typography variant="h7">How to become software developer in 2023</Typography>
                            <Typography variant="h7">450</Typography>
                        </Box>
                        <Box sx={Styles.videoStatsRow}>
                            <Typography variant="h7">CSS Grid tutorial: How to use Grid to make awesome user interfaces.</Typography>
                            <Typography variant="h7">287</Typography>
                        </Box>
                        <Box sx={Styles.videoStatsRow}>
                            <Typography variant="h7">Call APIS in react native: practical guide</Typography>
                            <Typography variant="h7">130</Typography>
                        </Box>
                        <Typography sx={Styles.cardAction} variant="link">GO TO VIDEO ANALYTICS</Typography>
                    </CardContent>
                </Card>

                <Card sx={Styles.item}>
                    <CardContent>
                        <Typography variant="cardTitle">Latest comments</Typography>
                        <Typography variant="h7">
                            <ColorText color={'neutral.normal'}>Channel comments I haven't responded to</ColorText>
                        </Typography>

                        <Box sx={Styles.commentRow}>
                            <Avatar sx={Styles.Avatar} src="src/assets/masoud.jpeg" />
                            <Box>
                                <Box sx={Styles.commentDetailsSection}>
                                    <Typography sx={Styles.postMeta}>React with Masoud</Typography>
                                    <Typography sx={Styles.postMeta}>2 weeks ago</Typography>
                                </Box>
                                <Typography sx={Styles.commentText}>
                                    Get tips from a successful creator on how to take a youtube channel and turn it into a bussiness that earns you money
                                </Typography>
                            </Box>
                            <Box component={'img'}
                                src="src/assets/thumbnail.png"
                                sx={Styles.VideoThumbnail}
                            />
                        </Box>

                        <Divider sx={Styles.divider} />

                        <Box sx={Styles.commentRow}>
                            <Avatar sx={Styles.Avatar} src="src/assets/masoud.jpeg" />
                            <Box>
                                <Box sx={Styles.commentDetailsSection}>
                                    <Typography sx={Styles.postMeta}>React with Masoud</Typography>
                                    <Typography sx={Styles.postMeta}>2 weeks ago</Typography>
                                </Box>
                                <Typography sx={Styles.commentText}>
                                    How can i deploy this?
                                </Typography>
                            </Box>
                            <Box component={'img'}
                                src="src/assets/thumbnail.png"
                                sx={Styles.VideoThumbnail}
                            />
                        </Box>

                        <Divider sx={Styles.divider} />

                        <Box sx={Styles.commentRow}>
                            <Avatar sx={Styles.Avatar} src="src/assets/masoud.jpeg" />
                            <Box>
                                <Box sx={Styles.commentDetailsSection}>
                                    <Typography sx={Styles.postMeta}>React with Masoud</Typography>
                                    <Typography sx={Styles.postMeta}>2 weeks ago</Typography>
                                </Box>
                                <Typography sx={Styles.commentText}>
                                    Thank you was very helpful.
                                </Typography>
                            </Box>
                            <Box component={'img'}
                                src="src/assets/thumbnail.png"
                                sx={Styles.VideoThumbnail}
                            />
                        </Box>

                        <Typography sx={Styles.cardAction} variant="link">VIEW MORE</Typography>

                    </CardContent>
                </Card>

                <Card sx={Styles.item}>
                    <CardContent sx={Styles.ideaContent}>
                        <Box>
                            <Typography variant="cardTitle">Ideas for you</Typography>
                            <Typography sx={Styles.ideaQuestion} variant="cardTitle">Read to get business savvy?</Typography>
                            <Typography variant="h7">
                                Get tips from a successful creator on how to take a youtube channel and turn it into a bussiness that earns you money
                            </Typography>
                            <Typography sx={Styles.cardAction} variant="link">GET STARTED NOW</Typography>
                        </Box>
                        <Box component={'img'}
                            src="src/assets/study-icon.png"
                            sx={Styles.ideaImage}
                        />
                    </CardContent>
                </Card>

                <Card sx={Styles.item}>
                    <CardContent sx={Styles.ideaContent}>
                        <Box>
                            <Typography variant="cardTitle">Creator Inside</Typography>
                            <Box component={'img'}
                                sx={Styles.insiderImage}
                                src="src/assets/thumbnail2.png"
                            />
                            <Typography sx={Styles.ideaQuestion}>Ready to boost your skills using AI tools </Typography>
                            <Typography variant="h7">
                            Get tips from a successful creator on how to take a youtube channel and turn it into a bussiness that earns you money
                            </Typography>
                            <Typography sx={Styles.cardAction} variant="link">WATCH ON YOUTUBE</Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    )
}

/** @type {import("@mui/material").SxProps} */
const Styles = {
    pageTitle: {
        mb: 2
    },
    columnsContainer: {
        columns: "280px 3",
        maxWidth: 1400
    },
    item: {
        mb: 2
    },
    postAuthorSection: {
        display: 'flex',
        alignItems: 'center',
        my: 3
    },
    Avatar: {
        width: '30px',
        height: 'auto',
        mr: 1
    },
    postMeta: {
        mr: 1,
        fontSize: '0.8rem',
        color: 'neutral.normal'
    },
    divider: {
        my: 2
    },
    postStats: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        my: 3
    },
    cardAction: {
        mt: 2
    },
    videoStatsRow: {
        display: 'flex',
        justifyContent: 'space-between',
        mt: 2,
        '&:hover': {
            color: 'primary.main',
            cursor: 'pointer'
        }
    },
    commentRow: {
        display: 'flex',
        alignItems: 'flex-start',
        mt: 2
    },
    commentDetailsSection: {
        display: 'flex',
        alignItems: 'center'
    },
    commentText: {
        fontSize: '0.8rem',
        mt: 0.5,
        mr: 2
    },
    VideoThumbnail: {
        width: 80,
        ml: 'auto'
    },
    ideaContent: {
        display: 'flex'
    },
    ideaQuestion: {
        fontSize: '0.9rem',
        fontWeight: 500,
        my: 2
    },
    ideaImage: {
        width: 80,
        alignSelf: 'center',
        ml: 5
    },
    insiderImage : {
        width : '100%',
        mt:1
    }
}

export default Dashboard;