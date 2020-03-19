import { generateConfig } from './snapshot'

test('测试generateConfig 函数', () => {
  expect(generateConfig()).toMatchSnapshot();
})