import { configureStore } from "@reduxjs/toolkit";

import reducers from "./reducers";

const store = configureStore({
    // добававляем объект хранилища store
    reducer: reducers,
});

export default store;
