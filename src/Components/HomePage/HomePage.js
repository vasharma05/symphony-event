import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "../Common/Header";
import MainFeaturedPost from "../Common/MainFeaturedPost";
import Grid from "@material-ui/core/Grid";
import HomePageTile from "./HomePageTiles";

export default function HomePage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Symphony" />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={2} align="center">
            <HomePageTile />
          </Grid>
        </main>
      </Container>
      <br />
    </React.Fragment>
  );
}

const mainFeaturedPost = {
  title: "Symphony",
  description: "The Ultimate Fan engagement Application. One Stop Solution for all fan Enagement: unified service with all content features for fans across all sports on one Mobile app such as gamification, club memberships, ticketing, live-streaming and direct engagement with athletes. ",
  image:
    "https://media-exp1.licdn.com/dms/image/C5112AQFu44n2CJMn2Q/article-inline_image-shrink_1000_1488/0/1583401074610?e=1653523200&v=beta&t=k-toDf-zunQ11eFelVAwAdIUamukcF3pT1J5AOgonOY",
  imgText: "HomePage",
  linkText: "Continue reading…",
};
