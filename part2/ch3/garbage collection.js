// 가비지 콜렉션

var someReallyBigData = {};

process(someReallyBigData);

var btn = document.getElementById('my_button');

btn.addEventListener(
  'click',
  function click(evt) {
    console.log('button clicked');
  }
  /* capturingPhase = false) */
);

// ----

function process(data) {
  // do something interesting
}

// 명시적으로 블록을 선언하여 변수의 영역을 한정하는 것은 효과적인 코딩 방식이다.
// anything declared inside this block can go away after!
{
  let someReallyBigData = {};

  process(someReallyBigData);
}

var btn = document.getElementById('my_button');

btn.addEventListener(
  'click',
  function click(evt) {
    console.log('button clicked');
  }
  /* capturingPhase = false */
);
