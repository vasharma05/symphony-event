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
          <b>External Events</b>
        </Typography>
        <br />
        <Grid container spacing={4}>
          {featuredPosts.map((card) => (
            <Grid item key={card.title} xs={12} sm={6} md={4}>
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
                      Interested
                    </Button>

                    <Button
                      variant="outlined"
                      size="small"
                      color="primary"
                      align="center"
                      fullWidth
                    >
                      Apply
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
    title: "Leadership Program",
    description: "Status: Applied",
    image:
      "https://focusu.com/wp-content/uploads/2020/09/1CB3A4E6-0B1C-440B-91EB-8FA4DC82925F.png",
    imageText: "Artists name",
    readmore:
      "While sitting down, stretch your arms out at your sides and press your shoulder blades together. With your palms facing down, circle your arms forwards around 20 times. Then, face your palms upwards and circle your arms backwards around 20 times. After this, circle your wrists 20 times in each direction.",
  },
  {
    title: "Health & Mental Wellness Program",
    description: "Status: Pending",
    image:
      "https://globalwellnessinstitute.org/wp-content/uploads/2019/05/wellnessinfographic.png",
    imageText: "Artists name",
    readmore:
      "Stand up and hold your hands together behind your back, expanding your chest. Pull your shoulder blades as close together as possible and hold the pose for 30 seconds.",
  },
  {
    title: "Technology - Networking Program",
    description: "Status: Applied",
    image:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0-647x363.jpeg?0LocAW2E2gIBzZp0oZSWzxmQTvAPhN_v",
    imageText: "Artists name",
    readmore:
      "Under your desk, raise both legs at once upwards, and slowly lower them down. Repeat few times.",
  },

  {
    title: "CSR",
    description: "Status: Verified & Validated",
    image:
      "https://www.corporateprofessionals.com/wp-content/uploads/2020/02/csr-2.jpg",
    imageText: "Artists name",
    readmore:
      "Holding a water bottle, or an object of a similar weight, let your arms fall straight by your side and then slowly bend them upwards. Repeat this action multiple times on both arms.",
  },
];
