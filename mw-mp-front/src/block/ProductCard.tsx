import { Link } from "react-router-dom";
import { Button } from "../components/Button";

import { ReactComponent as HeartEmpty } from "img/heart-empty.svg";

import {
    Wrapper,
    LikeWrapper,
    Image,
    PriceWrapper,
    PriceRegular,
    PriceRegualWhenDiscounted,
    PriceDiscounted,
    Title,
    Description,
} from "./styled";

interface ProductCardProps {
    id: number;
    slug?: string;
    img: string;
    priceRegular: number;
    priceDiscount?: number;
    title: string;
    description: string;
    // isLiked: boolean;
    hideLike?: boolean;
}

const ProductCard: React.FC = () => {
    return (
        <Wrapper>
            {!hideLike && (
                <LikeWrapper data-product-id={id}>
                    <HeartEmpty />
                </LikeWrapper>
            )}

            <Link to={`/product/${slug || id}`}>
                <Image src={img} />
            </Link>

            <PriceWrapper>
                {Number.isInteger(priceDiscount) ? (
                    <>
                        {/* цена со скидкой*/}
                        <PriceDiscounted>
                            {priceDiscount} P
                        </PriceDiscounted>{" "}
                        {/* обычная цена перечеркнута*/}
                        <PriceRegualWhenDiscounted>
                            {" "}
                            {priceRegular} P
                        </PriceRegualWhenDiscounted>
                    </>
                ) : (
                    <PriceRegular>{priceRegular} P</PriceRegular>
                )}
            </PriceWrapper>
            {/* доп. заголовок */}
            <Title className="h4">
                <Link to={`/product/${slug || id}`}>{title}</Link>
            </Title>

            <Description>{description}</Description>

            <Button>В корзину</Button>
        </Wrapper>
    );
};

export default ProductCard;
