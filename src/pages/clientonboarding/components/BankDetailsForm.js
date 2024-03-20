import { Box, TextField, Typography } from "@mui/material";
import '../components/form.css';

export let bankDetails = [];

export default function BankDetailsForm() {
  const bankHandler = (event) => {
    bankDetails[0] = event.target.value;
  };

  const bankAccountHandler = (event) => {
    bankDetails[1] = event.target.value;
  };

  const taxIdHandler = (event) => {
    bankDetails[2] = event.target.value;
  };
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography sx={{ fontSize: "32px", paddingTop: "32px" }}>
          Bank and Finance Details
        </Typography>
        <TextField
          sx={{
            width: "75%",
            marginTop: "16px",
          }}
          fullWidth
          id="standard-required"
          label="Bank"
          value={bankDetails[0]}
          onChange={bankHandler}
          variant="standard"
        />
        <TextField
          sx={{ width: "75%", marginTop: "24px" }}
          fullWidth
          id="standard-required"
          label="Bank Account Number"
          inputMode="numeric"
          type={"number"}
          value={bankDetails[1]}
          onChange={bankAccountHandler}
          variant="standard"
        />
        <TextField
          sx={{ width: "75%", marginTop: "24px" }}
          fullWidth
          id="standard-required"
          label="Tax ID Number"
          inputMode="numeric"
          type={"number"}
          value={bankDetails[2]}
          onChange={taxIdHandler}
          variant="standard"
        />
      </Box>
    </>
  );
}
