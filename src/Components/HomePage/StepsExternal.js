import * as React from 'react';
import Box from '@material-ui/core/Box';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const steps = [
  {
    label: 'Share External Event',
    description: `Final relevant external event for employees to participate`,
    url: '/external'
  },
  {
    label: 'Admin Approval',
    description:
      'Admin will approve to publish on portal for all',
      url: '/external'
  },
  {
    label: 'BASH Coins',
    description: `On approval & attending, you will earn BASH Coins`,
    url: '/external'
  },
  {
    label: 'Get Event Tickets ',
    description: `You can get one monthly External event ticket`,
    url: '/external'
  },
];

export default function StepsExternal() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 600 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
             <StepLabel
              optional={
                index === 3 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <br/>
              <Link color="inherit"
                 noWrap
                variant="body2"
                href={step.url}
                >
              Click here</Link>
              <Box sx={{ mb: 2 }}>
                <div>
                
                <br/>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
        <Typography>All steps completed - you are all set to get started!</Typography>
        <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
          Reset
        </Button>
      </Paper>
      )}
    </Box>
  );
}