import initial from './initial';

const player1 = state => ({ ...state, player1: state.player1 + 1 });
const player2 = state => ({ ...state, player2: state.player2 + 1 });
const server = state => ({ ...state, switchServer: (state.player1+state.player2) % 5 === 0 ? state.switchServer + 1 : state.switchServer});
const serving = state => ({ ...state, serving: state.switchServer % 2 !== 0 ? "player2": "player1"});
const scoring = (state,initial) => {
    const newScore = [
        ...state.score,
        {
            player_1:{
                score:state.player1,
                won: (state.player1 > state.player2 ? true:false)
            },
            player_2:{
                score:state.player2,
                won: (state.player2 > state.player1 ? true:false)
            },
        }
    ];
    return {
        ...initial,
        score:newScore,
    }
}
// called Function Composition: serving(server(player2(state)))
export default (state, action) => {
    switch (action.type) {
        case "INCREMENT_P1": return serving(server(player1(state)));;;
        case "INCREMENT_P2": return serving(server(player2(state)));;;
        case "RESET": return scoring(state,initial);  
        default: return state;
 } };