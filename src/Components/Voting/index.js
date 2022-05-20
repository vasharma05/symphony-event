import {
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
  LinearProgress,
} from "@material-ui/core";
import React from "react";
import "./voting.css";

function VotingComponent() {
  return (
    <div className="voting-section">
      <h1>Vote for your favourtite team</h1>
      <div className="voting-actions">
        <Button variant="contained" color="secondary">
          Prev question
        </Button>
        <Button variant="contained" color="secondary">
          Next question
        </Button>
      </div>
      <div className="voting-container">
        <form className="voting-card">
          <label className="voting-question-label" for="ipl-team">
            <h2>Q. Which team will you want to win this IPL season?</h2>
          </label>
          <FormControl className="fullWidth voting-form-control">
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              className="fullWidth"
            >
              <div className="voting-radio-button">
                <div>
                  <FormControlLabel value="GT" control={<Radio />} label="GT" />
                  <span>40%</span>
                </div>
                <LinearProgress variant={"determinate"} value={40} />
              </div>
              <div className="voting-radio-button">
                <div>
                  <FormControlLabel
                    value="RR"
                    control={<Radio />}
                    label="Rajasthan Royals"
                  />
                  <span>60%</span>
                </div>
                <LinearProgress variant={"determinate"} value={60} />
              </div>
              <div className="voting-radio-button">
                <div>
                  <FormControlLabel
                    value="KKR"
                    control={<Radio />}
                    label="KKR"
                  />
                  <span>50%</span>
                </div>
                <LinearProgress variant={"determinate"} value={50} />
              </div>
            </RadioGroup>
          </FormControl>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default VotingComponent;
