// let은 for 반복문에서 특히 유용하게 사용할 수 있다.
{
  let j;
  for (j = 0; j < 10; j++) {
    let i = j; // re-bound for each iteration!
    console.log(i);
  }
}
