import { getValidAccessToken } from "~/server/helpers";

export default defineEventHandler(async (event) => {
  const { login, password } = await readBody(event);

  if (login === "admin" && password === "secret") {
    return {
      access_token: getValidAccessToken(),
      refreshToken: "321",
    };
  }
  throw createError({
    statusCode: 401,
    statusMessage: "Wrong credentials",
  });
});
