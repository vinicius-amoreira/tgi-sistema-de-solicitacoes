export function GetLastYears(lastYears: number = 5): number[] {
  const years = [];
  let date = new Date();

  for (let i = 1; i <= lastYears; i++) {
    years.push(date.getFullYear());
    date = new Date(date.getFullYear() - 1, 1, 1);
  }

  return years.reverse();
}
