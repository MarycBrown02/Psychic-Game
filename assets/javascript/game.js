
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
var win = 0;
var loose =0;
var gustLeft=0; 
var gust=0;
//pick random letter
var myArray = letters[Math.floor(Math.random()*letters.length)];
console.log(myArray)

document.onkeyup = (event) =>{
    var kee= event.key.toUpperCase(); 
    console.log(kee)
    
    if(kee === myArray){
        win++;
 console.log(win)
}
if(kee !== myArray){
    loose++;
console.log(loose)
}
}









