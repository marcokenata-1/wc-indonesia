import {
  Box,
  Button,
  Container,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BankDetailsForm, { bankDetails } from "./components/BankDetailsForm";
import IDCardDetailsForm, {
  idCardDetails,
} from "./components/IDCardDetailsForm";
import PersonalInfoForm, { personalInfo } from "./components/PersonalInfoForm";
import RiskProfileForm from "./components/RiskProfileForm";

let clientData = [];

export default function ClientOnboarding() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChangeBack = () => {
    clientData.pop();
    setValue((value) => value - 1);
  };

  const handleChangeNext = () => {
    if (value === 0) {
      clientData.push(personalInfo);
    }
    if (value === 1) {
      clientData.push(bankDetails);
    }
    if (value === 2) {
      clientData.push(idCardDetails);
    }
    setValue((value) => value + 1);
  };

  const useSubmit = () => {
    clientData.push([Math.floor(Math.random() * 10000), Math.floor(Math.random() * 6)])
    clientData.push(["accepted","declined"])
    var localClientData = JSON.parse(localStorage.getItem("localData") || "[]");
    localClientData.push(clientData);
    localStorage.setItem("localData", JSON.stringify(localClientData));
    clientData = [];
    setValue(8);
  };

  const handleHome = () => {
    navigate("/");
  };

  const steps = [
    "Personal Info",
    "Bank and Finance Details",
    "ID Card Details",
    "Risk Profile Assessment",
  ];

  return (
    <>
      <Box sx={{ padding: "16px" }}>
        {value !== 8 && (
          <Container>
            <Typography sx={{ paddingTop: "16px" }}>
              Onboard a Client
            </Typography>
            <Typography sx={{ paddingTop: "8px", fontSize: "32px" }}>
              Start a Brand New Journey with a New Client!
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box sx={{ width: "50%" }}>
                {value === 0 && <PersonalInfoForm />}
                {value === 1 && <BankDetailsForm />}
                {value === 2 && <IDCardDetailsForm />}
                {value === 3 && <RiskProfileForm />}
              </Box>
              <Box
                sx={{
                  width: "50%",
                  flexDirection: "column",
                  justifyContent: "center",
                  marginTop: "10%",
                  marginLeft: "32px",
                }}
              >
                <Stepper
                  activeStep={value}
                  orientation="vertical"
                  sx={{
                    "& .MuiStepLabel-root .Mui-completed": {
                      color: "#00A9A5",
                    },
                    "& .MuiStepLabel-root .Mui-active": {
                      color: "#00A9A5",
                    },
                    "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                      fill: "white",
                    },
                  }}
                >
                  {steps.map((step, index) => (
                    <Step key={step}>
                      <StepLabel>{step}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </Box>
          </Container>
        )}

        {value === 8 && (
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                flex: "2",
                flexGrow: "1",
              }}
            >
              <Typography sx={{ fontSize: "32px", marginTop: "20%" }}>
                Registration Success
              </Typography>
              <Typography sx={{ fontSize: "16px", marginTop: "32px" }}>
                Please wait for Approval
              </Typography>
            </Box>
          </>
        )}
      </Box>
      <Box
        sx={{
          borderColor: "#00A9A5",
          color: "#00A9A5",
          border: 1,
          display: "flex",
          justifyContent: "right",
          bottom: 0,
          width: "100%",
          position: "fixed",
          padding: "8px",
          backgroundColor: "white",
        }}
      >
        {value !== 0 && value !== 8 && (
          <Button
            onClick={handleChangeBack}
            sx={{
              marginRight: "16px",
              color: "#00A9A5",
              textTransform: "none",
            }}
          >
            {" < Back"}
          </Button>
        )}
        {value !== 3 && value !== 8 && (
          <Button
            onClick={handleChangeNext}
            sx={{
              marginRight: "16px",
              color: "#00A9A5",
              textTransform: "none",
            }}
          >
            {" Next >"}
          </Button>
        )}

        {value === 8 && (
          <Button
            onClick={handleHome}
            sx={{
              marginRight: "16px",
              color: "#00A9A5",
              textTransform: "none",
            }}
          >
            Back to Home
          </Button>
        )}

        {value === 3 && (
          <Button
            onClick={useSubmit}
            sx={{
              marginRight: "16px",
              color: "#00A9A5",
              textTransform: "none",
            }}
          >
            {"Submit"}
          </Button>
        )}
      </Box>
    </>
  );
}
