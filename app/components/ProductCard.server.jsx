import { Link, Image, Money } from "@shopify/hydrogen";

import productcard from './ProductCard.module.scss'


export default function ProductCard({ product }) {
  const { priceV2: price, compareAtPriceV2: compareAtPrice } =
    product.variants?.nodes[0] || {};

  const isDiscounted = compareAtPrice?.amount > price?.amount;

  return (
    <Link className={productcard.product} to={`/products/${product.handle}`}>
      <div>
        <div>
          {isDiscounted && (
            <label>
              Sale
            </label>
          )}
          <Image
            className=""
            data={product.variants.nodes[0].image}
            alt="Alt Tag"
          />
        </div>
        <div className={`always-flex justify padding-10 ${productcard.titleBar}`}>
          <div className={`flex-vertical`}>
            <h3>
              {product.title}
            </h3>
          </div>
          <div className={`flex-vertical ${productcard.price}`}>
            <span>
              <Money withoutTrailingZeros data={price} />
              {isDiscounted && (
                <Money
                  className=""
                  withoutTrailingZeros
                  data={compareAtPrice}
                />
              )}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
