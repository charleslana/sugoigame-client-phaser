export function isDaytimeNow(): boolean {
  const now = new Date();
  const hour = now.getHours();
  return hour >= 6 && hour < 18;
}
