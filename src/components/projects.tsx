import {
  Box,
  Card,
  Chip,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { details } from "../utils/util";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
export default function Projects() {
  return (
    <>
      <div style={{ position: "relative", marginTop: 4 }}>
        <Typography variant="h5">Project(s)</Typography>

        <Paper
          id="Projects"
          sx={{
            position: "relative",
            margin: 1,
            padding: 4,
            maxWidth: 1400,
            backgroundColor: "transparent",
          }}
        >
          <Grid container spacing={2} sx={{ marginTop: 1 }}>
            {details.projects.map((project, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <Card
                  sx={{
                    padding: 2,
                    backgroundColor: "transparent",
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3sease-in-out",
                    "&:hover": {
                      transform: "rotate(1deg) scale(1.02)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <Typography variant="h6">
                    {project.name}
                    <IconButton
                      href={project.gitLink}
                      target="_blank"
                      sx={{ marginLeft: 1 }}
                    >
                      <GitHubIcon sx={{ verticalAlign: "middle" }} />
                    </IconButton>
                    {project.live && (
                      <IconButton
                        href={project.live}
                        target="_blank"
                        sx={{ marginLeft: 1 }}
                      >
                        <LinkIcon sx={{ verticalAlign: "middle" }} />
                      </IconButton>
                    )}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ marginTop: 1 }}
                  ></Typography>
                  <Typography variant="body2" sx={{ marginTop: 1 }}>
                    {project.description}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      flexWrap: "wrap",
                      marginTop: 2,
                    }}
                  >
                    {project.techUsed.map((tech, techIndex) => (
                      <Chip key={techIndex} label={tech} />
                    ))}
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </div>
    </>
  );
}
