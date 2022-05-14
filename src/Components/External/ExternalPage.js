import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "../Common/Header";
import MainFeaturedPost from "../Common/MainFeaturedPost";
import Grid from "@material-ui/core/Grid";
import ExternalPageTile from "./ExternalPageTiles";

export default function ExternalPage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="External Events" />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={2} align="center">
            <ExternalPageTile />
          </Grid>
        </main>
      </Container>
      <br />
    </React.Fragment>
  );
}

const mainFeaturedPost = {
  title: "External Events Page",
  description:
    "One stop platform to search and attend personalised internal & external events",
  image:
    "https://thumbs.gfycat.com/AntiqueEdibleBarnswallow-size_restricted.gif",
  imgText: "Events",
  linkText: "Continue reading…",
};
