
//feetToMile
function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile(126720);
console.log(result);

//woodCalculator
function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3; 
    var bedCount = bed * 5;
    var totalWood = chair + table + bed;
    return totalWood;
}
var woodResult = woodCalculator(1, 3, 5);
console.log(woodResult);

//brickCalculator
function brickCalculator(floor){
    if(floor >=0 <= 10){
        var perFeet = 1000;
        sumOfBricks = 10*15;
        var sumOfBricks = perFeet*sumOfBricks;
        
    }

    else if(floor => 11 && hieght <= 20){
        var perFeet = 1000;
        sumOfBricks = 10*12;
        var sumOfBricks = perFeet*sumOfBricks;
     
    }
    else if(floor >= 21 && hieght <= 30){
        var perFeet = 1000;
        sumOfBricks = 10*10;
        var sumOfBricks = perFeet*sumOfBricks;
       
    }  
    return totalSumOfBricks;
}




//tinyFriend
function tinyFriend(name){
    var tinyName = name[0];
    for(var i = 0; i < name.lenght; i++){
        var currentName = name[i];
        if(tinyName.length < currentName.lenght){
            currentName = tinyName;
        }
    }
    return currentName;
}
var smallestName = tinyFriend(["Mashrur", "Tanvir", "Munna", "Asif", "jim"]);
console.log(smallestName);
