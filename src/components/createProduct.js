import { useState } from 'react';
import './createProduct.css';
import { useDispatch } from 'react-redux';

export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleCat = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleClick = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Create Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <input
            name="title"
            type="text"
            placeholder="Title"
            onChange={handleChange}
          />
        </div>

        <div className="addProductItem">
          <input
            name="desc"
            type="text"
            placeholder="Description"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <input
            name="title"
            type="text"
            placeholder="Image Url"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input type="text" placeholder="Categories" onChange={handleCat} />
        </div>
        <div className="addProductItem">
          <input
            name="price"
            type="number"
            placeholder="Price"
            onChange={handleChange}
          />
        </div>

        <button onClick={handleClick} className="addProductButton">
          SUBMIT
        </button>
      </form>
    </div>
  );
}
