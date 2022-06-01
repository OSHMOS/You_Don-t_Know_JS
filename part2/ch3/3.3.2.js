// 함수 표현식 즉시 호출하기
var a = 2;

(function foo() {
  var a = 3;
  console.log(a);
})();
/*
(function foo() {
  var a = 3;
  console.log(a);
}()); 
*/

console.log(a);

/*
var a = 2;

(function IIFE() {
  var a = 3;
  console.log(a);
  console.log(global.a);
})(window);

console.log(a);
 */
