import React from 'react'

const ProductItem = React.memo(({ product, onAddToCart }) => {
  console.log(`Rendering: ${product.name}`);
  return (
    <div>
      <img src={product.image} alt={product.name} width={300} height={200} />
      <h2>{product.name}</h2>
      <p>
        <strong>Price</strong> - $ {product.price}
      </p>
      <p>
        <strong>Category</strong> - {product.category}
      </p>
      <button onClick={() => onAddToCart(product)}>Add to cart</button>
    </div>
  );
})

export default ProductItem;