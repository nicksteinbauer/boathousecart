
import {
  useShopQuery,
  CacheLong,
  gql,
  
} from "@shopify/hydrogen";

import { Suspense } from "react";

import { Layout } from "../components/Layout.server";
import Header from "../components/header/Header.client";
import Hero from "../components/Hero.client";
import Rates from "../components/Rates.client";

// import FeaturedCollections from "../components/FeaturedCollections.server";
import About from "../components/About.client";
import Footer from "../components/Footer.client";

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
      <div className="imHomeUnder">
        <About />
        <Rates />

        <Footer />
      </div>
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

