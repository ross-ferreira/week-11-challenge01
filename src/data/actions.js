export const increment_p1 = () => {
    return {
        type: "INCREMENT_P1",
    }
}

export const increment_p2 = () => {
    return {
        type: "INCREMENT_P2",
    }
}

export const resetButton = () => {
    return {
        type: "RESET",
    }
}

export const startGame = (valueP1,valueP2,valueWinScore,altServe) => {
    return {
        type: "START_GAME",
            player1Name: valueP1,
            player2Name: valueP2,
            winningScore: +valueWinScore,
            alternateServer: +altServe,

    }
}
//value is just the passed value from the form being submitted

