import React, { useState } from "react";
import "./club-membership.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Modal,
  Box,
} from "@material-ui/core";
import SportsBanner from "../../Resources/Images/sports-club.jpg";

const ClubMembershipModal = ({ open, closeModal }) => {
  return (
    <Modal open={open} onClose={closeModal} className={"modal"}>
      <Card className={"modal-card"}>
        <CardMedia component="img" src={SportsBanner} />
        <CardHeader title={"Club Name"} />
        <CardActions className={"card-action-area"}>
          <Button variant={"contained"} color={"primary"}>
            Buy membership
          </Button>
        </CardActions>
        <CardContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            orci nisl, sagittis ac nibh quis, auctor maximus libero. Quisque
            iaculis risus augue, id tempor mi bibendum ac. Integer faucibus, sem
            vel rutrum cursus, nulla ex volutpat urna, non consectetur lacus
            libero quis lorem. Praesent vitae sodales elit. Fusce dapibus
            blandit varius. Nunc egestas fringilla eros, nec accumsan eros porta
            in. Integer vitae arcu in ligula tristique efficitur commodo ac
            lorem. Vivamus ornare, ex ut convallis accumsan, mi diam euismod
            felis, sit amet scelerisque orci velit id metus. Nam sagittis mauris
            in lectus laoreet, vel vulputate ex posuere. Nunc ullamcorper dictum
            eros quis malesuada. Vestibulum vitae luctus mi. Pellentesque
            commodo pharetra orci. Aliquam bibendum augue in suscipit aliquam.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin
            rhoncus arcu ut ante congue, ac fringilla neque porta. Praesent ac
            sem tempus, blandit nisi vitae, eleifend orci. Cras semper eros a
            nisi ultricies, eget cursus est malesuada. Ut et facilisis augue.
            Duis diam metus, sodales id rhoncus in, pellentesque tristique
            justo. Vestibulum porta id mauris feugiat congue.
          </p>
          <label>Perks</label>
          <ul>
            <li>Perk 1</li>
            <li>Perk 2</li>
            <li>Perk 3</li>
            <li>Perk 4</li>
            <li>Perk 5</li>
            <li>Perk 6</li>
            <li>Perk 7</li>
            <li>Perk 8</li>
            <li>Perk 9</li>
          </ul>
        </CardContent>
        <CardActions className={"card-action-area"}>
          <Button variant={"contained"} color={"primary"}>
            Buy membership
          </Button>
        </CardActions>
      </Card>
    </Modal>
  );
};

const ClubMembershipCard = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Card className={"card"}>
        <CardMedia component="img" src={SportsBanner} />
        <CardHeader title={"Club Name"} />
        <CardContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            vulputate sapien in sem scelerisque aliquam. Fusce ut pulvinar dui.
          </p>
          <label>Perks</label>
          <ul>
            <li>Perk 1</li>
            <li>Perk 2</li>
            <li>Perk 3</li>
          </ul>
        </CardContent>
        <CardActions className={"card-action-area"}>
          <Button variant={"contained"} color={"primary"}>
            Buy
          </Button>
          <Button color="primary" onClick={() => setShowModal(true)}>
            Learn more
          </Button>
        </CardActions>
      </Card>
      <ClubMembershipModal
        open={showModal}
        closeModal={() => {
          setShowModal(false);
        }}
      />
    </>
  );
};

function ClubMembershipPage() {
  return (
    <div>
      <h1 className={"club-membership-header"}>Clubs</h1>
      <div className={"cardsGrid"}>
        <ClubMembershipCard />
        <ClubMembershipCard />
        <ClubMembershipCard />
        <ClubMembershipCard />
        <ClubMembershipCard />
        <ClubMembershipCard />
        <ClubMembershipCard />
        <ClubMembershipCard />
        <ClubMembershipCard />
        <ClubMembershipCard />
        <ClubMembershipCard />
        <ClubMembershipCard />
        <ClubMembershipCard />
        <ClubMembershipCard />
        <ClubMembershipCard />
        <ClubMembershipCard />
        <ClubMembershipCard />
        <ClubMembershipCard />
        <ClubMembershipCard />
        <ClubMembershipCard />
        <ClubMembershipCard />
      </div>
    </div>
  );
}

export default ClubMembershipPage;
