export const getCountdownValue = (): number => {
  const start = Date.now();
  const end = Date.parse('2024-02-15T07:00:00Z');
  const diffMilliseconds = end - start;
  const diffDays = Math.ceil(diffMilliseconds / 86400000);
  return +String(diffDays);
}
