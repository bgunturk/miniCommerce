import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import SearchItem from './searchItem';
import styled from 'styled-components';
// import axios from 'axios';

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

export default function Products() {
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState(results);
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const { filterType } = useParams();

  //Todo : Get items by category id
  //Todo: Display items in product component
  // Todo : Fix css
  //Todo : Link to product item

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(
          'https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/'
        );
        if (!response.ok) throw Error('No data at KuwaitProject');
        const listItems = await response.json();
        setResults(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    (async () => await getProducts())();
  }, []);

  useEffect(() => {
    const getProductsByFilter = async (filterType) => {
      try {
        const response = await fetch(
          `https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${filterType}`
        );
        if (!response.ok) throw Error('No data at {nextFilter}');
        const listItems = await response.json();
        setResults(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    (async () => await getProductsByFilter(filterType))();
  }, [filterType]);

  const getProductsByFilter = (e) => {
    const filterType = e.target.value;
    history.push(
      `https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${filterType}`
    );
  };

  return (
    <div className="main">
      <div className="filtercontainer">
        <div>
          <SearchItem search={search} setSearch={setSearch} />
        </div>
        <div>
          <FilterContainer>
            <Filter>
              <Select name="category" onChange={getProductsByFilter}>
                <Option disabled>Categoriess</Option>
                <Option>electronics</Option>
                <Option>furnitures</Option>
                <Option>mens-clothings</Option>
                <Option>womens-clothings</Option>
                <Option>accessories</Option>
              </Select>
            </Filter>
          </FilterContainer>
        </div>
      </div>
      {results.map((result) => {
        return (
          <div key={result.id}>
            ;<div>{result.name}</div>;<div>{result.price}</div>;
            <div>{filter.avatar}</div>;
          </div>
        );
      })}
    </div>
  );
}
