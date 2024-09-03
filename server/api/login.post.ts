let validAccess = "123";
const validRefresh = "321";

const swapTokens = () => {
  validAccess = validAccess.split("").reverse().join("");
};
export default defineEventHandler(async (event) => {
  const { login, password } = await readBody(event);

  if (login === "admin" && password === "secret") {
    setTimeout(() => swapTokens(), 3000);
    return {
      access_token: validAccess,
      refreshToken: validRefresh,
    };
  }
});
