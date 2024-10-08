import { isAccessTokenValid } from "~/server/helpers";

export default defineEventHandler((event) => {
  const { authorization } = getHeaders(event);
  const token = authorization?.slice(7);

  if (authorization && isAccessTokenValid(token as string)) {
    return [
      {
        id: 1,
        name: "Василий Копушин",
        phone: "+79232233442",
        description:
          "Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текс",
        rating: 4.3,
        reviewsCount: 17,
        isApproved: true,
        photo:
          "https://gas-kvas.com/grafic/uploads/posts/2023-10/1696520592_gas-kvas-com-p-kartinki-kvadratnie-3.jpg",
        price: 100,
      },
      {
        id: 2,
        name: "Василий Копушин",
        phone: "+79232233442",
        description:
          "Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текс",
        rating: 4.3,
        reviewsCount: 17,
        isApproved: true,
        photo:
          "https://gas-kvas.com/grafic/uploads/posts/2023-10/1696520592_gas-kvas-com-p-kartinki-kvadratnie-3.jpg",
        price: 100,
      },
    ];
  }
  throw createError({
    statusCode: 401,
    statusMessage: "You should login",
  });
});
