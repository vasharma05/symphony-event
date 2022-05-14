import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "../Common/Header";
import MainFeaturedPost from "../Common/MainFeaturedPost";
import Grid from "@material-ui/core/Grid";
import CollaborationTiles from "./CollaborationTiles";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import {Button, Typography} from "@material-ui/core";

function CollaborateDashboard(){
    return(
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="Collaborate" />
                <main>
                <MainFeaturedPost post={mainFeaturedPost} />
                <Grid container spacing={2} align="center">
                    <CollaborationTiles/>
                </Grid>
                </main>
            </Container>
            <br />
        </React.Fragment>
    )
}

const mainFeaturedPost = {
    title: "Collaboration Dashboard",
    description:
      "Find link minded individuals to collaborate with",
    image:
      "https://thumbs.gfycat.com/AntiqueEdibleBarnswallow-size_restricted.gif",
    imgText: "Collaborate",
    linkText: "Continue reading…",
};

export default CollaborateDashboard;