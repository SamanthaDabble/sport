function sortJSON(tempTitles,tempData) {

    let xTitles = [];
    let xData = [];

    //get greatest data points in xData, and re-sort
    //tempTitles and tempData into xData and xTitles

    arrayLength = tempData.length;
    for (i = 0; i < arrayLength; i++) {
        var currentMax = Math.max(...tempData);
        
        var maxStatIndex = tempData.indexOf(currentMax);
        

        xData[i] = currentMax;
        xTitles[i] = tempTitles[maxStatIndex];

        tempTitles.splice(maxStatIndex,1);
        tempData.splice(maxStatIndex,1);
    }
    return [xTitles,xData];
}

function wins() {
    var i = 0;
    for (teams in jsonFile) {
        tempTitles[i] = teams;
        tempData[i] = jsonFile[teams].wins;
        
        i++;
    }
    let [topNames,topData] = sortJSON(tempTitles,tempData);
    return [topNames,topData];
}
function losses() {
    var i = 0;
    for (teams in jsonFile) {
        tempTitles[i] = teams;
        tempData[i] = jsonFile[teams].losses;
        
        i++;
    }
    let [topNames,topData] = sortJSON(tempTitles,tempData);
    return [topNames,topData];
}
function rushing_touchdowns() {
    var i = 0;
    for (teams in jsonFile) {
        tempTitles[i] = teams;
        tempData[i] = jsonFile[teams].rushing.total_rushing_touchdowns;
        i++;
    }
    let [topNames,topData] = sortJSON(tempTitles,tempData);
    return [topNames,topData];
}
function passing_touchdowns() {
    var i = 0;
    for (teams in jsonFile) {
        tempTitles[i] = teams;
        tempData[i] = jsonFile[teams].passing.total_passing_touchdowns;
        i++;
    }
    let [topNames,topData] = sortJSON(tempTitles,tempData);
    return [topNames,topData];
}
function rushing_yards() {
    var i = 0;
    for (teams in jsonFile) {
        tempTitles[i] = teams;
        tempData[i] = jsonFile[teams].rushing.total_rushing_yards;
        i++;
    }
    let [topNames,topData] = sortJSON(tempTitles,tempData);
    return [topNames,topData];
}
function passing_yards() {
    var i = 0;
    for (teams in jsonFile) {
        tempTitles[i] = teams;
        tempData[i] = jsonFile[teams].passing.total_passing_yards;
        i++;
    }
    let [topNames,topData] = sortJSON(tempTitles,tempData);
    return [topNames,topData];
}
function total_yards() {
    var i = 0;
    for (teams in jsonFile) {
        tempTitles[i] = teams;
        tempData[i] = jsonFile[teams].rushing.total_rushing_yards + jsonFile[teams].passing.total_passing_yards + jsonFile[teams].special_teams.total_kick_return_yards + jsonFile[teams].special_teams.total_punt_return_yards + jsonFile[teams].total_penalty_yards;
        i++;
    }
    let [topNames,topData] = sortJSON(tempTitles,tempData);
    return [topNames,topData];
}
function interception_takeaways() {
    var i = 0;
    for (teams in jsonFile) {
        tempTitles[i] = teams;
        tempData[i] = jsonFile[teams].turnovers.takeaways.interceptions;
        i++;
    }
    let [topNames,topData] = sortJSON(tempTitles,tempData);
    return [topNames,topData];
}
function fumble_recoveries() {
    var i = 0;
    for (teams in jsonFile) {
        tempTitles[i] = teams;
        tempData[i] = jsonFile[teams].turnovers.takeaways.fumble_recoveries;
        i++;
    }
    let [topNames,topData] = sortJSON(tempTitles,tempData);
    return [topNames,topData];
}
function interception_giveaways() {
    var i = 0;
    for (teams in jsonFile) {
        tempTitles[i] = teams;
        tempData[i] = jsonFile[teams].turnovers.giveaways.interceptions;
        i++;
    }
    let [topNames,topData] = sortJSON(tempTitles,tempData);
    return [topNames,topData];
}
function fumble_losses() {
    var i = 0;
    for (teams in jsonFile) {
        tempTitles[i] = teams;
        tempData[i] = jsonFile[teams].turnovers.giveaways.fumble_losses;
        i++;
    }
    let [topNames,topData] = sortJSON(tempTitles,tempData);
    return [topNames,topData];
}

// teams[TEAMNAME][wins | losses | total_yards | total_penalty_yards | rushing | passing | special_teams | turnovers]
//[total_rushing_yards | total_rushing_touchdowns | total_passing_yards | total_passing_touchdowns | total_kick_return_yards | total_punt_return_yards | takeaways | giveaways][interceptions | fumble_recoveries | fumble_losses]

//Independent functions will grab specific arrays of stats, 
//which will be sent to sortJson() for sorting and returning

let tempTitles = [];
let tempData = [];

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