import { isAccessTokenValid } from "~/server/helpers";

export default defineEventHandler(async (event) => {
  const { authorization } = getHeaders(event);
  const token = authorization?.slice(7);

  if (authorization && isAccessTokenValid(token as string)) {
    return {
      id: 1,
      name: "Alex",
      city: "Ростов-на-Дону",
      photo:
        "https://avatars.mds.yandex.net/i?id=4f7586d49edaa427e07a8819562fc284_l-5248434-images-thumbs&n=13",
    };
  }
  throw createError({
    statusCode: 401,
    statusMessage: "You should login",
  });
});
