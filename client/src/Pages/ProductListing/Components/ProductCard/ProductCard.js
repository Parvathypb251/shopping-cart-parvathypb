import React from 'react';
import { images } from 'helpers/groupImage';
import './ProductCard.scss';

/**
 * Component for ProductCard
 */
const ProductCard = (props) => {
  const { product } = props;
  return (
    <div className="product-card">
      <p className="product-card-title">{product?.name}</p>
      <img className="product-card-img" src={images[product?.imageURL]} alt="product image" />
      {product?.description ? (
        <p className="product-card-desc">
          {product?.description && product?.description?.length < 108
            ? product?.description
            : `${product?.description?.substring(0, 108)}...`}
        </p>
      ) : null}
      <div className="product-card-price-container">
        <span>{`MRP Rs.${product?.price}`}</span>
        <a class="product-card-btn" href="#">
          {`Buy Now`}
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
