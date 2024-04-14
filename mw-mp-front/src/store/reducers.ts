import { combineReducers } from "@reduxjs/toolkit";

import app from "features/App/reducer";

export default combineReducers({
    // объеденяем все reducer в один большой во избежания большой работы с пропсами можно вытянуть useselector и usedispatch и все передавать из редакса
    app,
});
