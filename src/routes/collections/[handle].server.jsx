import {
    gql,
    useShopQuery,
    useRouteParams,
    useServerAnalytics,
    ShopifyAnalyticsConstants,
    Seo,
} from "@shopify/hydrogen";
import { Layout } from "../../components/Layout.server";
import ProductCard from "../../components/ProductCard.server";
import { Suspense } from "react";

import Header from "../../components/header/Header.client";


export default function Collection() {
  const { handle } = useRouteParams();

  const {
    data: { collection },
  } = useShopQuery({
    query: QUERY,
    variables: {
      handle,
    },
  });

  useServerAnalytics({
    shopify: {
      pageType: ShopifyAnalyticsConstants.pageType.collection,
      resourceId: collection.id,
    },
  });


  return (
    <Layout>
        <Suspense>
            <Seo type="collection" data={collection} />
        </Suspense>
        <Header />
        <div className="header-present">
            <header className="inside-xl">
                <h1>
                    {collection.title}
                </h1>
                {collection.description && (
                    <div>
                        <div>
                            <p>
                                {collection.description}
                            </p>
                        </div>
                    </div>
                )}
            </header>
            <section className="padding-20">
                <div className="auto-grid">
                {collection.products.nodes.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
                </div>
            </section>
        </div>
    </Layout>
  );
}

const QUERY = gql`
  query CollectionDetails($handle: String!) {
    collection(handle: $handle) {
      id
      title
      description
      seo {
        description
        title
      }
      image {
        id
        url
        width
        height
        altText
      }
      products(first: 20) {
        nodes {
          id
          title
          publishedAt
          handle
          variants(first: 1) {
            nodes {
              id
              image {
                url
                altText
                width
                height
              }
              priceV2 {
                amount
                currencyCode
              }
              compareAtPriceV2 {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  }
`;