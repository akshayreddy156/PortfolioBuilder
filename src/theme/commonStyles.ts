export const getButtonStyle = (mode: "light" | "dark") => ({
  color: "white",
  "&:hover": {
    background: "white",
    color: mode === "dark" ? "#222831" : "#1976d2",
  },
});

export const getAppBarStyle = (mode: "light" | "dark") => ({
  background: mode === "dark" ? "#222831" : "#1976d2",
  padding: "10px 0",
  zIndex: 10,
});
