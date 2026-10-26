export const getToken = () => localStorage.getItem("token");

export const isAuthenticated = () => !!getToken();

export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};
 