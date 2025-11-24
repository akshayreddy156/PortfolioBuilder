import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useTheme } from "@mui/material/styles";
import emailjs from "@emailjs/browser";
import { details } from "../utils/util";
import { Container } from "@mui/material";
import { getButtonStyle } from "../theme/commonStyles";

export default function Contact() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const serviceId = `${details.emailjs.serviceid}`;
      const templateId = `${details.emailjs.templateId}`;
      const publicKey = `${details.emailjs.publicKey}`;

      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        to_email: `${details.email}`,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSnackbarMessage(
        "Message sent successfully! I'll get back to you soon."
      );
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Failed to send email:", err);
      setSnackbarMessage(
        `Failed to send message. Please try again or email me directly at ${details.email}`
      );
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Container component="main" id="Contact" maxWidth="sm">
        <Box sx={{ py: 8, position: "relative" }}>
          <Typography variant="h5" sx={{ textAlign: "center", py: 2 }}>
            Let's Connect 📩
          </Typography>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              value={form.name}
              onChange={handleChange}
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: isDarkMode
                      ? "rgba(255, 255, 255, 0.3)"
                      : "rgba(0, 0, 0, 0.23)",
                  },
                  "&:hover fieldset": {
                    borderColor: isDarkMode
                      ? "rgba(255, 255, 255, 0.5)"
                      : "rgba(0, 0, 0, 0.4)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: isDarkMode ? "#fff" : "primary.main",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: isDarkMode
                    ? "rgba(255, 255, 255, 0.7)"
                    : "rgba(0, 0, 0, 0.6)",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: isDarkMode ? "#fff" : "primary.main",
                },
                "& .MuiInputBase-input": {
                  color: isDarkMode ? "#fff" : "#000",
                },
              }}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: isDarkMode
                      ? "rgba(255, 255, 255, 0.3)"
                      : "rgba(0, 0, 0, 0.23)",
                  },
                  "&:hover fieldset": {
                    borderColor: isDarkMode
                      ? "rgba(255, 255, 255, 0.5)"
                      : "rgba(0, 0, 0, 0.4)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: isDarkMode ? "#fff" : "primary.main",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: isDarkMode
                    ? "rgba(255, 255, 255, 0.7)"
                    : "rgba(0, 0, 0, 0.6)",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: isDarkMode ? "#fff" : "primary.main",
                },
                "& .MuiInputBase-input": {
                  color: isDarkMode ? "#fff" : "#000",
                },
              }}
            />
            <TextField
              label="Message"
              name="message"
              multiline
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: isDarkMode
                      ? "rgba(255, 255, 255, 0.3)"
                      : "rgba(0, 0, 0, 0.23)",
                  },
                  "&:hover fieldset": {
                    borderColor: isDarkMode
                      ? "rgba(255, 255, 255, 0.5)"
                      : "rgba(0, 0, 0, 0.4)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: isDarkMode ? "#fff" : "primary.main",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: isDarkMode
                    ? "rgba(255, 255, 255, 0.7)"
                    : "rgba(0, 0, 0, 0.6)",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: isDarkMode ? "#fff" : "primary.main",
                },
                "& .MuiInputBase-input": {
                  color: isDarkMode ? "#fff" : "#000",
                },
              }}
            />
            <Button
              variant="contained"
              type="submit"
              sx={
                (getButtonStyle(theme.palette.mode),
                { backgroundColor: "#1976d2" })
              }
              disabled={loading}
            >
              {loading ? "Sending...🔃" : "Send➡️"}
            </Button>
          </form>
        </Box>
      </Container>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
