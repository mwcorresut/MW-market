import { Suspense } from "react";
// import HomePage from "pages/HomePage";

import PublicRoutes from "routes/PublicRoutes";
import PrivateRoutes from "routes/PrivateRoutes";

// import AccountSettingPage from "pages/AccountSettingPage/AccountSettingPage";

const App = () => {
    return (
        <Suspense fallback={"Loading..."}>
            <PublicRoutes />
            <PrivateRoutes />
        </Suspense>
    );
};

export default App;
