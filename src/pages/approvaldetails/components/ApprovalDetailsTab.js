import {
  Box,
  Card,
  styled,
  Table,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import DocumentsTable from "./DocumentsTable";

export default function ApprovalDetailsTab(props) {
  const { clientApprovalDetail } = props;

  const StyledCell = styled(TableCell)(() => ({
    color: "#000000",
    textOverflow: "ellipsis",
    overflow: "hidden",
    padding: "8px",
    fontSize: "12px",
    borderBottom: "none",
  }));

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: "16px",
          justifyContent: "space-between",
        }}
      >
        <Card sx={{ width: "50%", padding: "16px", marginRight: "16px" }}>
          <Typography sx={{ fontSize: "20px", marginBottom: "8px" }}>
            Overview
          </Typography>
          <Table>
            <TableRow>
              <StyledCell>Email</StyledCell>
              <StyledCell>{clientApprovalDetail[0][2]}</StyledCell>
            </TableRow>
            <TableRow>
              <StyledCell>Phone</StyledCell>
              <StyledCell>{clientApprovalDetail[0][1]}</StyledCell>
            </TableRow>
            <TableRow>
              <StyledCell>Birth Date</StyledCell>
              <StyledCell>{clientApprovalDetail[2][2]}</StyledCell>
            </TableRow>
            <TableRow>
              <StyledCell>Postal Address</StyledCell>
              <StyledCell>{clientApprovalDetail[0][3]}</StyledCell>
            </TableRow>
            <TableRow>
              <StyledCell>ID Card Address</StyledCell>
              <StyledCell>{clientApprovalDetail[2][3]}</StyledCell>
            </TableRow>
            <TableRow>
              <StyledCell>Mother's Name</StyledCell>
              <StyledCell>{clientApprovalDetail[0][4]}</StyledCell>
            </TableRow>
            <TableRow>
              <StyledCell>Occupation</StyledCell>
              <StyledCell>{clientApprovalDetail[0][5]}</StyledCell>
            </TableRow>
          </Table>
        </Card>
        <Card sx={{ width: "50%", padding: "16px" }}>
          <Box>
            <Typography sx={{ fontSize: "20px", marginBottom: "16px" }}>
              Bank Details
            </Typography>
            <Table>
              <TableRow>
                <StyledCell>Bank</StyledCell>
                <StyledCell>{clientApprovalDetail[1][0]}</StyledCell>
              </TableRow>
              <TableRow>
                <StyledCell>Bank Account Number</StyledCell>
                <StyledCell>{clientApprovalDetail[1][1]}</StyledCell>
              </TableRow>
              <TableRow>
                <StyledCell>Tax Details</StyledCell>
                <StyledCell>{clientApprovalDetail[1][2]}</StyledCell>
              </TableRow>
            </Table>
          </Box>
        </Card>
      </Box>
      <Box sx={{ paddingLeft: "16px", paddingRight: "16px" }}>
        <Card sx={{ padding: "16px" }}>
          <Typography sx={{ fontSize: "20px", marginBottom: "8px" }}>
            Documents
          </Typography>
          <DocumentsTable />
        </Card>
      </Box>
    </>
  );
}
