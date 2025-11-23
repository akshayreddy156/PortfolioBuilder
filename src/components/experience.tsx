import { Box, Card, Grid, Typography } from "@mui/material";
import { details } from "../utils/util";

export default function Experience() {
  return (
    <>
      <div
        id="Experience"
        style={{
          position: "relative",
          marginTop: 3,
          padding: 4,
          backgroundColor: "transparent",
        }}
      >
        <Typography variant="h5">Experience</Typography>
        <Grid size={{ xs: 12, md: 6 }} sx={{ marginTop: 2 }}>
          {details.Experience.map((exp, index) => (
            <Card
              key={index}
              sx={{
                padding: 2,
                marginTop: 2,
                textAlign: "left",
                backgroundColor: "transparent",

                transition:
                  "transform 0.3s ease-in-out, box-shadow 0.3sease-in-out",
                "&:hover": {
                  transform: "skew(2deg)",
                  boxShadow: 6,
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6">{exp.company}</Typography>
                <Typography variant="subtitle2" sx={{ fontStyle: "italic" }}>
                  {exp.duration}
                </Typography>
              </Box>
              <Typography variant="subtitle1">{exp.role}</Typography>
              <Typography variant="body1" sx={{ marginTop: 1 }}>
                {exp.responsibilities}
              </Typography>
            </Card>
          ))}
        </Grid>
      </div>
    </>
  );
}
