import { createTheme } from "@mui/material/styles";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

// Async thunk to fetch theme from the server
export const getMainTheme = createAsyncThunk("theme/fetchTheme", async () => {
  return darkTheme; // Expecting { mode: 'light' or 'dark' }
});

// Async thunk to update theme on the server
export const updateTheme = createAsyncThunk(
  "theme/updateTheme",
  async (mode) => {
    const theme = mode === "dark" ? darkTheme : lightTheme;
    return theme;
  }
);

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: lightTheme,
    mode: "light",
    status: "idle",
  },
  reducers: {
    toggleTheme: (state) => {
      // Toggle theme locally
      state.mode = state.mode === "light" ? "dark" : "light";
      state.theme = state.mode === "light" ? lightTheme : darkTheme;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMainTheme.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMainTheme.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.mode = action.payload.mode;
        state.theme = action.payload.mode === "light" ? lightTheme : darkTheme;
      })
      .addCase(getMainTheme.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(updateTheme.fulfilled, (state, action) => {
        state.mode = action.payload.mode;
        state.theme = action.payload.mode === "light" ? lightTheme : darkTheme;
      });
  },
});

export const { toggleTheme } = themeSlice.actions;
export const selectTheme = (state) => state.theme.theme;
export const selectMode = (state) => state.theme.mode;
export default themeSlice.reducer;
