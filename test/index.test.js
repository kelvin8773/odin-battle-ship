import { start } from '../src/index';

test('Start Point', () => {
  expect(start()).toBe('Hello');
});