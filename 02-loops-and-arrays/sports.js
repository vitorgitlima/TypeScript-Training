var sportsOne = ["Golf", "Cricket", "Tennis", "Swimming"];
// Let's use the simplied for loop
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var teamSport = sportsOne_1[_i];
    if (teamSport == "Cricket") {
        console.log(teamSport + "<< My Favorite!");
    }
    else
        console.log(teamSport);
}
