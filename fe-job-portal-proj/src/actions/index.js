export const login = (payload) => ({
  type: "LOGIN",
  payload,
});

export const logout = () => ({
  type: "LOGOUT",
});

export const setAdminInfo = (payload) => ({
  type: "SET_ADMIN_INFO",
  payload,
});