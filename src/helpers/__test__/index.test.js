import { convertISODateToTimeFormat } from '..';

describe('convertISODateToTimeFormat', () => {
  test('Convert ISO date to Time format helper', () => {
    const date = convertISODateToTimeFormat('2021-06-07T18:21:21.735Z');
    expect(date).toBe('7/6/2021 20:21');
  });
});

