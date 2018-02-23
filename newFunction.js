function display(topNames,topData) {
    document.getElementById('xTitles').innerHTML = topNames;
    document.getElementById('xData').innerHTML = topData;
}

function sortJSON(tempTitles,tempData) {

    let xTitles = [];
    let xData = [];
    let objectArray = [];

    //get greatest data points in xData, and re-sort
    //tempTitles and tempData into xData and xTitles

    arrayLength = tempData.length;
    for (i = 0; i < arrayLength; i++) {
        var currentMax = Math.max(...tempData);
        
        var maxStatIndex = tempData.indexOf(currentMax);
        xData[i] = currentMax;
        xTitles[i] = tempTitles[maxStatIndex];

        //Sorting objects into array
        objectArray[i] = jsonFile.teams[xTitles[i]];

        tempTitles.splice(maxStatIndex,1);
        tempData.splice(maxStatIndex,1);

    }
    display(xTitles,xData);
    return [xTitles,xData,objectArray];
}

function wins() { //FIXED, BUT 'NAMES' RETURNS VALUES AND NOT KEYS
    var i = 0;
    console.log(jsonFile.teams);
    for (team in jsonFile.teams) {
        console.log(jsonFile.teams[team]);
        tempTitles[i] = team;
        tempData[i] = jsonFile.teams[team].wins;
        
        i++;
    }
    let [topNames,topData,objectArray] = sortJSON(tempTitles,tempData);
    let wins = {
        "names":topNames,
        "data":topData,
        "objects":objectArray
    }
    return wins;
}
function losses() {
    var i = 0;
    for (teams in jsonFile) {
        tempTitles[i] = teams;
        tempData[i] = jsonFile[teams].losses;
        
        i++;
    }
    let [topNames,topData,objectArray] = sortJSON(tempTitles,tempData);
    let losses = {
        "names":topNames,
        "data":topData,
        "objects":objectArray
    }
    return losses;
}
function rushing_touchdowns() {
    var i = 0;
    for (teams in jsonFile) {
        tempTitles[i] = teams;
        tempData[i] = jsonFile[teams].rushing.total_rushing_touchdowns;
        i++;
    }
    let [topNames,topData,objectArray] = sortJSON(tempTitles,tempData);
    let rushing_touchdowns = {
        "names":topNames,
        "data":topData,
        "objects":objectArray
    }
    return rushing_touchdowns;
}
function passing_touchdowns() {
    var i = 0;
    for (teams in jsonFile) {
        tempTitles[i] = teams;
        tempData[i] = jsonFile[teams].passing.total_passing_touchdowns;
        i++;
    }
    let [topNames,topData,objectArray] = sortJSON(tempTitles,tempData);
    let passing_touchdowns = {
        "names":topNames,
        "data":topData,
        "objects":objectArray
    }
    return passing_touchdowns;
}
function rushing_yards() {
    var i = 0;
    for (teams in jsonFile) {
        tempTitles[i] = teams;
        tempData[i] = jsonFile[teams].rushing.total_rushing_yards;
        i++;
    }
    let [topNames,topData,objectArray] = sortJSON(tempTitles,tempData);
    let rushing_yards = {
        "names":topNames,
        "data":topData,
        "objects":objectArray
    }
    return rushing_yards;
}
function passing_yards() {
    var i = 0;
    for (teams in jsonFile) {
        tempTitles[i] = teams;
        tempData[i] = jsonFile[teams].passing.total_passing_yards;
        i++;
    }
    let [topNames,topData,objectArray] = sortJSON(tempTitles,tempData);
    let passing_yards = {
        "names":topNames,
        "data":topData,
        "objects":objectArray
    }
    return passing_yards;
}
function total_yards() {
    var i = 0;
    for (teams in jsonFile) {
        tempTitles[i] = teams;
        tempData[i] = jsonFile[teams].rushing.total_rushing_yards + jsonFile[teams].passing.total_passing_yards + jsonFile[teams].special_teams.total_kick_return_yards + jsonFile[teams].special_teams.total_punt_return_yards + jsonFile[teams].total_penalty_yards;
        i++;
    }
    let [topNames,topData,objectArray] = sortJSON(tempTitles,tempData);
    let total_yards = {
        "names":topNames,
        "data":topData,
        "objects":objectArray
    }
    return total_yards;
}
function interception_takeaways() {
    var i = 0;
    for (teams in jsonFile) {
        tempTitles[i] = teams;
        tempData[i] = jsonFile[teams].turnovers.takeaways.interceptions;
        i++;
    }
    let [topNames,topData,objectArray] = sortJSON(tempTitles,tempData);
    let interception_takeaways = {
        "names":topNames,
        "data":topData,
        "objects":objectArray
    }
    return interception_takeaways;
}
function fumble_recoveries() {
    var i = 0;
    for (teams in jsonFile) {
        tempTitles[i] = teams;
        tempData[i] = jsonFile[teams].turnovers.takeaways.fumble_recoveries;
        i++;
    }
    let [topNames,topData,objectArray] = sortJSON(tempTitles,tempData);
    let fumble_recoveries = {
        "names":topNames,
        "data":topData,
        "objects":objectArray
    }
    return fumble_recoveries;
}
function interception_giveaways() {
    var i = 0;
    for (teams in jsonFile) {
        tempTitles[i] = teams;
        tempData[i] = jsonFile[teams].turnovers.giveaways.interceptions;
        i++;
    }
    let [topNames,topData,objectArray] = sortJSON(tempTitles,tempData);
    let interception_giveaways = {
        "names":topNames,
        "data":topData,
        "objects":objectArray
    }
    return interception_giveaways;
}
function fumble_losses() {
    var i = 0;
    for (teams in jsonFile) {
        tempTitles[i] = teams;
        tempData[i] = jsonFile[teams].turnovers.giveaways.fumble_losses;
        i++;
    }
    let [topNames,topData,objectArray] = sortJSON(tempTitles,tempData);
    let fumble_losses = {
        "names":topNames,
        "data":topData,
        "objects":objectArray
    }
    return fumble_losses;
}

let tempTitles = [];
let tempData = [];


//MAKE RETURNS OBJECSTS INSTEAD OF ARRAYS WITH SPECIFIED NAMES

//ADD FUNCTION THAT RETURNS OBJECTS REORDERED

//Independent functions will grab specific arrays of stats, 
//which will be sent to sortJSON() for sorting and returning
/*
Team Wins / Losses
		DONE - Wins DONE
		DONE - Losses DONE

Teams Total Yards AND Total Touchdowns
		DONE - Team Total Rushing Touchdowns DONE
		DONE - Team Total Passing Touchdowns DONE
		DONE - Team Total Rushing Yards DONE
		DONE - Team Total Passing Yards DONE
		DONE - Team Total Yards = Rushing + Passing + Kick Return + Punt Return + Penalty


Team Total Turnovers (Offense & Defense)
		DONE - TakeAways (Interceptions, Fumble Recoveries)
		DONE - Giveaways (Interceptions, Fumble Losses)
*/