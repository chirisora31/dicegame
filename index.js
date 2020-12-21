


//Player 1
var randomNumber1 = Math.floor(Math.random() * 6 + 1); //6までの数字をランダムに出す

  if (randomNumber1 === 1) {
  document.querySelector(".img1").setAttribute("src", "images/dice1.png");
} else if (randomNumber1 === 2) {
  document.querySelector(".img1").setAttribute("src", "images/dice2.png");
} else if (randomNumber1 === 3) {
  document.querySelector(".img1").setAttribute("src", "images/dice3.png");
} else if (randomNumber1 === 4) {
  document.querySelector(".img1").setAttribute("src", "images/dice4.png");
} else if (randomNumber1 === 5) {
  document.querySelector(".img1").setAttribute("src", "images/dice5.png");
} else {
document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}


// Player2 　こっちのやり方でもできた)
var randomNumber2 = Math.floor(Math.random() * 6 + 1);　//6つの番号を作成

var randomImgAndNumber2 = "images/dice" + randomNumber2 + ".png";  //ランダムに6枚の画像を出す

var image2 = document.querySelector(".img2");    //docment.querySelectorで変えたい要素を示す

image2.setAttribute("src", randomImgAndNumber2);　　//image2の、src を　randomNumber2にかえるよ



// H1のタイトル
if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Win! <br> 👑　💩";
}

else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Win! <br> 💩　👑";
}
else{
  document.querySelector("h1").innerHTML = "Draw! <br> 😇";
}
