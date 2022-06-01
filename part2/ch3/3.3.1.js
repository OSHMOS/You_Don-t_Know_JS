// 익명 vs 기명
// 익명
setTimeout(function () {
  console.log('I waited 1 second!');
}, 1000);

// 기명
setTimeout(function timeoutHandler() {
  console.log('I waited 1 second!');
}, 1000);
