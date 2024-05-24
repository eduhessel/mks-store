'use client';

import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: #0F52BA;
    max-height: 101px;
    color: white;
    text-align: left;
`;

export const HeaderContent = styled.div`
    margin: 0 64px;
    padding: 8px 0;
    display: flex;
    justify-content: space-between;
`;

export const HeaderLogo = styled.img`
    height: 50px;
`;

export const HeaderCart = styled.button`
    width: fit-content;
    height: fit-content;
    background-color: #FFFFFF;
    border-radius: 8px;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    &:hover {
        background-color: #f0f0f0;
    }

    &:active {
        transform: translateY(2px);
        background-color: #E0DEDE;
    }
`

export const HeaderCartContent = styled.div`
    padding: 10px 24px;
    font-size: 18px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 8px;
`

export const HeaderCartIcon = styled.img`
    height: 16px;
    width: 16px;
`