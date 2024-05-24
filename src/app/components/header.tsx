'user client';

import React from 'react';
import { HeaderCart, HeaderCartContent, HeaderCartIcon, HeaderContainer, HeaderContent, HeaderLogo } from '../assets/styles/header';

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo src='/logo-mks-sistemas.svg'  alt='Nome da Empresa'/>
        <HeaderCart>
          <HeaderCartContent>
            <HeaderCartIcon src='/cart-icon.svg' alt='Ícone carrinho'/>
            0
          </HeaderCartContent>
        </HeaderCart>
      </HeaderContent>
    </HeaderContainer>
  );
};