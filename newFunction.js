function sortJSON (tempTitles,tempData) {

    let xTitles = [];
    let xData = [];

    //get 15 greatest data points in xData, and re-sort
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

// teams[TEAMNAME][wins | losses | total_yards | total_penalty_yards | rushing | passing | special_teams | turnovers]
//[total_rushing_yards | total_rushing_touchdowns | total_passing_yards | total_passing_touchdowns | total_kick_return_yards | total_punt_return_yards | takeaways | giveaways][interceptions | fumble_recoveries | fumble_losses]


//Independent functions will grab specific arrays of stats, 
//which will be sent to sortJson() for sorting and returning

let tempTitles = [];
let tempData = [];

/*
Team Wins / Losses
		- Wins DONE
		- Losses DONE

Teams Total Yards AND Total Touchdowns
		- Team Total Rushing Touchdowns
		- Team Total Passing Touchdowns
		- Team Total Rushing Yards
		- Team Total Passing Yards
		- Team Total Yards = Rushing + Passing + Kick Return + Punt Return + Penalty


Team Total Turnovers (Offense & Defense)
		- TakeAways (Interceptions, Fumble Recoveries)
		- Giveaways (Int, Fumble Losses)
*/