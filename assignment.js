// feetToMile
function feetToMile(feet) {
    var mile = feet / 5280;
    mile = mile.toFixed(5);
    return mile;
}



// woodCalculator
function woodCalculator(chair, table, bed) {
    var woodForChair = chair * 1;
    var woodForTable = table * 3;
    var woodForBed = bed * 5;
    var totalWood = woodForChair + woodForTable + woodForBed;
    return totalWood;
}



// brickCalculator
function brickCalculator(flatNumber) {
    if (flatNumber < 11) {
        var brickAmount = 15 * 1000;
    } else if (flatNumber < 21) {
        var brickAmount = 12 * 1000;
    } else {
        var brickAmount = 10 * 1000;
    }
    return brickAmount;
}



// tinyFriend
function tinyFriend(names) {
    var tinyName = names[0];
    for (var i = 0; i < names.length; i++) {
        if (names[i].length < tinyName.length) {
            var tinyName = names[i];
        }

    }
    return tinyName;
}