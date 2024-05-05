import type { ColorSystemOptions } from "@mui/material";

export const LIGHT_PALETTE: ColorSystemOptions = {
  palette: {
    background: {
      default: "#f6f8fa", // Light Gray background
      paper: "#ffffff", // White paper background
    },
    error: {
      contrastText: "#ffffff", // White text on red background
      dark: "#d32f2f", // Dark Red
      light: "#ff5252", // Light Red
      main: "#f44336", // Main Red
    },
    info: {
      contrastText: "#ffffff", // White text on blue background
      dark: "#1976d2", // Dark Blue
      light: "#64b5f6", // Light Blue
      main: "#2196f3", // Main Blue
    },
    primary: {
      contrastText: "#fff",
      dark: "#002f3c",
      light: "#5c819b",
      main: "#0b4664",
    },
    secondary: {
      contrastText: "#fff",
      dark: "#ba005b",
      light: "#ff79b6",
      main: "#ff4081",
    },
    success: {
      contrastText: "#ffffff", // White text on green background
      dark: "#388e3c", // Dark Green
      light: "#81c784", // Light Green
      main: "#4caf50", // Main Green
    },
    warning: {
      contrastText: "#000000", // Black text on orange background
      dark: "#f57c00", // Dark Orange
      light: "#ffd54f", // Light Yellow
      main: "#ff9800", // Main Orange
    },
  },
};

export const DARK_PALETTE: ColorSystemOptions = {
  palette: {
    background: {
      default: "#121212", // Dark background
      paper: "#1f1f1f", // Dark paper background
    },
    error: {
      contrastText: "#ffffff", // White text on red background
      dark: "#d32f2f", // Dark Red
      light: "#ff5252", // Light Red
      main: "#f44336", // Main Red
    },
    info: {
      contrastText: "#ffffff", // White text on blue background
      dark: "#1976d2", // Dark Blue
      light: "#64b5f6", // Light Blue
      main: "#2196f3", // Main Blue
    },
    primary: {
      contrastText: "#ffffff", // White text on metal background
      dark: "#4d4d4d", // Dark Metal
      light: "#b3b3b3", // Light Metal
      main: "#808080", // Main Metal
    },
    secondary: {
      contrastText: "#ffffff", // White text on pink background
      dark: "#c60055", // Dark Pink
      light: "#ff7eb9", // Light Pink
      main: "#ff4081", // Main Pink
    },
    success: {
      contrastText: "#ffffff", // White text on green background
      dark: "#388e3c", // Dark Green
      light: "#81c784", // Light Green
      main: "#4caf50", // Main Green
    },
    warning: {
      contrastText: "#000000", // Black text on orange background
      dark: "#f57c00", // Dark Orange
      light: "#ffd54f", // Light Yellow
      main: "#ff9800", // Main Orange
    },
  },
};
