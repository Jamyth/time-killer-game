import { observer } from "mobx-react";
import React from "react";
import { ButtonPanel } from "./ButtonPanel";
import { gameStore } from "../store";
import "./index.less";

export const Main = observer(() => {
    React.useEffect(() => {
        gameStore.playPreset();
    }, []);

    return (
        <div className="page">
            <h1>{gameStore.state}</h1>
            <ButtonPanel />
        </div>
    );
});
