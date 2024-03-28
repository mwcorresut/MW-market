import { lazy } from "react";
import { Route, Navigate, Routes, useLocation } from "react-router-dom";

import { checkPathMatch, paths } from "./helpers";

const HomePage = lazy(() => import("pages/HomePage")); // рендерим страницу по необходимости

const PublicRoutes: React.FC = () => {
    const location = useLocation();

    const isMatch = checkPathMatch(location.pathname, paths);
    console.log(isMatch);
    return (
        <Routes>
            {/* если в path есть совпадением то попадаем в homepage если совпадения нет то в остальные роуты "*" */}
            <Route path={paths.home} element={<HomePage />} />
            {/* если !isMatch то мы уходим в paths.home */}
            <Route
                path="*"
                element={!isMatch ? <Navigate to={paths.home} /> : null}
            />
        </Routes>
    );
};

export default PublicRoutes;
