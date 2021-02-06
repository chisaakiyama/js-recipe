function changeTextColor(cName){
  document.getElementById("header-nav").style.color = cName;
}

const maria = document.getElementById("maria")

//マウスをのせた時の処理
maria.onmouseover = function (){
  maria.src = "../images/maria-back-on.jpg.jpg";
}
  
//マウスを離した時の処理
maria.onmouseout = function (){
  maria.src = "../images/maria-back-off.jpg.jpg";
}