// import { Helmet } from "react-helmet"; // фишка для UX, динамическая смена тегов на страницах. Почитать доку.

import { TestDiv } from "./styled";

const HomePage: React.FC = () => {
    return (
        <>
            {/* <Helmet> */}
            <h1>Главная - MW Marketplace</h1>
            {/* </Helmet> */}

            <TestDiv />
        </>
    );
};

export default HomePage;
