import timer from './timer'
jest.useFakeTimers()

test('测试timer', () => {
  const func = jest.fn()
  timer(func)
  jest.runAllTimers();
  //jest.runOnlyPendingTimers()
  expect(func).toHaveBeenCalledTimes(2)
})