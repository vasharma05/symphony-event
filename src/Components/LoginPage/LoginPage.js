import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ServiceCall from "../../Service/ServiceCall";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://www.pikpng.com/pngl/b/251-2513594_events-png-clipart.png)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    // backgroundSize: 'cover',
    backgroundPosition: "center",
    marginTop: -10,
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    // backgroundColor: theme.palette.secondary.main,
    backgroundColor: "#ca142a",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#ca142a",
    color: "#FFFFFF",
  },
}));

export default function LoginPage() {
  const classes = useStyles();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleSubmit() {
    const userLoginDetails = {
      Email: email,
      Password: password,
    };

    //temporary login
    window.open("/home", "_self");

    ServiceCall.userSignIn(userLoginDetails).then((response) => {
      if (response.data === "False") {
        alert("User is not regitered, Please signup before");
        window.open("/home", "_self");
      } else {
        // console.log(response.data)
        localStorage.setItem("user_key", response.name);
        window.open("/home", "_self");
      }
    });
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <TextField
            variant="outlined"
            color="secondary"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleEmail}
          />

          <TextField
            variant="outlined"
            color="secondary"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handlePassword}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            onClick={handleSubmit}
          >
            <b>Log In</b>
          </Button>

          <Grid container>
            <Grid item xs>
              <Link to="/signup">
                <Typography
                  variant="body2"
                  style={{ color: "#737373" }}
                  align="left"
                >
                  Sign Up as Guest
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/login">
                <Typography
                  variant="body2"
                  style={{ color: "#737373" }}
                  align="right"
                >
                  Contact Admin
                </Typography>
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Typography
              variant="body1"
              style={{ color: "#ca142a" }}
              align="center"
            >
              Welcome to Symphony
            </Typography>
            <br />
            <Typography
              variant="body1"
              style={{ color: "#ca142a" }}
              align="center"
            >
              <b>
                <i>The Ultimate Fan engagement Application</i>
              </b>
            </Typography>
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}
