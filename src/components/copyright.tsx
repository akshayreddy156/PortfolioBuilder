import { AppBar, Box, Typography } from "@mui/material";

export default function Copyright() {
  return (
    <AppBar
      sx={{
        position: "relative",
        paddingX: 0,
        paddingY: 2,
        marginX: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        marginRight: "calc(-50vw + 50%)",
        backgroundColor: "#393E46",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          paddingX: 2,
          gap: 0.5,
        }}
      >
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
        >
          Made with ❤️ in India. &copy; 2025 All rights reserved.
        </Typography>
      </Box>
    </AppBar>
  );
}
