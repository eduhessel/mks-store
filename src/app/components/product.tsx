import { ProductButton, ProductButtonContent, ProductButtonIcon, ProductContainer, ProductContent, ProductContentContainer, ProductDescription, ProductImage, ProductPrice, ProductPriceContainer, ProductTitle, ProductTitleContainer } from "../assets/styles/product";

export default function Product() {
    return(
        <ProductContainer>
            <ProductContent>
                <ProductImage src='./apple-watch.svg' alt='Imagem produto'/>
                <ProductTitleContainer>
                    <ProductTitle>Apple Watch Series 4 GPS</ProductTitle>
                    <ProductPriceContainer>
                        <ProductPrice>
                            R$ 399
                        </ProductPrice>
                    </ProductPriceContainer>
                </ProductTitleContainer>
                <ProductContentContainer>
                    <ProductDescription>
                        Redesigned from scratch and completely revised.
                    </ProductDescription>
                </ProductContentContainer>
                <ProductButton>
                    <ProductButtonIcon src='./shopping-bag.svg' alt='Imagem produto'/>
                    <ProductButtonContent>
                        Comprar
                    </ProductButtonContent>
                </ProductButton>
            </ProductContent>
        </ProductContainer>
    );
}