// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

// Shot options
function displayShots() {
    let opponent_checked = document.getElementById("opponent").checked;
    let shot_options = document.getElementById("shot_options");
    let rps_checked = document.getElementById("rps").checked;
    let rpsls_checked = document.getElementById("rpsls").checked;
    if (opponent_checked) {
        shot_options.className = "active";
        if (!rps_checked && !rpsls_checked) {
            alert("Please select a game mode.");
            throw new RangeError(`Must select game mode before going to opponent mode.`);
        } else if (rps_checked) {
            document.getElementById("lizard").className = "inactive";
            document.getElementById("spock").className = "inactive";
        } else {
            document.getElementById("lizard").className = "active";
            document.getElementById("spock").className = "active";
        }
    } else {
        shot_options.className = "inactive";
    }
}


// Navigation buttons

/**
 * Play button
 * Disables everything except result.
 * TODO: Implement logic for playing the game.
 */
function play() {
    if (!document.getElementById("rps").checked && !document.getElementById("rpsls").checked) {
        alert("Please select a game mode.");
        throw new RangeError(`Must select game mode before playing.`);
    }
    document.getElementById("game_options").className = "inactive";
    document.getElementById("shot_options").className = "inactive";
    document.getElementById("result").className = "active";
    document.getElementById("play").className = "inactive";
}

/**
 * Start over button.
 * Sets everything to default values.
 */
function startOver() {
    document.getElementById("game_options").className = "active";
    document.getElementById("shot_options").className = "inactive";
    document.getElementById("result").className = "inactive";
    document.getElementById("play").className = "active";
    
    // Uncheck all buttons
    document.getElementById("rps").checked = false;
    document.getElementById("rpsls").checked = false;
    // Uncheck it and trigger the event for unchecking
    if (document.getElementById("opponent").checked) {
        document.getElementById("opponent").click();
    }
    document.getElementById("rock").checked = false;
    document.getElementById("paper").checked = false;
    document.getElementById("scissors").checked = false;
    document.getElementById("lizard").checked = false;
    document.getElementById("spock").checked = false;
}
