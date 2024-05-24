'use client';

import styled from "styled-components";

export const ProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 16px;
    height: 100%;
    margin: 32px 200px;
    @media (min-width: 1367px) {
        margin: 32px 400px;
    }
`

export const ProductContainer = styled.header`
    background-color: #fff;
    min-height: 285px;
    min-width: 218px;
    max-width: 218px;
    border-radius: 8px;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.5);
`;

export const ProductContent = styled.div`
    margin: 14px 14px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    align-items: center;
`;

export const ProductImage = styled.img`
    width: 111px;
    height: 138px;
`;

export const ProductTitleContainer = styled.div`
    display: flex;
`

export const ProductTitle = styled.h2`
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
`;

export const ProductPriceContainer = styled.div`
    min-width: fit-content;
    background-color: #373737;
    padding: 4px 7px;
    display: flex;
    border-radius: 5px;
    text-align: center;
    align-items: center;
    justify-content: center;
`;

export const ProductPrice = styled.p`
    color: #fff;
    font-weight: 700;
`

export const ProductContentContainer = styled.div`
    text-align: left;
`

export const ProductDescription = styled.h4`
    font-size: 10px;
    line-height: 12px;
    color: #373737;
`

export const ProductButton = styled.div`
    background-color: #0F52BA;
    border: none;
    color: white;
    width: 100%;
    padding: 7px 0;
    text-align: center;
    text-decoration: none;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 8px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #2D7CF5;
    }

    &:active {
        background-color: #86B4FD;
        transform: translateY(2px);
    }
`

export const ProductButtonIcon = styled.img`
    width: 12px;
    height: 13px;
`;

export const ProductButtonContent = styled.span`
    margin: 0px 8px;
`