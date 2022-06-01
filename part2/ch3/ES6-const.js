// const는 let과 마찬가지로 블록 스코프를 생성하지만 값이 고정이다.

var foo = true;

if (foo) {
  var a = 2;
  const b = 3; // block-scoped to the containing 'if'
  a = 3; // just fine!
  b = 4; // error!
}

console.log(a); // 3
console.log(b); // ReferenceError
