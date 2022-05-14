import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#ca142a",
    color: "#FFFFFF",
  },
}));

export default function PeopleList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            src="https://media-exp1.licdn.com/dms/image/C5103AQGoD__kyx7CZA/profile-displayphoto-shrink_400_400/0/1561972801712?e=1655942400&v=beta&t=NEXITBy3ohgwD4eJBtqwFbGGwk_mKeVE4ySiVAAhZXw"
          />
        </ListItemAvatar>
        <ListItemText
          primary="Nidhi Patel"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Feeling thrilled
              </Typography>
              {" - Do apply! See you during the event!"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Travis Howard"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQGrFFFZGFPc0A/profile-displayphoto-shrink_400_400/0/1636122659403?e=1655942400&v=beta&t=7FbvFNHsBZuftEYBhnNsml5aWa9H0xFhWPwOWOvexXo"
          />
        </ListItemAvatar>
        <ListItemText
          primary="Schezeen Fazulbhoy"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Feeling super excited
              </Typography>
              {" - Soo Excited to participate in-office event! "}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Cindy Baker"
            src="https://media-exp1.licdn.com/dms/image/C4D03AQF9mLPOG-UkSA/profile-displayphoto-shrink_400_400/0/1595870041988?e=1655942400&v=beta&t=eB4-GTVjk5nadcD6mvQ1tqu_QyJrvI-rWI2WMmI8dRw"
          />
        </ListItemAvatar>
        <ListItemText
          primary="Bhavya Meghnani"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Feeling excited
              </Typography>
              {" - Very exicted to be a part of this event!"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <Button type="submit" variant="contained" className={classes.submit}>
          <b>Show responses</b>
        </Button>
      </ListItem>
    </List>
  );
}
