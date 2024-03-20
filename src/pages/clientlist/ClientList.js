import {
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { mockClientList } from "../../mockdata/MockClientList";
import rupiahDenomination from "../../util/numbersUtil";

export default function ClientList() {
  const navigate = useNavigate();
  const StyledHeaderCell = styled(TableCell)(() => ({
    color: "#ffffff",
    backgroundColor: "#172B4D",
    textOverflow: "ellipsis",
    overflow: "hidden",
    paddingLeft: "16px",
    whiteSpace: "nowrap",
  }));

  const headers = [
    "Client ID",
    "Client Name",
    "Risk Profile",
    "AUM",
    "Cash Penetration",
    "Unrealised P/L (Past 6 months)",
    "Unrealised P/L (overall)",
  ];

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
        Client List
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
            {mockClientList.map((item) => (
              <TableRow>
                <TableCell>{item.clientId}</TableCell>
                <TableCell>
                  <Typography
                    sx={{ color: "#00A9A5" }}
                    onClick={() => {navigate('/client/'+item.clientId)}}
                  >
                    {item.clientName}
                  </Typography>
                </TableCell>
                <TableCell>{item.riskProfile}</TableCell>
                <TableCell>{rupiahDenomination(item.aum)}</TableCell>
                <TableCell>
                  {rupiahDenomination(item.cashPenetration)}
                </TableCell>
                <TableCell>
                  {rupiahDenomination(item.unrealised6Months)}
                </TableCell>
                <TableCell>
                  {rupiahDenomination(item.unrealisedOverall)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </>
  );
}
