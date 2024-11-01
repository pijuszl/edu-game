"use client";

import dynamic from "next/dynamic";
import BlocklyEditor from "@/components/BlocklyEditor";
import GameLoader from '@/components/GameLoader';
import { useGameState } from '@/hooks/useGameState';

const GameView = dynamic(() => import('@/components/GameView'), { ssr: false });

const GameInterface = () => {
    const { loading } = useGameState();

    return (
        <div className="flex h-screen">
            <div className="w-1/2 border-r-2 border-black">
                <BlocklyEditor />
            </div>
            <div className="w-1/2">
                <GameLoader />
                {!loading ? <GameView /> : <div className="h-full bg-lime-500 flex items-center justify-center">Loading Level...</div>}
            </div>
        </div>
    );
}

export default GameInterface;