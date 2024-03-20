import {
  Box,
  Card,
  Divider,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import MockPieChart from "../../../mockdata/MockPieChart";
import rupiahDenomination from "../../../util/numbersUtil";
import "../OverviewTab/OverviewTab.css";

export default function OverviewTab(props) {
  const { clientDetail } = props;

  const StyledCell = styled(TableCell)(() => ({
    color: "#000000",
    textOverflow: "ellipsis",
    overflow: "hidden",
    padding: "4px",
    fontSize: "12px",
    borderBottom: "none",
  }));

  const StyledSustainCell = styled(TableCell)(() => ({
    color: "#000000",
    textOverflow: "ellipsis",
    overflow: "hidden",
    padding: "6px",
    fontSize: "12px",
    borderBottom: "none",
  }));

  return (
    <>
      <Box sx={{ padding: "16px", display: "flex", flexDirection: "column" }}>
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
          <Box sx={{ flexDirection: "column", width: "30%" }}>
            <Typography sx={{ padding: "4px" }}>Asset Overview</Typography>
            <Typography sx={{ padding: "4px" }}>AUM</Typography>
            <Typography sx={{ padding: "4px", fontSize: "32px" }}>
              {rupiahDenomination(clientDetail.aum)}
            </Typography>
            <Typography sx={{ padding: "4px" }}>Cash Penetration</Typography>
            <Typography sx={{ padding: "4px", fontSize: "32px" }}>
              {rupiahDenomination(clientDetail.cashPenetration)}
            </Typography>
            <Typography sx={{ paddingTop: "32px", fontSize: "8px" }}>
              Last Fetched : 27th April 2024
            </Typography>
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Box
            sx={{ alignContent: "flex-end", width: "30%", }}
          >
            <Typography>Total Portfolio Allocation</Typography>
            <MockPieChart />
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Box sx={{ width: "30%" }}>
            <Typography sx={{ paddingTop: "4px" }}>
              Top Performing Fund of The Day
            </Typography>
            <Typography sx={{ padding: "2px", fontSize: "24px" }}>
              Reksadana Saham
            </Typography>
            <Typography
              sx={{
                paddingTop: "1px",
                paddingBottom: "16px",
                fontSize: "32px",
              }}
            >
              {rupiahDenomination(5000)}
            </Typography>
            <Typography sx={{ padding: "2px" }}>
              Top Performing Bond of The Day
            </Typography>
            <Typography sx={{ padding: "2px", fontSize: "24px" }}>
              Reksadana Saham
            </Typography>
            <Typography sx={{ padding: "1px", fontSize: "32px" }}>
              {rupiahDenomination(5000)}
            </Typography>
          </Box>
        </Card>
        <Box
          sx={{
            paddingTop: "16px",
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Card sx={{ marginRight: "16px", width: "33%" }}>
            <Typography sx={{ padding: "16px" }}>Risk Profile</Typography>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <div class="circle">
                <p class="text">{clientDetail.riskProfile}</p>
              </div>
              <Box
                sx={{ display: "flex", flexDirection: "column", width: "70%" }}
              >
                <Typography sx={{ paddingTop: "32px", paddingLeft: "8px" }}>
                  Aggressive
                </Typography>
                <Typography
                  sx={{
                    paddingTop: "1px",
                    paddingLeft: "8px",
                    fontSize: "12px",
                    color: "#A8A8A8",
                  }}
                >
                  Primary goal is to maximize returns, willing to accept
                  significant risk.
                </Typography>
              </Box>
            </Box>
            <Typography sx={{ padding: "16px 16px 8px 16px", fontSize: "8px" }}>
              Last Fetched : 27th April 2024
            </Typography>
          </Card>
          <Card sx={{ marginRight: "16px", width: "33%" }}>
            <Typography sx={{ padding: "16px" }}>
              Knowledge and Experience
            </Typography>
            <Container sx={{ maxHeight: "30%" }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <StyledCell> </StyledCell>
                    <StyledCell>Knowledge</StyledCell>
                    <StyledCell>Experience</StyledCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <StyledCell>Equity</StyledCell>
                    <StyledCell>-</StyledCell>
                    <StyledCell>-</StyledCell>
                  </TableRow>
                  <TableRow>
                    <StyledCell>Fund</StyledCell>
                    <StyledCell>Sufficient</StyledCell>
                    <StyledCell>-</StyledCell>
                  </TableRow>
                  <TableRow>
                    <StyledCell>Bond</StyledCell>
                    <StyledCell>-</StyledCell>
                    <StyledCell>-</StyledCell>
                  </TableRow>
                  <TableRow>
                    <StyledCell>Structured Products</StyledCell>
                    <StyledCell>Sufficient</StyledCell>
                    <StyledCell>Sufficient</StyledCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Typography
                sx={{ marginLeft: "-8px", paddingTop: "20px", fontSize: "8px" }}
              >
                Last Fetched : 27th April 2024
              </Typography>
            </Container>
          </Card>
          <Card sx={{ width: "33%" }}>
            <Typography sx={{ paddingTop:"16px", paddingLeft:"16px"}}>
              Suitability Control
            </Typography>
              <Table
                stickyHeader
                aria-label="sticky table"
                sx={{ padding: "16px", width:"100%" }}
              >
                <TableBody>
                  <TableRow>
                    <StyledSustainCell>Portfolio Risk</StyledSustainCell>
                    <StyledSustainCell>Low</StyledSustainCell>
                  </TableRow>
                  <TableRow>
                    <StyledSustainCell>Investment Guidelines</StyledSustainCell>
                    <StyledSustainCell>Medium</StyledSustainCell>
                  </TableRow>
                  <TableRow>
                    <StyledSustainCell>Tenor Mismatch</StyledSustainCell>
                    <StyledSustainCell>Low</StyledSustainCell>
                  </TableRow>
                  <TableRow>
                    <StyledSustainCell>Concentration Risk</StyledSustainCell>
                    <StyledSustainCell>High</StyledSustainCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Typography
                sx={{ marginLeft: "16px", marginTop: "20px", fontSize: "8px" }}
              >
                Last Fetched : 27th April 2024
              </Typography>
          </Card>
        </Box>
      </Box>
    </>
  );
}
