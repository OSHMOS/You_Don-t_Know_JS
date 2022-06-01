// 같은 이름을 가졌지만 다른 용도를 가진 두 확인자가 충돌하는 것을 피할 수 있다.
function foo() {
  function bar(a) {
    i = 3; // changing the 'i' in the enclosing scope's
    // for-loop
    console.log(a + i);
  }

  for (var i = 0; i < 10; i++) {
    bar(i * 2); // oops, ini finite loop ahead!
  }
}

foo();
