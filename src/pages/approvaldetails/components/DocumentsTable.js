import {
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Box, Container } from "@mui/system";

export default function DocumentsTable() {
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
                <StyledSustainCell>File</StyledSustainCell>
                <StyledSustainCell>Type</StyledSustainCell>
                <StyledSustainCell>Expiry Date</StyledSustainCell>
                <StyledSustainCell>Status</StyledSustainCell>
                <StyledSustainCell>Modified Date</StyledSustainCell>
                <StyledSustainCell>Updated By</StyledSustainCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <StyledCell>ID.01</StyledCell>
                <StyledCell>ID Card</StyledCell>
                <StyledCell>2024-12-12</StyledCell>
                <StyledCell>Active</StyledCell>
                <StyledCell>2024-02-02</StyledCell>
                <StyledCell>Admin</StyledCell>
              </TableRow>
              <TableRow>
                <StyledCell>RPQ.01</StyledCell>
                <StyledCell>Risk Profile Questionnaire</StyledCell>
                <StyledCell>2024-12-12</StyledCell>
                <StyledCell>Active</StyledCell>
                <StyledCell>2024-02-02</StyledCell>
                <StyledCell>Admin</StyledCell>
              </TableRow>
            </TableBody>
          </Table>
        </Container>
      </Box>
    </>
  );
}
