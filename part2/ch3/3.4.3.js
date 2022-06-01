// 블록 스코프
// '최소 권한 노출의 원칙'을 확장하여 정보를 함수 안에 숨기고,
// 나아가 정보를 코드 블록 안에 숨기기 위한 도구다.

var foo = true;

if (foo) {
  {
    // <- explicit block
    let bar = foo * 2; // let은 약간 비명시적, let은 호이스팅의 효과를 받지 않는다.
    bar = something(bar);
    console.log(bar);
  }
}

console.log(bar); // ReferenceError
