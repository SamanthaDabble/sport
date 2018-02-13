function sortJSON (statSelected,statSpecific) {
    let jsonMaster = jsonFile;

    let tempTitles = [];
    let tempData = [];
    let xTitles = [];
    let xData = [];

    var i = 0
    //get all team names into xTitles
    for (teams in jsonMaster[statSelected]) {
        tempTitles[i] = teams;
        i++;
    }

    var i = 0;
    //get all team data into xData
    for (teams in jsonMaster[statSelected]) {
        tempData[i] = jsonMaster[statSelected][teams][statSpecific];
        i++;
    }
    console.log('tempTitles = '+tempTitles+'     tempData = '+tempData);

    //get 15 greatest data points in xData, and re-sort
    //tempTitles and tempData into xData and xTitles
    for (i = 0; i < 15; i++) {
        var currentMax = Math.max(...tempData);
        console.log(currentMax);
        var maxStatIndex = tempData.indexOf(currentMax);
        console.log(maxStatIndex);

        xData[i] = currentMax;
        xTitles[i] = tempTitles[maxStatIndex];

        tempTitles.splice(maxStatIndex,1);
        tempData.splice(maxStatIndex,1);
    }
    return [xTitles,xData];
}

//Stats selected to filter by
let statSelected = 'defense';
let statSpecific = 'pointsAllowed';

// jsonFile[STATSELECTED][TEAMSELECTED][TEAMSTATSPECIFICS]

var [xTitles,xData] = sortJSON(statSelected,statSpecific);

console.log('After function, xTitles = ' + xTitles + '\nxData = ' + xData);
document.getElementById('xTitles').innerHTML = xTitles;
document.getElementById('xData').innerHTML = xData;