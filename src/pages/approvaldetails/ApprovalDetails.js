import styled from "@emotion/styled";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../clientdetails/ClientDetails.css";
import ApprovalDetailsTab from "./components/ApprovalDetailsTab";

function CustomTabPanel(props) {
  const { children, value, index } = props;

  return (
    <>
      {value === index && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            flex: 2,
            minHeight: "100%",
            background: "#EFEEEE",
          }}
        >
          {children}
        </Box>
      )}
    </>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function ApprovalDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const locationParts = location.pathname.split("/");

  var localClientData = JSON.parse(localStorage.getItem("localData") || "[]");

  var idNumber = locationParts[locationParts.length - 1];

  const clientOnboard = localClientData.find((value) => {
    return value[3][0] === Number(idNumber);
  });

  const handleAccept = (data) => {
    localClientData.filter((item) => item === data).at(0)[4] = ["accepted"];
    localStorage.setItem("localData", JSON.stringify(localClientData));
    navigate("/client-approval");
  };

  const handleDeclined = (data) => {
    localClientData.filter((item) => item === data).at(0)[4] = ["declined"];
    localStorage.setItem("localData", JSON.stringify(localClientData));
    navigate("/client-approval");
  };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const StyledTab = styled(Tab)({
    "&.Mui-selected": {
      color: "#00A9A5",
    },
    paddingBottom: "2px",
    textTransform: "none",
  });

  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", height: "100%" }}
        className="wrapper"
      >
        <Box sx={{ padding: "16px 16px 0 16px" }}>
          <Box
            className="clientName"
            sx={{
              padding: "16px 16px 8px 16px",
              fontSize: "32px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {clientOnboard[0][0]}
            <Box>
              {clientOnboard[4].length === 2 && (
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    onClick={() => handleDeclined(clientOnboard)}
                    sx={{
                      textTransform: "none",
                      color: "red",
                      marginRight: "32px",
                    }}
                  >
                    Deny
                  </Button>{" "}
                  <Button
                    onClick={() => handleAccept(clientOnboard)}
                    sx={{
                      textTransform: "none",
                      backgroundColor: "#DBFE87",
                      color: "black",
                    }}
                  >
                    Accept
                  </Button>
                </Box>
              )}
              {clientOnboard[4][0] === "accepted" &&
                clientOnboard[4].length === 1 && (
                  <Box>
                    <Typography>Accepted</Typography>
                  </Box>
                )}
              {clientOnboard[4][0] === "declined" &&
                clientOnboard[4].length === 1 && (
                  <Box>
                    <Typography>Denied</Typography>
                  </Box>
                )}
            </Box>
          </Box>
          <Box sx={{ borderBottom: 0, borderColor: "divider" }}>
            <Tabs
              value={value}
              variant={"standard"}
              onChange={handleChange}
              TabIndicatorProps={{ style: { background: "#00A9A5" } }}
            >
              <StyledTab label="Profile" {...a11yProps(0)} />
            </Tabs>
          </Box>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <ApprovalDetailsTab clientApprovalDetail={clientOnboard} />
        </CustomTabPanel>
      </Box>
    </>
  );
}
