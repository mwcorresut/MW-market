import styled from "styled-components";
export const PageWrapper = styled.div`
    padding: 40px;
`;

export const ProductGroup = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    > *:first-child {
        margin-bottom: 10px;
    }
`;

export const ProductGroupContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    > * {
        margin-bottom: 20px;
    }
`;
