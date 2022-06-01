function foo(a) {
    // b를 현재 스코프에서 찾지 못하기 때문에 오류
    console.log(a + b);
    b = a;
}

foo(2);