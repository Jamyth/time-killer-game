import React from "react";
import ReactDOM from "react-dom/client";
import { Game } from "./module/game";
import "./css/normalize.css";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- haha
const container = document.getElementById("app")!;
const root = ReactDOM.createRoot(container);
const element = React.createElement(Game);
root.render(element);
