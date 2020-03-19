
//自动执行priomise 生成器
function co(gen) {
  let it = gen()
  return new Promise(function (resolve, reject) {
    !function next(lastValue) {
      let { value, done } = it.next(lastValue);
      if (done) {
        resolve(value);
      } else {
        value.then(next, reject);
      }
    }
  })
}