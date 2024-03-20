import styled from "@emotion/styled";
import { Box, Tab, Tabs } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { mockClientList } from "../../mockdata/MockClientList";
import "../clientdetails/ClientDetails.css";
import OverviewTab from "./OverviewTab/OverviewTab";
import PortfolioDetailsTab from "./PortfolioDetailsTab/PortfolioDetailsTab";

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

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ClientDetails() {
  const location = useLocation();
  const locationParts = location.pathname.split("/");
  const clientDetail = mockClientList.find(
    (value) => value.clientId === locationParts[locationParts.length - 1]
  );

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
            sx={{ padding: "16px 16px 8px 16px", fontSize: "32px" }}
          >
            {clientDetail.clientName}
          </Box>
          <Box sx={{ borderBottom: 0, borderColor: "divider" }}>
            <Tabs
              value={value}
              variant={"standard"}
              onChange={handleChange}
              TabIndicatorProps={{ style: { background: "#00A9A5" } }}
            >
              <StyledTab label="Overview" {...a11yProps(0)} />
              <StyledTab label="Portfolio Details" {...a11yProps(1)} />
              <StyledTab label="Profile" {...a11yProps(2)} />
              <StyledTab label="Investment Plans" {...a11yProps(3)} />
            </Tabs>
          </Box>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <OverviewTab clientDetail={clientDetail} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <PortfolioDetailsTab clientDetail={clientDetail} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Profile
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          Investment Plans
        </CustomTabPanel>
      </Box>
    </>
  );
}
