var a = 2;

// 함수 선언문이 아닌 함수 표현식
// 함수를 이름 없이 선언하고 자동으로 실행된다면 더 이상적일 것이다.
(function foo() {
  var a = 3;
  console.log(a);
})();

console.log(a);
