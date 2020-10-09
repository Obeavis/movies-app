export function formatNumber(value) {
  if (!Number(value) && value !== 0) return "";
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function showDate(date, language) {
  return new Date(date).toLocaleDateString(language, {
    dateStyle: "long",
  });
}
