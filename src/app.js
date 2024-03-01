let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  return [managerName, managerAge, currentTeam, trophiesWon];
}
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
}
var formation = [4, 4, 3]
function createFormation(formation) {
  if (formation.length > 0) {
    return {
      defender: formation[0],
      midfield: formation[1],
      forward: formation[2],
    };
  } else {
    return null;
  }
}

try {
  var formationObject = createFormation(formation);
} catch (e) {
}

function filterByDebut(year) {
  let team = [];
  players.forEach(function (player) {
    if (player.debut == year) {
      team.push(player);
    }
  });
  return team;
}

function filterByPosition(position) {
  let team = [];
  players.forEach(function (player) {
    if (player.position == position) {
      team.push(player);
    }
  });
  return team;
}

function filterByAward(awardName) {
  return players.filter((player) =>
    player.awards.some((award) => award.name === awardName)
  );
}

function filterByAwardxTimes(awardName, noOfTimes) {
  return awardName
    ? players.filter(
        (player) =>
          player.awards.filter((award) => award.name === awardName).length ===
          noOfTimes
      )
    : [];
}

function filterByAwardxCountry(awardName, country) {
  let team = players.filter((player) => {
    return player.country === country;
  });

  let selected = team.filter((player) => {
    let hasAward = player.awards.some((award) => {
      return award.name === awardName;
    });
    return hasAward;
  });

  return selected;
}

function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  return players
    ? players.filter(
        (player) =>
          player.team == team &&
          player.age < age &&
          player.awards.length >= noOfAwards
      )
    : [];
}

function SortByAge() {
  players.sort((a, b) => b.age - a.age);
}

function FilterByTeamxSortByNoOfAwards(team) {
  const teamPlayers = players.filter((player) => player.team === team);
  return teamPlayers.sort((a, b) => b.awards.length - a.awards.length);
}

function SortByNamexAwardxTimes(awardName, noOfTimes, country) {
  return awardName
    ? players.filter(
        (player) =>
          player.awards.filter((award) => award.name === awardName).length ===
            noOfTimes && player.country === country
      )
    : [];
}

function SortByNamexOlderThan(age) {
  if (!age) {
    return [];
  } else {
    const filteredPlayers = players.filter((player) => player.age >= age);
    if (filteredPlayers.length < 1) {
      return [];
    } else {
      filteredPlayers.forEach((player) => {
        player.awards.sort((a, b) => b.year - a.year);
      });
    }

    filteredPlayers.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      let comparison = 0;

      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }

      return comparison;
    });

    return filteredPlayers;
  }
}
