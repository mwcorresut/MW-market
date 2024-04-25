import {
    ThunkAction,
    Action,
    CaseReducer,
    PayloadAction,
} from "@reduxjs/toolkit";

import store from "store";

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
export type Dispatch = typeof store.dispatch;
export type Reducer<T, K = any> = CaseReducer<T, PayloadAction<K>>;
