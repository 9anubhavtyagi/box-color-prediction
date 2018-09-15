function myFunction(){
    var guess;
    var min=1;
    var max=11;
    guess=prompt("Enter Any Number From 1 to 10");
    var random =Math.floor(Math.random() * (+max - +min)) + +min;
    if(random!=guess){
    document.getElementById("demo").innerHTML ="You lose better luck next time.<br> Random Number is "+random;}
    else{document.getElementById("demo").innerHTML="congratulations you won"}
}