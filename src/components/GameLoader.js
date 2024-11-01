// /src/components/GameLoader.js
"use client";

import { useEffect } from 'react';
import { useGameState } from '@/hooks/useGameState';
import sampleLevel from '@/data/game/levels/level1';

export default function GameLoader() {
    const { loadLevel, updateLoading } = useGameState();

    useEffect(() => {
        updateLoading(true);
        loadLevel(sampleLevel);
    }, [loadLevel, updateLoading]);

    return null;
}