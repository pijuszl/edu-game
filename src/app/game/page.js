"use client";

import { Provider } from "react-redux";
import store from "@/redux/store";
import GameInterface from "@/components/GameInterface";

const GamePage = () => {
    return (
        <Provider store={store}>
            <GameInterface />
        </Provider>
    );
}

export default GamePage;