import styled from 'styled-components';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;
const NamePriceContainer = styled.div`
  flex: block;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const Product = ({ product }) => {
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <NamePriceContainer>
          <Title>{product.name}</Title>
          <Price>$ {product.price}</Price>
        </NamePriceContainer>
      </Wrapper>
      <InfoContainer>
        <Desc>{product.desc}</Desc>
      </InfoContainer>
    </Container>
  );
};

export default Product;
