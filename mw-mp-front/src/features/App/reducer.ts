import { createSlice, Dispatch } from "@reduxjs/toolkit";

import { AppThunk, Reducer } from "store/types";
import { AppStore } from "./types";

// нужно вносить изменения в store из любого места приложения

const initialState: AppStore = {
    isLogged: false,
    isAppLoading: false,
};

export const isLoggedReducer: Reducer<AppStore, boolean> = (state, action) => {
    state.isLogged = action.payload;
};

export const isAppLoadingReducer: Reducer<AppStore, boolean> = (
    state,
    action
) => {
    state.isAppLoading = action.payload;
};

const appSlice = createSlice({
    name: "APP",
    initialState,
    reducers: {
        isLogged: isLoggedReducer,
        isAppLoading: isAppLoadingReducer,
    },
});

const { isLogged: setIsLoggedAction, isAppLoading: setIsAppLoadingAction } =
    appSlice.actions; // экшенкриэйторы, (type, payload)

export const setIsLogged =
    (isLogged: boolean): AppThunk =>
    (dispatch: Dispatch) => {
        dispatch(setIsLoggedAction(isLogged));
    };

export const setIsAppLoading =
    (isAppLoading: boolean): AppThunk =>
    (dispatch: Dispatch) => {
        dispatch(setIsAppLoadingAction(isAppLoading));
    };

export default appSlice.reducer;
