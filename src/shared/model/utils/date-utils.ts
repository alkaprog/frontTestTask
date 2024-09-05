export function getDaysDiff(firstDate: number, secondDate: number) {
  return Math.round((secondDate - firstDate) / (1000 * 60 * 60 * 24));
}
