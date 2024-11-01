import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    level: null,
    characterPosition: null,
    loading: true, // Initially set to true
};

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setLevel(state, action) {
            console.log('Setting level in Redux:', action.payload);
            state.level = action.payload;
            state.loading = false; // Set loading to false after level is set
        },
        setCharacterPosition(state, action) {
            console.log('Setting character position in Redux:', action.payload);
            state.characterPosition = action.payload;
        },
        setLoading(state, action) {
            console.log('Setting loading state:', action.payload);
            state.loading = action.payload;
        },
    },
});

export const { setLevel, setCharacterPosition, setLoading } = gameSlice.actions;
export default gameSlice.reducer;