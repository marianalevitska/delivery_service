import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';

import { addProducts } from 'redux/shops/shops-slice';
import s from './productCard.module.css';

const ProductCard = ({ url, text, name, price }) => {
  const dispatch = useDispatch();

  const addToCart = data => {
    dispatch(addProducts(data));
  };

  const resPrice =
    price > 0 ? price : Math.floor(Math.random() * (300 - 30 + 1) + 30);
  return (
    <div className={s.productCard}>
      <img src={url} alt={`Product ${name}`} className={s.product_img} />
      <div className={s.under_product}>
        <h3 className={s.product_title}>{name}</h3>
        <p className={s.product_text}>{text}</p>
        <p className={s.product_price}>{resPrice}</p>
        <button
          type="button"
          className={s.orderBtn}
          onClick={() => addToCart({ url, text, name, price: resPrice })}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

ProductCard.defaultProps = {
  price: 0,
};

ProductCard.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default ProductCard;
