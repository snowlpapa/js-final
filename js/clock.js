const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  //호출할 때 당시의 시간을 알려줌
  const hours = String(date.getHours()).padStart(2, "0");
  //date.getHours() => 시간을 불러옴
  //padStart(2, "0") => 최소 글자수 *문자여야 함. (2)를 만족시키지 못하면 앞에 모자란 만큼 "0"을 채워넣음
  //padStart는 문자만 인식하기 때문에 숫자로 넘어오는 것을 문자로 바꿔줘야 함.String()은 그 역활을 하고 있음.
  const Minutes = String(date.getMinutes()).padStart(2, "0");
  const Seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${Minutes}:${Seconds}`;
}

getClock();
//왜 한번 실행을 시키냐? => setInterval(getClock, 1000);함수가 1초 뒤에 실행되기 때문에 첫 1초 전에는 시계가 00:00:00으로 보임
//따라서 미리 함수를 실행시켜 알맞은 시간을 보여주고 1초 뒤 시간이 넘어가면
//setInterval이 넘어간 시간을 1초마다 getClock을 호출해서 시간을 보여주는 것임.
setInterval(getClock, 1000);
//setInterval(함수를, x밀리초만큼) 반복실행함.
//따라서 초 단위까지 시간을 보여주기 때문에 1000ms로 반복을 해야만 시계를 정상작동 시킬 수 있음.
