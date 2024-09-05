import { getValidAccessToken, isRefreshTokenValid } from "~/server/helpers";

export default defineEventHandler(async (event) => {
  const { token } = await readBody(event);
  if (isRefreshTokenValid(token)) {
    return {
      access_token: getValidAccessToken(),
      refresh_token: "321",
    };
  }

  throw createError({
    statusCode: 401,
    statusMessage: "You should login",
  });
});
