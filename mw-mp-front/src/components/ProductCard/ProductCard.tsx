import { Link } from "react-router-dom";
import Button from "../Button/Button";

import like from "img/Likes/like.svg";

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
// import { useCallback } from "react";

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

const ProductCard: React.FC<ProductCardProps> = ({
    id,
    slug,
    img,
    priceRegular,
    priceDiscount,
    title,
    description,
    // isLiked,
    hideLike,
}) => {
    // Добавляем\убираем из избранного

    // const dispatch = useDispatch();

    // const handleFavorites = useCallback(
    //     (e: React.MouseEvent<HTMLElement>) => {
    //         const { productId } = e.currentTarget.dataset;

    //         dispatch(
    //             !isLiked
    //                 ? addToFavorites(+productId!)
    //                 : removeFromFavorites(+productId!)
    //         );
    //     },
    //     [dispatch, isLiked]
    // );

    return (
        <Wrapper>
            {!hideLike && (
                <LikeWrapper data-product-id={id}>
                    <img src={like} alt="Like" />
                </LikeWrapper>
            )}

            <Link to={`/product/${slug || id}`}>
                <Image src={img} />
            </Link>

            <PriceWrapper>
                {Number.isInteger(priceDiscount) ? (
                    <>
                        {/* цена со скидкой*/}
                        <PriceDiscounted>{priceDiscount} P</PriceDiscounted>
                        {/* обычная цена перечеркнута*/}
                        <PriceRegualWhenDiscounted>
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
