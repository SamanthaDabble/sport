import jsonFile from './data.json';


var tempTitles = [];
var tempData = []

function sortJSON(tempTitles, tempData) {

    let xTitles = [];
    let xData = [];
    let objectArray = [];

    //get greatest data points in xData, and re-sort
    //tempTitles and tempData into xData and xTitles

    let arrayLength = tempData.length;
    for (let i = 0; i < arrayLength; i++) {
        var currentMax = Math.max(...tempData);

        var maxStatIndex = tempData.indexOf(currentMax);
        xData[ i ] = currentMax;
        xTitles[ i ] = tempTitles[ maxStatIndex ];

        //Sorting objects into array
        for (let j = 0; j < 32; j++) {
            if (xTitles[ i ] === jsonFile.teams[ j ].team_name) {
                objectArray[ i ] = jsonFile.teams[ j ];
            }
        }

        tempTitles.splice(maxStatIndex, 1);
        tempData.splice(maxStatIndex, 1);

    }
    return [ xTitles, xData, objectArray ];
}

function wins() {
    // let tempTitles = [];
    // let tempData = [];
    var i = 0;
    for (let object in jsonFile.teams) {
        tempTitles[ i ] = jsonFile.teams[ object ].team_name;
        tempData[ i ] = jsonFile.teams[ object ].wins;
        i++;
    }
    let [ topNames, topData, objectArray ] = sortJSON(tempTitles, tempData);
    let wins = {
        "names": topNames,
        "stats": topData,
        "objects": objectArray
    }
    return wins;
}

function losses() {
    // var tempTitles = [];
    // var tempData = [];
    var i = 0;
    for (let object in jsonFile.teams) {
        tempTitles[ i ] = jsonFile.teams[ object ].team_name;
        tempData[ i ] = jsonFile.teams[ object ].losses;
        i++;
    }
    let [ topNames, topData, objectArray ] = sortJSON(tempTitles, tempData);
    let losses = {
        "names": topNames.reverse(),
        "stats": topData.reverse(),
        "objects": objectArray.reverse()
    }
    return losses;
}

function rushing_touchdowns() {
    // var tempTitles = [];
    // var tempData = [];
    var i = 0;
    for (let object in jsonFile.teams) {
        tempTitles[ i ] = jsonFile.teams[ object ].team_name;
        tempData[ i ] = jsonFile.teams[ object ].rushing.total_rushing_touchdowns;
        i++;
    }
    let [ topNames, topData, objectArray ] = sortJSON(tempTitles, tempData);
    let rushing_touchdowns = {
        "names": topNames,
        "stats": topData,
        "objects": objectArray
    }
    return rushing_touchdowns;
}

function passing_touchdowns() {
    // var tempTitles = [];
    // var tempData = [];
    var i = 0;
    for (let object in jsonFile.teams) {
        tempTitles[ i ] = jsonFile.teams[ object ].team_name;
        tempData[ i ] = jsonFile.teams[ object ].passing.total_passing_touchdowns;
        i++;
    }
    let [ topNames, topData, objectArray ] = sortJSON(tempTitles, tempData);
    let passing_touchdowns = {
        "names": topNames,
        "stats": topData,
        "objects": objectArray
    }
    return passing_touchdowns;
}

function rushing_yards() {
    // var tempTitles = [];
    // var tempData = [];
    var i = 0;
    for (let object in jsonFile.teams) {
        tempTitles[ i ] = jsonFile.teams[ object ].team_name;
        tempData[ i ] = jsonFile.teams[ object ].rushing.total_rushing_yards;
        i++;
    }
    let [ topNames, topData, objectArray ] = sortJSON(tempTitles, tempData);
    let rushing_yards = {
        "names": topNames,
        "stats": topData,
        "objects": objectArray
    }
    return rushing_yards;
}

function penalty_yards() {
    // var tempTitles = [];
    // var tempData = [];
    var i = 0;
    for (let object in jsonFile.teams) {
        tempTitles[ i ] = jsonFile.teams[ object ].team_name;
        tempData[ i ] = jsonFile.teams[ object ].total_penalty_yards;
        i++;
    }
    let [ topNames, topData, objectArray ] = sortJSON(tempTitles, tempData);
    let penalty_yards = {
        "names": topNames,
        "stats": topData,
        "objects": objectArray
    }
    return penalty_yards;
}

function passing_yards() {
    // var tempTitles = [];
    // var tempData = [];
    var i = 0;
    for (let object in jsonFile.teams) {
        tempTitles[ i ] = jsonFile.teams[ object ].team_name;
        tempData[ i ] = jsonFile.teams[ object ].passing.total_passing_yards;
        i++;
    }
    let [ topNames, topData, objectArray ] = sortJSON(tempTitles, tempData);
    let passing_yards = {
        "names": topNames,
        "stats": topData,
        "objects": objectArray
    }
    return passing_yards;
}

function total_yards() {
    // var tempTitles = [];
    // var tempData = [];
    var i = 0;
    for (let object in jsonFile.teams) {
        tempTitles[ i ] = jsonFile.teams[ object ].team_name;
        tempData[ i ] = jsonFile.teams[ object ].total_yards;
        i++;
    }
    let [ topNames, topData, objectArray ] = sortJSON(tempTitles, tempData);
    let total_yards = {
        "names": topNames,
        "stats": topData,
        "objects": objectArray
    }
    return total_yards;
}

function interception_takeaways() {
    // var tempTitles = [];
    // var tempData = [];
    var i = 0;
    for (let object in jsonFile.teams) {
        tempTitles[ i ] = jsonFile.teams[ object ].team_name;
        tempData[ i ] = jsonFile.teams[ object ].turnovers.takeaways.interceptions;
        i++;
    }
    let [ topNames, topData, objectArray ] = sortJSON(tempTitles, tempData);
    let interception_takeaways = {
        "names": topNames,
        "stats": topData,
        "objects": objectArray
    }
    return interception_takeaways;
}

function interception_giveaways() {
    // var tempTitles = [];
    // var tempData = [];
    var i = 0;
    for (let object in jsonFile.teams) {
        tempTitles[ i ] = jsonFile.teams[ object ].team_name;
        tempData[ i ] = jsonFile.teams[ object ].turnovers.giveaways.interceptions;
        i++;
    }
    let [ topNames, topData, objectArray ] = sortJSON(tempTitles, tempData);
    let interception_giveaways = {
        "names": topNames,
        "stats": topData,
        "objects": objectArray
    }
    return interception_giveaways;
}

function fumble_recoveries() {
    // var tempTitles = [];
    // var tempData = [];
    var i = 0;
    for (let object in jsonFile.teams) {
        tempTitles[ i ] = jsonFile.teams[ object ].team_name;
        tempData[ i ] = jsonFile.teams[ object ].turnovers.takeaways.fumble_recoveries;
        i++;
    }
    let [ topNames, topData, objectArray ] = sortJSON(tempTitles, tempData);
    let fumble_recoveries = {
        "names": topNames,
        "stats": topData,
        "objects": objectArray
    }
    return fumble_recoveries;
}

function fumble_losses() {
    // var tempTitles = [];
    // var tempData = [];
    var i = 0;
    for (let object in jsonFile.teams) {
        tempTitles[ i ] = jsonFile.teams[ object ].team_name;
        tempData[ i ] = jsonFile.teams[ object ].turnovers.giveaways.fumble_losses;
        i++;
    }
    let [ topNames, topData, objectArray ] = sortJSON(tempTitles, tempData);
    let fumble_losses = {
        "names": topNames,
        "stats": topData,
        "objects": objectArray
    }
    return fumble_losses;
}

function plus_minus() {
    // var tempTitles = [];
    // var tempData = [];

    let i = 0;

    for (let object in jsonFile.teams) {
        tempTitles[ i ] = jsonFile.teams[ object ].team_name;
        let takeaways = jsonFile.teams[ object ].turnovers.takeaways.interceptions + jsonFile.teams[ object ].turnovers.takeaways.fumble_recoveries;
        let giveaways = jsonFile.teams[ object ].turnovers.giveaways.interceptions + jsonFile.teams[ object ].turnovers.giveaways.fumble_losses;
        tempData[ i ] = takeaways - giveaways;
        i++;
    }
    let [ topNames, topData, objectArray ] = sortJSON(tempTitles, tempData);
    let plus_minus = {
        "names": topNames,
        "stats": topData,
        "objects": objectArray
    }
    return plus_minus;
}
function total_touchdowns() {

    var i = 0;
    for (let object in jsonFile.teams) {
        tempTitles[ i ] = jsonFile.teams[ object ].team_name;
        tempData[ i ] = jsonFile.teams[ object ].rushing.total_rushing_touchdowns + jsonFile.teams[ object ].passing.total_passing_touchdowns;
        i++;
    }
    let [ topNames, topData, objectArray ] = sortJSON(tempTitles, tempData);
    let total_touchdowns = {
        "names": topNames,
        "stats": topData,
        "objects": objectArray
    }
    return total_touchdowns;
}

export default {
    wins,
    losses,
    rushing_yards,
    rushing_touchdowns,
    passing_yards,
    passing_touchdowns,
    penalty_yards,
    total_yards,
    interception_takeaways,
    interception_giveaways,
    fumble_recoveries,
    fumble_losses,
    plus_minus,
    total_touchdowns
}

//MAKE RETURNS OBJECSTS INSTEAD OF ARRAYS WITH SPECIFIED NAMES

//ADD FUNCTION THAT RETURNS OBJECTS REORDERED

//Independent functions will grab specific arrays of stats, 
//which will be sent to sortingFunctions.sortJSON() for sorting and returning
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