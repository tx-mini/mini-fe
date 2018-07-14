export function formatTime(timestamp) {
  const t = new Date(timestamp);
  return `2018 ${t.getMonth() +
    1} ${t.getDate()} ${t.getHours()}:${t.getMinutes()} `;
}
