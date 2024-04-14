import styled from "styled-components";
import colors from "const/colors";

export const Image = styled.img`
    margin-bottom: 10px;
    width: 100%;
    height: 165px;
    border-radius: 4px;
    object-fit: scale-down; // маштабирую картинкку по свободному пространству можно еще черз бг сайз, так вроде норм
`;

export const PriceWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

export const LikeWrapper = styled.div`
    cursor: pointer;
    width: 24px;
    height: 24px;
    position: absolute;
    /* top: 0; */
    right: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        pointer-events: none; // выключаю события курсора, могу провалится сквозь значок лайка до блока
    }
`;

export const PriceRegular = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-right: 10px;
    color: ${colors.primary};
`;

export const PriceRegualWhenDiscounted = styled.div`
    text-decoration: line-through;
    color: #999;
    font-size: 15px;
`;

export const PriceDiscounted = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-right: 10px;
    color: ${colors.primary};
`;

export const Title = styled.h3`
    margin-bottom: 5px;
`;

export const Description = styled.div`
    display: flex;
`;

export const Wrapper = styled.div`
    flex: 0 1 18%;
    border: 1px solid ${colors.primary};
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 15px;
    position: relative;
    margin: 5px;
`;
