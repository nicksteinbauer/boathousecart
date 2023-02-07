import {Suspense, useMemo} from 'react';
import {gql, useShopQuery, useLocalization} from '@shopify/hydrogen';
import { PRODUCT_CARD_FRAGMENT } from '../lib/fragments';
import OtherProductCard from './cards/OtherProductCard.client';

const mockProducts = new Array(12).fill('');

export function ProductSwimlane({
  title = 'Featured Products',
  data = mockProducts,
  count = 12,
  ...props
}) {
  const productCardsMarkup = useMemo(() => {
    // If the data is already provided, there's no need to query it, so we'll just return the data
    if (typeof data === 'object') {
      return <ProductCards products={data} />;
    }

    // If the data provided is a productId, we will query the productRecommendations API.
    // To make sure we have enough products for the swimlane, we'll combine the results with our top selling products.
    if (typeof data === 'string') {
      return (
        <Suspense>
          <RecommendedProducts productId={data} count={count} />
        </Suspense>
      );
    }

    // If no data is provided, we'll go and query the top products
    return <TopProducts count={count} />;
  }, [count, data]);

  return (
    <>
      <div className="">
        {productCardsMarkup}
      </div>
    </>
  );
}

function ProductCards({products}) {
  return (
    <>
      {products.map((product) => (
        <OtherProductCard
          product={product}
          key={product.id}
          className={'snap-start w-80'}
        />
      ))}
    </>
  );
}
