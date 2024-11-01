import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { setLevel, setCharacterPosition, setLoading } from '@/redux/features/game/slices/gameSlice';

export const useGameState = () => {
    const level = useSelector((state) => state.game.game.level);
    const characterPosition = useSelector((state) => state.game.game.characterPosition);
    const loading = useSelector((state) => state.game.game.loading);
    const dispatch = useDispatch();

    const loadLevel = useCallback((newLevel) => {
        dispatch(setLevel(newLevel));  // Sets level data and updates loading to false
        dispatch(setCharacterPosition(newLevel.startingPosition));
    }, [dispatch]);

    const updateCharacterPosition = useCallback((position) => {
        dispatch(setCharacterPosition(position));
    }, [dispatch]);

    const updateLoading = useCallback((status) => {
        dispatch(setLoading(status));
    }, [dispatch]);

    return { level, characterPosition, loading, loadLevel, updateCharacterPosition, updateLoading };
};