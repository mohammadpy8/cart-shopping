import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import numberSlice from "../features/number/numberSlice";
import userSlice from "../features/user/userSlice";
import logger from "redux-logger";

const store = configureStore({
    reducer: {
        counter: counterSlice,
        number: numberSlice,
        users: userSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;
