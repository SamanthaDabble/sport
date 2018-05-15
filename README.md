HOMEPAGE:

URL - https://samanthadabble.github.io/sport/

ABOUT:

This is a team project for the class Programming fundamentals at Dunwoody College of Technology.

	Group Members & Roles:
	 	- Connor Miller - UI / React Developer
		- Samantha Tait - UX Designer
		- Dan Brakke - Back-End Developer - Sorting Algorithm (Selection Sort)

We have chosen to do our project on NFL stats because we knew that getting stats was easily accessible. This data would benefit anyone who may interested in NFL team statistics. We had pulled all of our data from the FOX Sports Website that they had recorded from the 2017 season. We wanted to display information that could be easily comparable from team to team.

--

**IMPORTANT**

	- MUST bash command - npm install - to download all dependencies (node_modules) in order for this to work
	-

COLOR SCHEME:

   In Order - Grey, Cyan, Light Purple, Light Grey, Red

   #646a73
   #6ed3cf
   #9068be
   #e1e8f0
   #e62739

	'rgba(255,99,132,1)',
	'rgba(54, 162, 235, 1)',
	'rgba(255, 206, 86, 1)',
	'rgba(75, 192, 192, 1)',
	'rgba(153, 102, 255, 1)',
	'rgba(255, 159, 64, 1)'

JSON DATA NOTE: If we grab 16 different pieces of data for 32 teams, we will have 512 data objects.

--

REGULAR SEASON 2017 STATS:

	Team Wins / Losses
	https://www.foxsports.com/nfl/standings?season=2017&seasonType=1&grouping=3
			- Wins
			- Losses

 	Teams Total Yards AND Total Touchdowns
	https://www.foxsports.com/nfl/team-stats?season=2017&week=100&category=YARDAGE&opp=0&sort=2&qualified=1&sortOrder=0
			- Team Total Rushing Touchdowns
			- Team Total Passing Touchdowns
			- Team Total Rushing Yards
			- Team Total Passing Yards
			- Team Total Yards = Rushing + Passing + Kick Return + Punt Return + Penalty


	Team Total Turnovers (Offense & Defense)
	https://www.foxsports.com/nfl/team-stats?season=2017&week=100&category=TURNOVERS&opp=0&sort=1&qualified=1&sortOrder=0
			- TakeAways (Interceptions, Fumble Recoveries)
			- Giveaways (Int, Fumble Losses)

--

JSON FILE SCHEMA:

	NOTE: Name array after what calculation is. Place 'team' object in array when sorting array in best team to worst team OR worst team to best team in that calculated stat.

	{
		[
			{
				team_name: string,
				logo_url: string,		// Can we store png's in JSON? If not, we could store file path.
				wins: number,
				losses: number,
				total_yards: number,
				total_penalty_yards: number,
				rushing: {
					total_rushing_yards: number,
					total_rushing_touchdowns: number
				},
				passing: {
					total_passing_yards: number,
					total_passing_touchdowns: number
				},
				special_teams: {
					total_kick_return_yards: number,
					total_punt_return_yards: number
				},
				turnovers: {
					takeaways: {
						interceptions: number,
						fumble_recoveries: number
					},
					giveaways: {
						interceptions: number,
						fumble_losses: number
					}
				}
			}
		]
	}

--

** We need to give each team an ID **
