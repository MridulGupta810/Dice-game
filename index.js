

var random_number1 = Math.random();
random_number1 *= 6;
random_number1 = Math.floor(random_number1)+1;

var randomImage1 = "dice" + random_number1 + ".png";

var imageSource1 = "images/" + randomImage1;


var image1 = document.querySelectorAll("img") [0];

image1.setAttribute("src" , imageSource1 );


var random_number2 = Math.random();
random_number2 *= 6;
random_number2 = Math.floor(random_number2)+1;

var randomImage2 = "dice" + random_number2 + ".png";
var imageSource2 = "images/" + randomImage2;
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src" , imageSource2 );

if ( randomImage1 > randomImage2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!"
}

else if (random_number2 > random_number1){
    document.querySelector("h1").innerHTML = "🚩 Player 2 wins!"
}

else{
    document.querySelector("h1").innerHTML = " OOPS! nobody wins"
}

document.querySelector("footer a").style.color = "#EEEEEE";