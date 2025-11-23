import {
  AppBar,
  Box,
  Button,
  Container,
  Typography,
  IconButton,
} from "@mui/material";
import { details } from "../utils/util";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { getButtonStyle, getAppBarStyle } from "../theme/commonStyles";

export default function Navbar() {
  const { mode, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <AppBar position="fixed" sx={getAppBarStyle(mode)}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography fontSize={20} fontFamily={"serif"}>
                <DeveloperModeIcon sx={{ verticalAlign: "middle" }} />
                {details.name}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Button href="#About" sx={getButtonStyle(mode)}>
                About
              </Button>
              <Button href="#Projects" sx={getButtonStyle(mode)}>
                Projects
              </Button>
              <Button href="#Experience" sx={getButtonStyle(mode)}>
                Experience
              </Button>
              <Button href="#Contact" sx={getButtonStyle(mode)}>
                Contact
              </Button>
              <IconButton onClick={toggleTheme} color="inherit">
                {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Box>
          </Box>
        </Container>
      </AppBar>
    </>
  );
}
