import { Grid, Typography } from "@mui/material";
import { details } from "../utils/util";
import { Typewriter } from "react-simple-typewriter";
import developerImage from "../assets/developer.svg";

export default function Profile() {
  return (
    <Grid
      container
      spacing={4}
      sx={{
        paddingX: { xs: 2, md: 8 },
        maxWidth: "1400px",
        margin: "0 auto",
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{
          textAlign: { xs: "center", md: "left" },
          paddingLeft: { xs: 0, md: 4 },
        }}
      >
        <Typography variant="h5" gutterBottom>
          Hello - I'm
        </Typography>
        <Typography
          variant="h2"
          gutterBottom
          sx={{ whiteSpace: "nowrap", fontWeight: "bold" }}
        >
          {details.name}
        </Typography>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ whiteSpace: "nowrap", color: "#1976d2" }}
        >
          <Typewriter
            words={details.Role}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </Typography>
      </Grid>
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={developerImage}
          alt="profile"
          style={{
            width: "100%",
            maxWidth: "500px",
            height: "auto",
          }}
        />
      </Grid>
    </Grid>
  );
}
