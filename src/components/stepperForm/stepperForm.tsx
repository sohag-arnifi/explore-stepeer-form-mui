import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Check from "@mui/icons-material/Check";

import {
  Box,
  IconButton,
  LinearProgress,
  LinearProgressProps,
  Typography,
} from "@mui/material";

export default function StepperForm() {
  const [activeStep, setActiveStep] = React.useState(0);

  const formSteps = [
    {
      count: 1,
      title: "Enter Company Details",
    },
    {
      count: 2,
      title: "Enter Shareholder Details",
    },
    {
      count: 3,
      title: "Upload Documents",
    },
    {
      count: 4,
      title: "Review & Confirm",
    },
  ];

  const getStepContent = (step: number) => {
    // You can customize the content for each step here
    switch (step) {
      case 0:
        return "Company Details content";
      case 1:
        return "Shareholder Details content";
      case 2:
        return "Upload Documents content";
      case 3:
        return "Review & Confirm content";
      default:
        return "Unknown step";
    }
  };

  const getProgressBarPercentage = () => {
    return ((activeStep + 1) / formSteps.length) * 100;
  };

  function LinearProgressWithLabel(
    props: LinearProgressProps & { value: number }
  ) {
    const stepWidth = 100 / formSteps.length;
    return (
      <Box>
        <Typography
          sx={{ textAlign: "right", fontWeight: "bold", paddingY: "5px" }}
          variant="subtitle1"
          color="text.primary"
        >{`${Math.round(props.value)}%`}</Typography>

        <Box sx={{ width: "100%", position: "relative" }}>
          {formSteps.map((item, index) => (
            <Box key={index}>
              <Box
                sx={{
                  position: "absolute",
                  left: `${stepWidth * index}%`,
                  width: `${stepWidth}%`,
                  height: "100%",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                {activeStep >= index && (
                  <IconButton
                    onClick={() => setActiveStep(index)}
                    sx={{
                      width: "30px",
                      height: "30px",
                      zIndex: 100,
                      bgcolor: "#00D1CD",
                      color: "white",
                      "&:hover": {
                        bgcolor: "#009688",
                      },
                      "&:active": {
                        bgcolor: "#00796B",
                      },
                    }}
                  >
                    {activeStep > index ? (
                      <Check />
                    ) : (
                      <Typography>{index + 1}</Typography>
                    )}
                  </IconButton>
                )}
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  left: `${stepWidth * index}%`,
                  top: "50px",
                  width: `${stepWidth}%`,
                  height: "100%",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography variant="subtitle2">
                    {`Step ${index + 1}`}
                  </Typography>
                  <Typography>{item?.title}</Typography>
                </Box>
              </Box>
            </Box>
          ))}

          <LinearProgress
            sx={{ bgcolor: "#E7E5ED", borderRadius: "5px" }}
            variant="determinate"
            value={getProgressBarPercentage()}
          />
        </Box>
      </Box>
    );
  }

  return (
    <Stack sx={{ width: "100%" }} spacing={4}>
      <Box>
        <Typography variant="h5">Customize Stepper Form Component</Typography>
      </Box>
      <LinearProgressWithLabel value={getProgressBarPercentage()} />
      <Box
        sx={{ height: "300px", width: "100%" }}
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography> {getStepContent(activeStep)}</Typography>
      </Box>

      <Box display={"flex"} justifyContent={"end"} alignItems={"center"}>
        <Button
          variant="contained"
          disabled={activeStep === 0}
          onClick={() => setActiveStep(activeStep - 1)}
          sx={{ mt: 3, mr: 1 }}
        >
          Back
        </Button>

        {activeStep === formSteps.length - 1 ? (
          <Button variant="contained" sx={{ mt: 3 }}>
            Submit
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={() => setActiveStep(activeStep + 1)}
            sx={{ mt: 3 }}
          >
            Next
          </Button>
        )}
      </Box>
    </Stack>
  );
}
