export function formatDuration(seconds: number): string {
  const s = Math.round(seconds);
  if (s < 0) throw new Error("Seconds cant be negative");

  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  let result = "";

  if (h > 0) {
    result += `${h}h`;
  }
  if (m > 0) {
    result += `${m}m`;
  }
  if (sec > 0 || result === "") {
    result += `${sec}s`;
  }
  return result;
}