import { getCountdownValue } from './get-countdown-value';

describe('getCountdownValue', () => {
  test('should return number', () => {
    expect(typeof getCountdownValue()).toBe('number');
  });
});
