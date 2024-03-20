import {
  Box,
  Button,
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function RiskProfileForm() {
  const [value, setValue] = useState("yes");
  const [value1, setValue1] = useState("yes");
  const [value2, setValue2] = useState("yes");
  const [value3, setValue3] = useState("yes");
  const [value4, setValue4] = useState("yes");
  const [value5, setValue5] = useState("yes");

  const [submit, setSubmit] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleChange1 = (event) => {
    setValue1(event.target.value);
  };
  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };
  const handleChange3 = (event) => {
    setValue3(event.target.value);
  };
  const handleChange4 = (event) => {
    setValue4(event.target.value);
  };
  const handleChange5 = (event) => {
    setValue5(event.target.value);
  };

  const handleSubmit = () => {
    setSubmit(1);
  };

  return (
    <>
      {submit === 0 && (
        <Card
          sx={{
            padding: "16px",
            marginLeft: "16px",
            marginRight: "32px",
            marginTop: "32px",
            maxHeight: "80%",
            overflowY: "scroll",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography>Risk Profile Question</Typography>
            <FormControl>
              <FormLabel
                id="demo-controlled-radio-buttons-group"
                sx={{ marginTop: "16px" }}
              >
                You tend to prefer more capital gain in a short term.
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>

              <FormLabel
                id="demo-controlled-radio-buttons-group"
                sx={{ marginTop: "16px" }}
              >
                You tend to prefer more capital gain in a long term.
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value1}
                onChange={handleChange1}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>

              <FormLabel
                id="demo-controlled-radio-buttons-group"
                sx={{ marginTop: "16px" }}
              >
                You tend to prefer more capital gain in a period of time.
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value2}
                onChange={handleChange2}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>

              <FormLabel
                id="demo-controlled-radio-buttons-group"
                sx={{ marginTop: "16px" }}
              >
                You tend to prefer more sustainability in a short term.
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value3}
                onChange={handleChange3}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>

              <FormLabel
                id="demo-controlled-radio-buttons-group"
                sx={{ marginTop: "16px" }}
              >
                You tend to prefer riskier investments.
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value4}
                onChange={handleChange4}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>

              <FormLabel
                id="demo-controlled-radio-buttons-group"
                sx={{ marginTop: "16px" }}
              >
                Your income is more than 10 million rupiahs per month.
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value5}
                onChange={handleChange5}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
            <Button
              onClick={handleSubmit}
              sx={{
                marginRight: "16px",
                color: "#00A9A5",
                textTransform: "none",
              }}
            >
              {"Submit"}
            </Button>
          </Box>
        </Card>
      )}

      {submit === 1 && (
        <>
          <Card
            sx={{
              padding: "16px",
              marginLeft: "16px",
              marginRight: "32px",
              marginTop: "32px",
              height: "120%",
              overflowY: "scroll",
              display: "flex",
              flexDirection: "column",
            }}
          >
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
              <Typography>Congratulations!</Typography>
              <Typography sx={{ marginTop: "32px" }}>
                Risk Profile Questions are Completed
              </Typography>
            </Box>
          </Card>
        </>
      )}
    </>
  );
}
