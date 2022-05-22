import React, { useEffect } from "react";
import { useParams } from "react-router";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/TurnedInNot";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import ApplyIcon from "@material-ui/icons/ArrowUpward";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Header from "../Common/Header";
import MainFeaturedPost from "../Common/MainFeaturedPost";
import Button from "@material-ui/core/Button";
import BottomNavigationPage from "../Common/BottomNavigationPage";
import PeopleList from "../Common/PeopleList";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    height: 11,
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
  divHeading: {
    color: "#e57373",
  },
  subHeading: {
    color: "#115293",
    fontWeight: "600",
  },
  desc: {
    color: "#7A8C98",
  },
  paperBox: {
    position: "relative",
    padding: theme.spacing(1),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#ca142a",
    color: "#FFFFFF",
  },
}));

export default function EventsDetailsPage() {
  const classes = useStyles();
  const { eid } = useParams();
  let id = parseInt(eid);

  // const [projectData, setProjectData] = React.useState();
  const [mainFeaturedPost, setMainFeaturedPost] = React.useState();

  //Only on first render
  useEffect(() => {
    //    setProjectData("response.data")
    let banner = {
      title: data[id].title,
      description: data[id].description,
      image: data[id].image,
    };
    setMainFeaturedPost(banner);
  }, [id]);

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container maxWidth="lg">
          <Header title="Events Page" />
          <main>
            {mainFeaturedPost && <MainFeaturedPost post={mainFeaturedPost} />}
            <Grid
              container
              spacing={6}
              align="center"
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item>
                <ShareIcon style={{ fontSize: 30 }} />
              </Grid>
              <Grid item>
                <FavoriteIcon style={{ fontSize: 30 }} />
              </Grid>
              <Grid item>
                <NotificationImportantIcon style={{ fontSize: 30 }} />
              </Grid>
              <Grid item>
                <ApplyIcon style={{ fontSize: 30 }} />
              </Grid>
            </Grid>
            <br />
            <br />
            <Container maxWidth="lg">
              <Grid
                container
                spacing={3}
                align="center"
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                 <Grid item>
                  <PeopleList />
                </Grid>
                <Grid item>
                  <Paper className={classes.paperBox} elevation={1}>
                    <TextField
                      id="date"
                      label="Event Date"
                      type="date"
                      defaultValue="2022-05-18"
                      disabled
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper className={classes.paperBox} elevation={1}>
                    <TextField
                      id="date"
                      label="Last Registeration Date"
                      type="date"
                      defaultValue="2022-04-18"
                      disabled
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Paper>
                </Grid>
               

                <Grid item>
                  <Button
                    type="submit"
                    variant="contained"
                    className={classes.submit}
                  >
                    <b>Open in Metaverse</b>
                  </Button>
                  {"  "}
                  <Button
                    type="submit"
                    variant="contained"
                    className={classes.submit}
                  >
                    <b>Apply</b>
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </main>
        </Container>
        <br />
        <br />
        <br />
        <BottomNavigationPage />
      </main>
    </React.Fragment>
  );
}

const data = [
  {
    title: "Mumbai Indians Meetup",
    eid: "1",
    description: "Quick meet-up with all Mumbai Indians Cricketers",
    image:
      "https://images.hindustantimes.com/img/2022/05/21/550x309/ANI-20220521230-0_1653156868780_1653156884750.jpg",
    imageText: "Artists name",
    readmore:
      "Quick meet-up with all Mumbai Indians Cricketers",
  },
  {
    title: "Messi in Banglore",
    eid: "2",
    description: "Dream coming true - Meet Messi in Banglore! Lionel Andrés Messi, also known as Leo Messi, is an Argentine professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and captains the Argentina national team.",
    image:
      "https://i.guim.co.uk/img/media/a7fe7170defa865d2b96b829f05c5d8fa82d8edf/0_20_2201_1321/master/2201.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=72bbae118ff1631bcc0d1f837159a727",
    imageText: "Artists name",
    readmore:
      "Dream coming true - Meet Messi in Banglore! Lionel Andrés Messi, also known as Leo Messi, is an Argentine professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and captains the Argentina national team.",
  },
  {
    title: "Badminton Day",
    eid: "3",
    description: "Play Badminton Tournament with Badminton Lovers",
    image:
      "https://i.cdn.newsbytesapp.com/images/l21720210730194535.jpeg",
    imageText: "Artists name",
    readmore:
      "Play Badminton Tournament with Badminton Lovers",
  },
];