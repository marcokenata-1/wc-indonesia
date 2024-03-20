import {
  Box,
  styled,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
} from "@mui/material";
import rupiahDenomination from "../../../../util/numbersUtil";
import { Container } from "@mui/system";

export default function PortfolioTable() {
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

  return (
    <>
      <Box sx={{ paddingTop: "4px" }}>
        <Container sx={{ maxHeight: "30%", padding: "16px" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <StyledSustainCell>Symbol</StyledSustainCell>
                <StyledSustainCell>Asset Name</StyledSustainCell>
                <StyledSustainCell>Currency</StyledSustainCell>
                <StyledSustainCell>Allocation</StyledSustainCell>
                <StyledSustainCell>Amount in Currency</StyledSustainCell>
                <StyledSustainCell>Amount in IDR</StyledSustainCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <StyledCell>SBN017.01</StyledCell>
                <StyledCell>Fund 017</StyledCell>
                <StyledCell>IDR</StyledCell>
                <StyledCell>49.5%</StyledCell>
                <StyledCell>10.000.000</StyledCell>
                <StyledCell>{rupiahDenomination(10000000)}</StyledCell>
              </TableRow>
              <TableRow>
                <StyledCell>SBN017.02</StyledCell>
                <StyledCell>Fund 017</StyledCell>
                <StyledCell>IDR</StyledCell>
                <StyledCell>50.5%</StyledCell>
                <StyledCell>15.000.000</StyledCell>
                <StyledCell>{rupiahDenomination(15000000)}</StyledCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow>
                <StyledSustainCell colSpan={3}>
                  Total Allocation
                </StyledSustainCell>
                <StyledSustainCell colSpan={2}>100%</StyledSustainCell>
                <StyledSustainCell>
                  {rupiahDenomination(25000000)}
                </StyledSustainCell>
              </TableRow>
            </TableFooter>
          </Table>
        </Container>
      </Box>
    </>
  );
}
