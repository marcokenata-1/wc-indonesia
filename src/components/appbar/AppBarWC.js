import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function AppBarWC() {
  const navigate = useNavigate();

  const handleApproval = () => {
    navigate("/client-approval")
  }


  return (
    <AppBar position="static" sx={{ backgroundColor: "#4E8098" }}>
      <Toolbar>
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>
            WC
          </Link>
        </Typography>
        <Box
          sx={{
            flexDirection: "row",
            flexShrink: 0,
            justifyContent: "center",
          }}
        >
          <IconButton onClick={handleApproval}>
            <Typography
              component="div"
              sx={{
                flexGrow: 1,
                fontSize: "12",
                paddingRight: "8px",
                color: "#ffffff",
              }}
            >
              Approvals
            </Typography>
          </IconButton>
          <Button
            key="onboard"
            href="/client-onboarding"
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
            + Onboard a Client
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
