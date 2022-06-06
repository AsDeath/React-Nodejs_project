import { useTranslation } from 'react-i18next';
import RouteLink from '../../../elements/RouteLink/RouteLink';

export const ProductItem = (data) => {
  const { product, clickBuyButton, popUpLink } = data;
  const {t} = useTranslation();
  return (
    <div
      className={
        "slide-item flex flex-col items-center justify-center border border-transparent rounded p-3 hover:border-yellow-300 transition duration-500 ease-linear"
      }
    >
      <RouteLink to={popUpLink} inner={
      <img 
        className="slide-image max-w-none border-0 rounded cursor-pointer"
        src={product.image}
        alt={product.name}
      />
      } />
      <div className="pizza-name flex w-full justify-between ml-2 mt-1 mb-1">
        <p className="font-serif">{product.name}</p>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="#7d7d7d"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </div>
      <button
        className="buy-button flex justify-between w-full border rounded p-2 border-yellow-300 hover:bg-yellow-400 transition ease-linear"
        onClick={(event) => {
          clickBuyButton(event, product._id);
        }}
      >
        <p className="price font-serif transition ease-linear">
          {product.price + " usd"}
        </p>
        <p className="order flex font-mono transition ease-linear">
          {t("Order")}
          <svg
            className="w-6 h-6"
            fill="white"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
        </p>
      </button>
    </div>
  );
};


export default ProductItem;