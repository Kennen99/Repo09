// Only change code below this line
function inverseWhile(){
    var fiveNumbers="";
    i=0;
    while(i<6){
        fiveNumbers += (5-i);
        if(i<5){
            fiveNumbers += ",";
        }
        i++;
    }
    return fiveNumbers;
}
// Only change code above this line
console.log(inverseWhile());
module.exports = inverseWhile;