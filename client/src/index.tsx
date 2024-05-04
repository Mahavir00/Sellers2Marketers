import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./App";
import { createStore } from "./redux/store/configureStore";

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container!);

root.render(
    <Provider store={createStore({})}>
        <App />
    </Provider>
);

