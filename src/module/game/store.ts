import { makeAutoObservable, runInAction } from "mobx";

const getRandomNumber = () => {
    return Math.floor(Math.random() * 16);
};

const generatePreset = () => {
    return Array.from({ length: 6 }).map(getRandomNumber);
};

type State = "demo" | "play" | "victory" | "lost";

class GameStore {
    currentGlow: number | null = null;
    state: State = "demo";
    preset: number[] = generatePreset();
    inputs: number[] = [];

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    playPreset() {
        const digitGenerator = this.getNextPresetDigit();
        const timer = window.setInterval(() => {
            const value = digitGenerator();
            if (value !== null) {
                runInAction(() => {
                    this.currentGlow = value;
                });
            } else {
                runInAction(() => {
                    this.state = "play";
                });
                window.clearInterval(timer);
            }
        }, 450);
    }

    push(value: number) {
        this.inputs.push(value);
        this.checkVictoryCondition();
    }

    checkVictoryCondition() {
        if (this.preset.length !== this.inputs.length) {
            return;
        }

        if (this.inputs.every((value, index) => this.preset[index] === value)) {
            this.state = "victory";
        } else {
            this.state = "lost";
        }
    }

    private getNextPresetDigit() {
        let i = 0;

        return () => {
            return this.preset[i++] ?? null;
        };
    }
}

export const gameStore = new GameStore();
