import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserData = createAsyncThunk(
  "userData/fetchUserData",
  async () => {
    const response = await axios.get("/api/userdata");
    return response.data.userData;
  }
);

type Platform = {
  name: string;
  id: string;
};

interface UserData {
  email: string;
  joinDate: string;
  name: string;
  platforms: Platform[];
  reminders: string[];
  verified: boolean;
  plan: "none" | "Basic" | "Standard" | "Premium";
  onboardingComplete: "platforms" | "pricing" | "completed";
  lastEmailSent: string;
}

interface UserDataState {
  data: null | UserData;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined;
}

const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    data: null,
    status: "idle", // idle | loading | succeeded | failed
    error: undefined,
  } as UserDataState,
  reducers: {
    setUserData: (state, action) => {
      state.data = action.payload;
    },
    clearUserData: (state) => {
      state.data = null;
    },
    userVerifyied: (state) => {
      if (state.data) state.data = { ...state.data, verified: true };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.error = undefined;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setUserData, clearUserData, userVerifyied } =
  userDataSlice.actions;

export default userDataSlice.reducer;
