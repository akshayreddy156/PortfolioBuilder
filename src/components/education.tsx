import { Box, Card, Grid, Typography } from "@mui/material";
import { details } from "../utils/util";

export default function Experience() {
  return (
    <Box
      sx={{
        position: "relative",
        marginTop: 5,
        backgroundColor: "transparent",
      }}
    >
      <Typography variant="h5">Education</Typography>
      <Grid size={{ xs: 12, md: 6 }} sx={{ marginTop: 2 }}>
        {details.Education.map((edu, index) => (
          <Card
            key={index}
            sx={{
              padding: 1.5,
              marginTop: 1,
              textAlign: "left",
              backgroundColor: "transparent",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "transparent",
              }}
            >
              <Typography variant="h6">{edu.degree}</Typography>
              <Typography variant="subtitle2" sx={{ fontStyle: "italic" }}>
                {edu.branch}
              </Typography>
            </Box>
            <Typography variant="body1">{edu.institution}</Typography>
            <Typography variant="caption">{edu.duration}</Typography>
          </Card>
        ))}
      </Grid>
    </Box>
  );
}
