import { it, expect, test } from 'vitest';

it('should work', () => {
  expect(true).toBe(true);
});

test('works witn "test" as well', () => {
  expect(false).not.toBe(true);
});

it.fails('should be able to expect a test to fail', () => {
  expect(false).toBe(true);
});

// npx vitest --mode=development --run --reporter=verbose
test.runIf(process.env.NODE_ENV === 'development')(
  'it should run in development',
  () => {
    expect(process.env.NODE_ENV).toBe('development');
  },
);
