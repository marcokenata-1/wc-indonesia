import {
  Box,
  Button,
  Card,
  styled,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tabs,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import rupiahDenomination from "../../../util/numbersUtil";
import "../OverviewTab/OverviewTab.css";
import PropTypes from "prop-types";
import { useState } from "react";
import PortfolioTable from "./components/PortfolioTable";
import MockPieChart from "../../../mockdata/MockPieChart";

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

export default function PortfolioDetailsTab(props) {
  const StyledCell = styled(TableCell)(() => ({
    color: "#000000",
    textOverflow: "ellipsis",
    overflow: "hidden",
    padding: "8px",
    fontSize: "12px",
  }));

  const StyledSustainCell = styled(TableCell)(() => ({
    color: "#ffffff",
    backgroundColor: "#172B4D",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    padding: "8px",
    marginLeft: "8px",
    fontSize: "12px",
  }));

  const StyledTab = styled(Tab)({
    "&.Mui-selected": {
      color: "#00A9A5",
    },
    paddingBottom: "2px",
    textTransform: "none",
  });

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Card
          sx={{
            padding: "16px",
            display: "flex",
            flexDirection: "row",
            flexGrow: 1,
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ flexDirection: "column", width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ padding: "4px" }}>Portfolio</Typography>
              <Button
                key="onboard"
                sx={{
                  color: "#000",
                  backgroundColor: "#DBFE87",
                  textTransform: "none",
                  ":hover": {
                    bgcolor: "#DBFE87", // theme.palette.primary.main
                    color: "#000",
                  },
                }}
              >
                + New Portfolio
              </Button>
            </Box>
            <Box
              sx={{
                flexDirection: "row",
                display: "flex",
                flex: 1,
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ flexDirection: "column", width: "30%" }}>
                <MockPieChart />
              </Box>
              <Box sx={{ width: "65%", paddingTop: "4px" }}>
                <Container sx={{ maxHeight: "30%", padding: "16px" }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        <StyledSustainCell>Total Allocation</StyledSustainCell>
                        <StyledSustainCell>100%</StyledSustainCell>
                        <StyledSustainCell>
                          {rupiahDenomination(36500000)}
                        </StyledSustainCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <StyledCell>Reksadana Saham</StyledCell>
                        <StyledCell>36.5%</StyledCell>
                        <StyledCell>{rupiahDenomination(5000000)}</StyledCell>
                      </TableRow>
                      <TableRow>
                        <StyledCell>Cash</StyledCell>
                        <StyledCell>36.5%</StyledCell>
                        <StyledCell>{rupiahDenomination(5000000)}</StyledCell>
                      </TableRow>
                      <TableRow>
                        <StyledCell>SBN Retail</StyledCell>
                        <StyledCell>50%</StyledCell>
                        <StyledCell>{rupiahDenomination(17500000)}</StyledCell>
                      </TableRow>
                      <TableRow>
                        <StyledCell>Lainnya</StyledCell>
                        <StyledCell>23%</StyledCell>
                        <StyledCell>{rupiahDenomination(25000000)}</StyledCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Container>
              </Box>
            </Box>
          </Box>
        </Card>
        <Box
          sx={{
            paddingTop: "16px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Card sx={{ width: "100%" }}>
            <Typography
              sx={{
                paddingLeft: "16px",
                paddingTop: "16px",
              }}
            >
              Asset Distribution
            </Typography>
            <Box sx={{ borderBottom: 0, borderColor: "white", padding: "4px" }}>
              <Tabs
                value={value}
                variant={"standard"}
                onChange={handleChange}
                TabIndicatorProps={{ style: { backgroundColor: "#00A9A5" } }}
              >
                <StyledTab label="Reksadana Saham" {...a11yProps(0)} />
                <StyledTab label="Cash" {...a11yProps(1)} />
                <StyledTab label="SBN Retail" {...a11yProps(2)} />
                <StyledTab label="Lainnya" {...a11yProps(3)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <PortfolioTable />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <PortfolioTable />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <PortfolioTable />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              <PortfolioTable />
            </CustomTabPanel>
          </Card>
        </Box>
      </Box>
    </>
  );
}
