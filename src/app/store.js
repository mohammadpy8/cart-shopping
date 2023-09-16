import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import numberSlice from "../features/number/numberSlice";
import usersSlice from "../features/users/usersSlice";
import logger from "redux-logger";

const store = configureStore({
    reducer: {
        counter: counterSlice,
        number: numberSlice,
        users: usersSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;
