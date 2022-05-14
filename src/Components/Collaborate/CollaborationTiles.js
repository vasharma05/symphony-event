import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import BottomNavigationPage from "../Common/BottomNavigationPage";

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
    color: "#ca142a",
  },
  subHeading: {
    color: "#115293",
    fontWeight: "600",
  },
  desc: {
    color: "#7A8C98",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ExternalPageTile() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  //Only on first render
  useEffect(() => {}, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Typography variant="h5" className={classes.divHeading}>
          <b>Community Members</b>
        </Typography>
        <br />
        <Grid container spacing={4}>
          {featuredPosts.map((card) => (
            <Grid item key={card.title} xs={4} sm={4} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={card.image}
                  title={card.title}
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    className={classes.subHeading}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    align="center"
                    variant="body1"
                    className={classes.desc}
                    gutterBottom
                  >
                    {card.description}
                  </Typography>

                  <CardActions>
                    <Button
                      variant="outlined"
                      size="small"
                      color="primary"
                      align="center"
                      fullWidth
                      onClick={() => {
                        localStorage.setItem("f_title", card.title);
                        localStorage.setItem("f_readmore", card.readmore);
                        localStorage.setItem("f_image", card.image);
                        handleClickOpen();
                        // speak({ text: card.readmore,rate : 0.8})
                      }}
                    >
                      View Profile
                    </Button>

                    <Button
                      variant="outlined"
                      size="small"
                      color="primary"
                      align="center"
                      fullWidth
                    >
                      View Past Participation
                    </Button>

                    <Button
                      variant="outlined"
                      size="small"
                      color="primary"
                      align="center"
                      fullWidth
                    >
                      Contact Via Symphony
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          maxWidth="lg"
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {localStorage.getItem("f_title")}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {/* {localStorage.getItem("f_readmore")}
                    <br /> <br /> */}
              <center>
                <img
                  alt="fitness tip"
                  height="300px"
                  width="400px"
                  src={localStorage.getItem("f_image")}
                />
              </center>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Done
            </Button>
          </DialogActions>
        </Dialog>

        <br />
        <br />
        <br />

        <BottomNavigationPage />
      </main>
    </React.Fragment>
  );
}

const featuredPosts = [
  {
    title: "Bhavya Meghnani",
    description: "Powai Innovation Office",
    image:"https://media-exp1.licdn.com/dms/image/C4D03AQF9mLPOG-UkSA/profile-displayphoto-shrink_400_400/0/1595870041988?e=1655942400&v=beta&t=eB4-GTVjk5nadcD6mvQ1tqu_QyJrvI-rWI2WMmI8dRw",
    imageText: "Bhavya Meghnani",
    readmore:
      "Passionate about solving problems and producing solutions through emerging technologies!",
  },
  {
    title: "Schezeen Fazulbhoy",
    description: "Wholesale Operations IT",
    image:
      "https://media-exp1.licdn.com/dms/image/C4E03AQGrFFFZGFPc0A/profile-displayphoto-shrink_400_400/0/1636122659403?e=1655942400&v=beta&t=7FbvFNHsBZuftEYBhnNsml5aWa9H0xFhWPwOWOvexXo",
    imageText: "Schezeen Fazulbhoy",
    readmore:
      "Passionate about solving problems and producing solutions through emerging technologies!",
  },
  {
    title: "Nidhi Patel",
    description: "Data Management Technologies",
    image:
      "https://media-exp1.licdn.com/dms/image/C5103AQGoD__kyx7CZA/profile-displayphoto-shrink_400_400/0/1561972801712?e=1655942400&v=beta&t=NEXITBy3ohgwD4eJBtqwFbGGwk_mKeVE4ySiVAAhZXw",
    imageText: "Nidhi Patel",
    readmore:
      "Passionate about solving problems and producing solutions through emerging technologies!",
  },

  {
    title: "Anuradha Saha",
    description: "Corporate Communications",
    image:
      "https://media-exp1.licdn.com/dms/image/C5103AQGoD__kyx7CZA/profile-displayphoto-shrink_400_400/0/1561972801712?e=1655942400&v=beta&t=NEXITBy3ohgwD4eJBtqwFbGGwk_mKeVE4ySiVAAhZXw",
    imageText: "Anuradha Saha",
    readmore:
      "Passionate about solving problems and producing solutions through emerging technologies!",
  },
];
