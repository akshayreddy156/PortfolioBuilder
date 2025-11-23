import { Container, Typography, Box, Paper, IconButton } from "@mui/material";
import { details } from "../utils/util";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function About() {
  return (
    <Paper
      id="About"
      sx={{
        padding: 2,
        position: "relative",
        display: "flex",
        alignItems: "center",
        backgroundColor: "transparent",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3sease-in-out",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: 6,
        },
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" gutterBottom>
          About Me
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}
        >
          {details.About}
        </Typography>
        <Box
          sx={{
            height: 20,
            justifyContent: "center",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            marginTop: 2,
          }}
        >
          <IconButton
            aria-label="linkedin"
            href={details.socialMedia.linkedIn}
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            aria-label="github"
            href={details.socialMedia.github}
            target="_blank"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            aria-label="email"
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${details.email}`}
            target="_blank"
          >
            <EmailIcon />
          </IconButton>
        </Box>
      </Container>
    </Paper>
  );
}
