import { Content, PageContainer } from "./assets/styles/page";
import Footer from "./components/footer";
import Header from "./components/header";
import ProductContainer from "./components/product-container";

export default function Home() {
  return (
    <>
      <PageContainer>
        <Header/>
        <Content>
          <ProductContainer />
        </Content>
        <Footer/>
      </PageContainer>
    </>
  );
}
