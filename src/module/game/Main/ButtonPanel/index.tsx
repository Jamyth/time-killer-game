import { observer } from "mobx-react";
import React from "react";
import { AnimatedButton } from "./AnimatedButton";
import { gameStore } from "../../store";
import "./index.less";

const array = Array.from({ length: 16 });

export const ButtonPanel = observer(() => {
    const isBtnDisabled = gameStore.state !== "play";

    const size = React.useMemo(() => {
        const width = window.innerWidth;
        const padding = 32;
        const gap = 24;

        return (width - padding - gap) / 4;
    }, []);

    return (
        <div className="button-panel">
            {array.map((_, index) => (
                <AnimatedButton
                    onClick={() => gameStore.push(index)}
                    glow={gameStore.currentGlow === index}
                    disabled={isBtnDisabled}
                    size={size}
                    key={index}
                />
            ))}
        </div>
    );
});
