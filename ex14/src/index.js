// Only change code below this line
function myForLoop1(){
    var evenNumbers="";
    for(var i=0; i<5; i++){
        evenNumbers += 2*i;
        if(i<4){
            evenNumbers += ", ";
        }
    }
    return evenNumbers;
}
function myForLoop2(){
    var evenInverseNumbers="";
    for(var i=0; i<5; i++){
        evenInverseNumbers += (8-2*i);
        if(i<4){
            evenInverseNumbers += ", ";
        }
    }
    return evenInverseNumbers;
}
myForLoop1();
myForLoop2();
// Only change code above this line
module.exports = {
    myForLoop1,
    myForLoop2
};