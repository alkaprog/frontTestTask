import { useRequest } from "shared";
import type { Good } from "entities/good";

export const getGoodList = (
  category: number | null | undefined = undefined,
) => {
  const options =
    typeof category === "number"
      ? {
          query: {
            category,
          },
        }
      : undefined;
  return useRequest<Good[]>("/api/goods", options);
};
