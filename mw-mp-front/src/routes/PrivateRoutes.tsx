import { lazy } from "react";
import { Route, Navigate, Routes, useLocation } from "react-router-dom";

import { checkPathMatch, paths } from "./helpers";

const AccountSettingPage = lazy(
    () => import("pages/AccountSettingPage/AccountSettingPage")
); // рендерим страницу по необходимости

const PrivateRoutes: React.FC = () => {
    const location = useLocation();

    const isMatch = checkPathMatch(location.pathname, paths);

    return (
        <Routes>
            {/* если в path есть совпадением то попадаем в homepage если совпадения нет то в остальные роуты "*" */}
            <Route
                path={paths.accountSetting}
                element={<AccountSettingPage />}
            />
            {/* если !isMatch то мы уходим в paths.home */}
            <Route
                path="*"
                element={!isMatch ? <Navigate to={paths.home} /> : null}
            />
        </Routes>
    );
};

export default PrivateRoutes;
