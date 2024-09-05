export const isAccessTokenValid = (token: string) => {
  const validToken = getValidAccessToken();
  return token === validToken;
};

export const getValidAccessToken = () => {
  const isCurrentMinuteEven = new Date().getMinutes() % 2 === 0;
  return isCurrentMinuteEven ? "123" : "321";
};

export const isRefreshTokenValid = (token: string) => {
  return true;
};
