import { Box, IconButton, Tooltip } from "@mui/material";
import { details } from "../utils/util";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <>
      <div style={{ position: "relative" }}>
        <Box
          sx={{
            display: "flex",
            position: "relative",
            justifyContent: "center",
          }}
        >
          <Tooltip title="Whatsapp" arrow>
            <IconButton
              aria-label="x"
              href={`https://wa.me/${details.socialMedia.whatsapp}`}
              target="_blank"
            >
              <WhatsAppIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="GitHub" arrow>
            <IconButton
              aria-label="github"
              href={details.socialMedia.github}
              target="_blank"
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="LinkedIn" arrow>
            <IconButton
              aria-label="linkedin"
              href={details.socialMedia.linkedIn}
              target="_blank"
            >
              <LinkedInIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="E-mail" arrow>
            <IconButton
              aria-label="email"
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${details.email}`}
              target="_blank"
            >
              <EmailIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="X" arrow>
            <IconButton
              aria-label="x"
              href={`https://x.com/${details.socialMedia.twitter}`}
              target="_blank"
            >
              <XIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Instagram" arrow>
            <IconButton
              aria-label="Instagram"
              href={`https://www.instagram.com/${details.socialMedia.instagram}`}
              target="_blank"
            >
              <InstagramIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Facebook" arrow>
            <IconButton
              aria-label="facebook"
              href={`https://www.facebook.com/${details.socialMedia.facebook}`}
              target="_blank"
            >
              <FacebookIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </div>
    </>
  );
}
