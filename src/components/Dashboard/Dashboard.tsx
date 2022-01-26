import { Badge, Box, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import React from 'react';
import { appTheme } from '../../theme';
import { BarChart, Bar } from 'recharts';


interface DashBoardCardProps {
    title: string;
    subtitle: string;
    numericValue: number;
    icon: React.ReactElement;
    graphData?: Array<Number>;
}

function DashBoardCard(props: DashBoardCardProps) {

    const { title, subtitle, numericValue, icon, graphData} = props;

    return (
    <Paper sx={{padding: "16px", maxWidth: "256px", maxHeight: "256px"}} elevation={3}>
        <Stack direction="column" justifyContent="center" alignItems="flex-start" spacing={1}>
            <Stack direction="column" justifyContent="center" alignItems="flex-start" spacing={1} >
                <Typography variant="body2" align="left">
                    {title}
                </Typography>
                <Stack direction="column" justifyContent="center" alignItems="flex-start" >
                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={1} >
                        <Badge color="secondary" badgeContent={0}>
                            {icon}
                        </Badge>
                        <Typography variant="h4" >
                            {numericValue}
                        </Typography>
                    </Stack>
                    <Typography variant="body2" >
                        {subtitle}
                    </Typography>
                </Stack>
            </Stack>
            { graphData == null ? <div/> :
                <BarChart
                    width={156}
                    height={48}                    
                    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                    data={graphData.map((item, i) => {return {"data": item}})}
                >
                    <Bar dataKey="data" fill={appTheme.palette.secondary.dark} />
                </BarChart>
            }
        </Stack>
    </Paper>
);}


function Dashboard() {
    return(
    <Container
        sx={{
            backgroundColor: "grey.900",
            margin: "8px 8px 4px 4px",
            padding: 2,
            borderRadius: "8px"
        }}
        maxWidth={false}
        disableGutters={true}
    >
        <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="flex-end"
            spacing={1}
        >
            <Grid item>
                <DashBoardCard
                    title='Title'
                    subtitle='Subtitle'
                    numericValue={99999}
                    icon={<MailIcon />}
                    graphData={[1, 2, 3, 4, 1, 2, 3, 4, 1, 5, 8, 9]}
                />
            </Grid>
            <Grid item>
                <DashBoardCard
                    title='Title'
                    subtitle='Subtitle'
                    numericValue={99999}
                    icon={<MailIcon />}
                    graphData={[1, 2, 3, 4, 1, 2, 3, 4, 1, 5, 8, 9]}
                />
            </Grid>
            <Grid item>
                <DashBoardCard
                    title='Title'
                    subtitle='Subtitle'
                    numericValue={99999}
                    icon={<MailIcon />}
                    graphData={[1, 2, 3, 4, 1, 2, 3, 4, 1, 5, 8, 9]}
                />
            </Grid>
            <Grid item>
                <DashBoardCard
                    title='Title'
                    subtitle='Subtitle'
                    numericValue={99999}
                    icon={<MailIcon />}
                    graphData={[1, 2, 3, 4, 1, 2, 3, 4, 1, 5, 8, 9]}
                />
            </Grid>
            <Grid item>
                <DashBoardCard
                    title='Title'
                    subtitle='Subtitle'
                    numericValue={99999}
                    icon={<MailIcon />}
                    graphData={[1, 2, 3, 4, 1, 2, 3, 4, 1, 5, 8, 9]}
                />
            </Grid>
            <Grid item>
                <DashBoardCard
                    title='Title'
                    subtitle='Subtitle'
                    numericValue={99999}
                    icon={<MailIcon />}
                    graphData={[1, 2, 3, 4, 1, 2, 3, 4, 1, 5, 8, 9]}
                />
            </Grid>
            <Grid item>
                <DashBoardCard
                    title='Title'
                    subtitle='Subtitle'
                    numericValue={99999}
                    icon={<MailIcon />}
                    graphData={[1, 2, 3, 4, 1, 2, 3, 4, 1, 5, 8, 9]}
                />
            </Grid>
            
        </Grid>
    </Container>
    );}

export default Dashboard;

