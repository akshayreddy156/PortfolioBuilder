import { Paper, Typography, Box } from "@mui/material";
import { details } from "../utils/util";
import htmlIcon from "../assets/html-icon.svg";
import cssIcon from "../assets/css-icon.svg";
import jsIcon from "../assets/js-icon.svg";
import reactIcon from "../assets/react-icon.svg";
import javaIcon from "../assets/java.svg";
import mysqlIcon from "../assets/mysql-icon.svg";
import githubIcon from "../assets/github.svg";
import springbootIcon from "../assets/icons8-spring-boot.svg";
import copilotIcon from "../assets/githubcopilot.svg";
import muiIcon from "../assets/material-ui-svgrepo-com.svg";

const iconMap: Record<string, string> = {
  Java: javaIcon,
  "Spring Boot": springbootIcon,
  MySQL: mysqlIcon,
  HTML: htmlIcon,
  CSS: cssIcon,
  JavaScript: jsIcon,
  React: reactIcon,
  Git: githubIcon,
  Copilot: copilotIcon,
  MUI: muiIcon,
};

const skills = details.Skills.map((skillName) => ({
  name: skillName,
  icon: iconMap[skillName] || "",
}));

export default function Skills() {
  return (
    <div style={{ position: "relative", marginTop: 20 }}>
      <Typography variant="h5">Skills</Typography>

      <Paper
        id="Skills"
        sx={{
          position: "relative",
          padding: 1,
          backgroundColor: "transparent",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: { xs: 2, sm: 3, md: 4 },
            marginTop: 2,
            flexWrap: "nowrap",
            overflowX: "auto",
            paddingBottom: 2,
            "&::-webkit-scrollbar": {
              height: "8px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "rgba(255,255,255,0.1)",
              borderRadius: "10px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "rgba(255,255,255,0.3)",
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.5)",
              },
            },
          }}
        >
          {skills.map((skill) => (
            <Box
              key={skill.name}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minWidth: { xs: "60px", sm: "80px", md: "100px" },
                flex: "0 0 auto",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                style={{
                  width: "clamp(40px, 8vw, 60px)",
                  height: "clamp(40px, 8vw, 60px)",
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  marginTop: 1,
                  fontSize: { xs: "0.75rem", sm: "0.875rem" },
                }}
              >
                {skill.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Paper>
    </div>
  );
}
