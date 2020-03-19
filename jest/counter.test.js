import Counter from './counter.js';

let counter = null;

beforeAll(() => {
  counter = new Counter();
})


test('测试Counter 中的addOne()方法', () => {
  counter.addOne();
  expect(counter.number).toBe(1);
})


test('测试Counter 中的mins()方法', () => {
  counter.minusOne();
  expect(counter.number).toBe(0);
})