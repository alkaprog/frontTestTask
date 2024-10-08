export default defineEventHandler((event) => {
  const goods = [
    {
      id: 1,
      name: "Наследие",
      creationDate: 1725297644009,
      viewsCount: 255,
      photo:
        "https://avatars.mds.yandex.net/i?id=4f7586d49edaa427e07a8819562fc284_l-5248434-images-thumbs&n=13",
      price: 100,
      status: "boosted",
      category: 2,
    },
    {
      id: 2,
      name: "Наследие",
      creationDate: 1725297644009,
      viewsCount: 255,
      photo:
        "https://gas-kvas.com/grafic/uploads/posts/2023-10/1696520592_gas-kvas-com-p-kartinki-kvadratnie-3.jpg",
      price: 100,
      status: "hidden",
      category: 1,
    },
    {
      id: 3,
      name: "Наследие",
      creationDate: 1725297644009,
      viewsCount: 255,
      photo:
        "https://gas-kvas.com/grafic/uploads/posts/2023-10/1696520592_gas-kvas-com-p-kartinki-kvadratnie-3.jpg",
      price: 100,
      status: "default",
      category: 1,
    },
  ];
  const { category } = getQuery(event);

  return category
    ? goods.filter((good) => good.category === Number(category))
    : goods;
});
