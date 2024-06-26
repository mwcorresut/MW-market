// import { Helmet } from "react-helmet"; // фишка для UX, динамическая смена тегов на страницах. Почитать доку.
import ProductCard from "components/ProductCard/ProductCard";
import { dummyProducts } from "pages/dummyProducts";
import { PageWrapper } from "App.styled";
import { ProductGroup, ProductGroupContainer } from "./styled";

const HomePage: React.FC = () => {
    return (
        <>
            {/* <Helmet> */}

            {/* </Helmet> */}

            <PageWrapper>
                <h1>Главная - MW Marketplace</h1>
                <ProductGroup>
                    <h2>Товары</h2>

                    <ProductGroupContainer>
                        {dummyProducts.map((p) => (
                            <ProductCard {...p} key={p.id} />
                        ))}
                    </ProductGroupContainer>
                </ProductGroup>
            </PageWrapper>
        </>
    );
};

export default HomePage;
