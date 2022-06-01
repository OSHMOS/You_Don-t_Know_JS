// 최소 권한의 원칙을 위해 비공개 코드 부분 숨기기
function doSomething(a) {
  function doSomethingElse(a) {
    return a - 1;
  }

  var b;
  b = a + doSomethingElse(a * 2);

  console.log(b * 3);
}

doSomething(2);
