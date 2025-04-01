function advancedDebugging() {
    let game = gameObject();
  
    // Iterate over the game object (home and away teams)
    for (let gameKey in game) {
      debugger;  // Pause execution here
      let teamObj = game[gameKey];
  
      // Iterate over team details (players, team name, colors)
      for (let teamKey in teamObj) {
        debugger;  // Pause execution here
        let data = teamObj[teamKey];
        console.log(teamKey, data);  // Print each team detail to console
      }
    }
  }
  
  advancedDebugging();
  