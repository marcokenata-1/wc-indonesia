import { Box, TextField, Typography } from "@mui/material";

export let personalInfo = [];

export default function PersonalInfoForm() {
  const nameHandler = (event) => {
    personalInfo[0] = event.target.value;
  };

  const phoneHandler = (event) => {
    personalInfo[1] = event.target.value;
  };

  const emailHandler = (event) => {
    personalInfo[2] = event.target.value;
  };

  const addressHandler = (event) => {
    personalInfo[3] = event.target.value;
  };

  const mothersNameHandler = (event) => {
    personalInfo[4] = event.target.value;
  };

  const occupationHandler = (event) => {
    personalInfo[5] = event.target.value;
  };
  

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography sx={{ fontSize: "32px", paddingTop: "32px" }}>
          Personal Info
        </Typography>
        <TextField
          sx={{
            width: "75%",
            marginTop: "16px",
          }}
          fullWidth
          id="standard-required"
          onChange={nameHandler}
          value={personalInfo[0]}
          label="Name"
          variant="standard"
        />
        <TextField
          sx={{ width: "75%", marginTop: "24px" }}
          fullWidth
          id="standard-required"
          label="Phone Number"
          type="number"
          value={personalInfo[1]}
          onChange={phoneHandler}
          variant="standard"
        />
        <TextField
          sx={{ width: "75%", marginTop: "24px" }}
          fullWidth
          id="standard-required"
          label="Email"
          value={personalInfo[2]}
          onChange={emailHandler}
          variant="standard"
        />
        <TextField
          sx={{ width: "75%", marginTop: "24px" }}
          fullWidth
          id="standard-required"
          label="Postal Address"
          value={personalInfo[3]}
          onChange={addressHandler}
          variant="standard"
        />
        <TextField
          sx={{ width: "75%", marginTop: "24px" }}
          fullWidth
          id="standard-required"
          label="Mother's Name"
          value={personalInfo[4]}
          onChange={mothersNameHandler}
          variant="standard"
        />
        <TextField
          sx={{ width: "75%", marginTop: "24px" }}
          fullWidth
          id="standard-required"
          label="Occupation"
          value={personalInfo[5]}
          onChange={occupationHandler}
          variant="standard"
        />
      </Box>
    </>
  );
}
