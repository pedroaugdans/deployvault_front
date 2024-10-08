import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import Cookies from "js-cookie";

export interface AuthState {
  access_token: string | null;
  username: string | null;  
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  access_token: Cookies.get("authToken") || null,
  username: Cookies.get("username") || null,
  isAuthenticated: false,
};

/**
 * Represents the authentication slice of the Redux store.
 */
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    /**
     * Sets the authentication token and marks the user as authenticated.
     * @param state - The current state of the authentication slice.
     * @param action - The payload action containing the authentication token.
     */
    setAuth: (state, action: PayloadAction<{access_token: string, username: string}>) => {
      const { access_token, username } = action.payload;
      console.log("setAuth payload");
      console.log(action);

      state.access_token = access_token;
      state.username = username;      
      state.isAuthenticated = true;

      Cookies.set("authToken", access_token, { expires: 1 });
    },
    /**
     * Clears the authentication token and marks the user as not authenticated.
     * @param state - The current state of the authentication slice.
     */
    clearAuth: (state) => {
      state.access_token = null;
      state.isAuthenticated = false;

      Cookies.remove("authToken");
    },
  },
});

export const { setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentToken = (state: RootState) => state.global.auth.access_token;
