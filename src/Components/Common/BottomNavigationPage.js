import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/TurnedIn";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ArchiveIcon from "@material-ui/icons/Archive";
import Paper from "@material-ui/core/Paper";

export default function BottomNavigationPage() {
  const [value, setValue] = React.useState();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Paper
          style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Interested" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Coins" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Gallery" icon={<ArchiveIcon />} />
          </BottomNavigation>
        </Paper>
      </main>
    </React.Fragment>
  );
}
