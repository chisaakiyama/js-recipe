const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0

const countUp = function(){
  // count を更新
  count += 1
  // count を秒単位にして表示
  display.textContent = count/1
}

button.onclick = function(){
  // 10ms ごとに countUp を実行するように登録する
  setInterval(countUp,50)
  button.textContent = "check"
}

for (; display=100;){
}