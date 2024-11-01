import { combineReducers } from '@reduxjs/toolkit';
import gameReducer from './slices/gameSlice';

const gameReducers = combineReducers({
    game: gameReducer
});

export default gameReducers;
