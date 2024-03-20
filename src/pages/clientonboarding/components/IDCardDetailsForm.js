import { Box, Button, styled, TextField, Typography } from "@mui/material";
import '../components/form.css';

export let idCardDetails = [];

export default function IDCardDetailsForm() {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });


  const idCardNumberHandler = (event) => {
    idCardDetails[0] = event.target.value;
  };

  const birthDateHandler = (event) => {
    idCardDetails[1] = event.target.value;
  };

  const expirationDateHandler = (event) => {
    idCardDetails[2] = event.target.value;
  };

  const idCardAddressHandler = (event) => {
    idCardDetails[3] = event.target.value;
  };


  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography sx={{ fontSize: "32px", paddingTop: "32px" }}>
          ID Card Details
        </Typography>
        <Typography sx={{ fontSize: "16px", paddingTop: "32px" }}>
          ID Card
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "75%",
            border: 1,
            borderColor: "#a9a9a9",
            borderStyle: "dashed",
          }}
        >
          <Button
            component="label"
            key="onboard"
            sx={{
              margin: "32px",
              color: "#000",
              backgroundColor: "#DBFE87",
              textTransform: "none",
              ":hover": {
                bgcolor: "#DBFE87", // theme.palette.primary.main
                color: "#000",
              },
            }}
          >
            Upload ID Card
            <VisuallyHiddenInput type="file" />
          </Button>
        </Box>
        <TextField
          sx={{ width: "75%", marginTop: "24px" }}
          fullWidth
          id="standard-required"
          label="ID Card Number"
          type={"number"}
          inputMode={"numeric"}
          value={idCardDetails[0]}
          onChange={idCardNumberHandler}
          variant="standard"
        />
        <TextField
          sx={{ width: "75%", marginTop: "24px" }}
          fullWidth
          id="standard-required"
          label="Birth Date"
          type="date"
          value={idCardDetails[1]}
          onChange={birthDateHandler}
          InputLabelProps={{ shrink: true}}
          variant="standard"
        />
        <TextField
          sx={{ width: "75%", marginTop: "24px" }}
          fullWidth
          id="standard-required"
          label="Expiration Date"
          type="date"
          value={idCardDetails[2]}
          onChange={expirationDateHandler}
          InputLabelProps={{ shrink: "true"}}
          variant="standard"
        />
        <TextField
          sx={{ width: "75%", marginTop: "24px" }}
          fullWidth
          id="standard-required"
          label="ID Card Address"
          value={idCardDetails[3]}
          onChange={idCardAddressHandler}
          variant="standard"
        />
      </Box>
    </>
  );
}
