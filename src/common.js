// return the token from the session storage
export const getToken = () => localStorage.getItem('token') || null;
