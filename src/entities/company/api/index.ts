import { useRequest } from "shared";
import type { Company } from "entities/company";

export const getCompanyInfo = () => {
  return useRequest<Company>("/api/company-info");
};
