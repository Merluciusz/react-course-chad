"use strict";
var sports = ["Golf", "Rugby", "Swiming", "Tennis"];
sports.push("Running");
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var sport = sports_1[_i];
    if (sport == "Swiming") {
        console.log(sport + " << my fav");
    }
    else {
        console.log(sport + " is just a normal sport");
    }
}
