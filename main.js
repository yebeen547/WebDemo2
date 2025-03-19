document.getElementById('time').innerHTML = new Date().toLocaleString()

function Pink() {
  document.body.style.backgroundColor = 'pink'
}
function Lightblue() {
  document.body.style.backgroundColor = 'Lightblue'
}
function Yellow() {
  document.body.style.backgroundColor = 'Yellow'
}
function Reset() {
  document.body.style.backgroundColor = 'white'
}

function showhtml() {
  document.getElementById('fig').src = 'image/html.png'
  document.getElementById('desc').innerHTML =
    '<b>HTML</b>은 구조적 웹문서를 사용하는 마크업 언어이다.'
}
function showcss() {
  document.getElementById('fig').src = 'image/css.svg'
  document.getElementById('desc').innerHTML =
    '<b>CSS</b>는 HTML 문서의 스타일을 지정하기 위한한 언어이다.'
}
function showjs() {
  document.getElementById('fig').src = 'image/js.png'
  document.getElementById('desc').innerHTML =
    '<b>Javascript</b>는 웹을 위한 프로그래밍 언어이며 웹문서에서 동작을 실행할 수 있있다.'
}
function hide() {
  document.getElementById('fig').src = ''
  document.getElementById('desc').innerHTML = ''
}
