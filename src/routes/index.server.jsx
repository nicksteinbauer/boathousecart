
import {
  useShopQuery,
  CacheLong,
  gql,
  
} from "@shopify/hydrogen";

import { Suspense } from "react";

import { Layout } from "../components/Layout.server";
import Header from "../components/Header.client";
import Hero from "../components/Hero.client";

import FeaturedCollections from "../components/FeaturedCollections.server";

//import { ProductSwimlane } from "../components/ProductSwimlane.server";

export default function Home() {

  const {
    data: { shop },
  } = useShopQuery({
    query: SHOP_QUERY,
    cache: CacheLong(),
    preload: true,
  });

  return (
    <Layout>
      <Suspense>
        <Hero />
      </Suspense>
      <Header shop={shop} />
      <FeaturedCollections />
      <section id="about">
        This is the about section
      </section>
      {/* <ProductSwimlane title="Related Products" data={id} /> */}

    </Layout>
  );
}

const SHOP_QUERY = gql`
  query ShopInfo {
    shop {
      name
      description
    }
  }
`;

