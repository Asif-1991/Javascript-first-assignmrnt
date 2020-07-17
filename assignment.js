
//feetToMile
function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile(126720);
console.log(result);

//woodCalculator
function woodCalculator(chair, table, bed){
    var chairCount = chair * 3;
    var tableCount = table * 5; 
    var bedCount = bed * 8;
    var totalWood = chair + table + bed;
    return totalWood;
}
var woodResult = woodCalculator(3, 5, 8);
console.log(woodResult);

//brickCalculator
function brickCalculator()

//tinyFriend
function tinyFriend('Mashrur', 'Tanvir', 'Munna', 'Asif', 'jim') {
    var smallest = numbers[0];
    for(var i = 0; i < numbers.lenght; i++){
        var currentNumber = numbers[i];
        if(currentNumber> smallest){
            small = currentNumber;
        }
    }
    return smallestNumber;
}
var smallestNumber = smallestNumber(['Mashrur', 'Tanvir', 'Munna', 'Asif', 'jim']);
console.log(smallestNumber);