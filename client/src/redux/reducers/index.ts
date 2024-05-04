import { simpleSlice } from "./simpleSlice";

const { reducer: isMock } = simpleSlice("isMock", false);

export const reducer = {
    isMock,
};
