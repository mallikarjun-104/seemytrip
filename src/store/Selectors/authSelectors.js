// src/redux/selectors/authSelectors.js
export const selectName = (state) => state.auth.firstName;
export const selectEmail = (state) => state.auth.email;
export const selectPassword = (state) => state.auth.password;
export const selectConfirmPassword = (state) => state.auth.confirmPassword;
export const selectError = (state) => state.auth.error;
export const selectGoogleUser = (state) => state.auth.googleUser;
export const selectUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectRedirectTo = (state) => state.auth.redirectTo;
