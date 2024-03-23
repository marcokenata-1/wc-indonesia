import {
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Container,
  Button,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ClientApproval() {
  const navigate = useNavigate();
  const StyledHeaderCell = styled(TableCell)(() => ({
    color: "#ffffff",
    backgroundColor: "#172B4D",
    textOverflow: "ellipsis",
    overflow: "hidden",
    paddingLeft: "16px",
    whiteSpace: "nowrap",
  }));

  const headers = ["Client ID", "Client Name", "Risk Profile", "Actions"];

  var localClientData = JSON.parse(localStorage.getItem("localData") || "[]");

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

  return (
    <>
      <Typography
        variant="h5"
        component="div"
        sx={{
          flexGrow: 1,
          display: { xs: "none", sm: "block" },
          padding: "16px",
        }}
      >
        Client Approvals
      </Typography>
      <Container maxWidth="100%">
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {headers.map((header, index) => (
                <StyledHeaderCell key={index} align="left">
                  {header}
                </StyledHeaderCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {localClientData.map((data, index) => (
              <TableRow>
                <TableCell>{data[3][0]}</TableCell>
                <TableCell>
                  <Typography
                    sx={{ color: "#00A9A5" }}
                    onClick={() => {
                      navigate("/approval-details/" + data[3][0]);
                    }}
                  >
                    {data[0][0]}
                  </Typography>
                </TableCell>
                <TableCell>{data[3][1]}</TableCell>
                <TableCell sx={{ width: "40%" }}>
                  {data[4].length === 2 && (
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Button
                        onClick={() => handleDeclined(data)}
                        sx={{
                          textTransform: "none",
                          color: "red",
                          marginRight: "32px",
                        }}
                      >
                        Deny
                      </Button>{" "}
                      <Button
                        onClick={() => handleAccept(data)}
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
                  {data[4][0] === "accepted" && data[4].length === 1 && (
                    <Box>
                      <Typography>Accepted</Typography>
                    </Box>
                  )}
                  {data[4][0] === "declined" && data[4].length === 1 && (
                    <Box>
                      <Typography>Denied</Typography>
                    </Box>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </>
  );
}
