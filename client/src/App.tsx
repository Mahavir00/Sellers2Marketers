import { FluentProvider, makeStyles, webLightTheme } from "@fluentui/react-components";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Intro } from "./components/Intro";
const useStyles = makeStyles({
    rooted: { display: "flex", flexDirection: "column" },
});
export const App: React.FC = () => {
    const styles = useStyles();

    return (
        <FluentProvider className={styles.rooted} theme={webLightTheme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Intro />} />
                </Routes>
            </BrowserRouter>
        </FluentProvider>
    );
};
