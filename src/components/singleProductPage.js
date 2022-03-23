import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

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

const Product = () => {
  const location = useLocation();
  const id = location.params.id();
  const [product, setProduct] = useState({});
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(
          'https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/'
        );
        if (!response.ok) throw Error('No data at This Page');
        const listItem = await response.json();
        setProduct(listItem);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    (async () => await getProducts())();
  }, [id]);

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
