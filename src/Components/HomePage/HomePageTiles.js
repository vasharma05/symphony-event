import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import Slide from "@material-ui/core/Slide";
import BottomNavigationPage from "../Common/BottomNavigationPage";
import GenericCard from "../Common/GenericCard";
import StepsInternal from "./StepsInternal";
import StepsExternal from "./StepsExternal";
import { Link } from "react-router-dom";

export default function HomePageTile() {
  const classes = useStyles();
  const [toggle, setToggle] = React.useState(0)
  //Only on first render
  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
      <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={3}>
            {dashboardStats.map((paper) => (
              <Grid item key={paper.title} xs={6} sm={6} >
                <Paper elevation={0} className={classes.paper} onClick={()=> {setToggle(paper.value)}}>
                  <Grid>
                    <img alt="icon" src={paper.icon} className={classes.icon} />
                  </Grid>
                  <Typography variant='body1' className={classes.divHeading}>
                    {paper.title}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <br />
          
          <h1>Get Along</h1>
          <center>
            {/* {toggle === 0 ? <StepsInternal /> : <StepsExternal/> } */}
            <StepsInternal /> 
          </center>
        </Container>
     
       

        <br />
        <br />
        <br />

        <BottomNavigationPage />
      </main>
    </React.Fragment>
  );
}


const dashboardStats = [
  {
    title: 'Internal Sports Events',
    icon: "https://media.istockphoto.com/vectors/employee-engagement-concept-vector-id1330594434?k=20&m=1330594434&s=612x612&w=0&h=EP9lQ2z55xwRktPnEIRXEByAZLpObnMpvqUQ60EFTsU=",
    value: 0
  },
  {
    title: 'External Sports Events',
    value: 1,
    icon: "https://media.istockphoto.com/vectors/business-presentation-with-charts-on-the-board-in-front-of-the-at-vector-id1193355523?k=20&m=1193355523&s=612x612&w=0&h=xdE-53FZhrGwk279h2w54VL9q0ICCYulspxfQTZzuIY=",
  },
];


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  search: {
    margin: theme.spacing(1),
    width: 600,
  },
  leaderBoard: {
    width: '100%',
    height: '400px',
    overflowY: 'auto',
    overflowX: 'hidden',
    borderStyle: 'solid',
    borderColor: '#FDCB6B',
    borderRadius: '10px',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },
  leaderBoardParent: {

  },
  chart: {
    height: 10
  },
  divHeading: {
    color: '#ca142a'
  },
  icon: {
    marginRight: theme.spacing(2),
    width: '80%',
    height: '80%',
    padding: '5%'
  },
}));
