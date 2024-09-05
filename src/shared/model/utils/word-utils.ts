// функция для выбора склоенения в зависимости от количества в русском языке
// https://realadmin.ru/coding/sklonenie-na-javascript.html
export function declOfNum(count: number, words: string[]) {
  return words[(count % 100 > 4 && count % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(count % 10 < 5) ? Math.abs(count) % 10 : 5]]
}