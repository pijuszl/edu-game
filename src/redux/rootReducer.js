import { combineReducers } from '@reduxjs/toolkit';
import gameReducers from './features/game';

const rootReducer = combineReducers({
    game: gameReducers
});

export default rootReducer;
