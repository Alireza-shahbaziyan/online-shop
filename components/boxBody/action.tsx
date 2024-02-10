import axios from 'axios';

const addToStore = async (product) => {
  try {
    await axios.post('http://localhost:3000/products', product);
    console.log('Product added to store.json');
  } catch (error) {
    console.error('Error adding product to store.json', error);
  }
};

const ProductComponent = ({ name, details, price }) => {
  const product = { name, details, price };

  return (
    <div>
      <h3>{name}</h3>
      <p>{details}</p>
      <p>{price}</p>
      <button onClick={() => addToStore(product)}>Add to Store</button>
    </div>
  );
};

export default ProductComponent;
