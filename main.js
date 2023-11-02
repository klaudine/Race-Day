var earlyReg = false;
var age = 19;
var raceNumber = Math.floor(Math.random() * 1000);


if (age >= 18 && earlyReg === true) {
    console.log("Your race will start at 9:30AM. Your race number is ", raceNumber + 1000);
} else if (age >= 18 && earlyReg === false) {
    console.log("You will race at 11:00 AM. Your race number is ", raceNumber + 1000);
}
else if (age < 18) {
    console.log("You will race at 12:30 PM. Your race number is ", raceNumber);
}
