import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { details } from "../utils/util";
import PageviewIcon from "@mui/icons-material/Pageview";
export default function Certification() {
  return (
    <Box
      sx={{
        position: "relative",
        marginTop: 5,
        backgroundColor: "transparent",
      }}
    >
      <Typography variant="h5">Achievements & Certifications</Typography>
      <Grid size={{ xs: 12, md: 6 }} sx={{ marginTop: 2 }}>
        {details.Achievements.map((ach, index) => (
          <Card
            key={index}
            sx={{
              marginTop: 1,
              textAlign: "left",
              backgroundColor: "transparent",
            }}
          >
            <CardContent>
              <Typography variant="h6">
                {ach.title}
                <IconButton>
                  <PageviewIcon />
                </IconButton>
              </Typography>
              <Typography variant="subtitle2" sx={{ fontStyle: "italic" }}>
                {ach.by}
              </Typography>
              <Typography variant="body1">{ach.description}</Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Box>
  );
}
