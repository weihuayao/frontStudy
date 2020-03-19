jest.mock('./class')
import Util from './class'
import demoFunction from './classDemo'

test('测试demoFunctions', () => {
  demoFunction();
  expect(Util).toHaveBeenCalled();
  console.log(Util.mock)
  expect(Util.mock.instances[0].a).toHaveBeenCalled();
  expect(Util.mock.instances[0].b).toHaveBeenCalled();
})