import {
  gql,
  useShopQuery,
  useServerAnalytics,
  //useRouteParams,
  ShopifyAnalyticsConstants,
  Seo,
} from "@shopify/hydrogen";
import { Suspense } from "react";

import { Layout } from "../components/Layout.server";
import HeaderInterior from "../components/header/HeaderInterior.client";
import Rates from "../components/Rates.client";
import FooterInterior from "../components/FooterInterior.client";


export default function Page({params}) {
  
  const {handle} = params;
  const {
    data: {page},
  } = useShopQuery({
    query: PAGE_QUERY,
    variables: {handle},
  });

  if (!page) {
    return <NotFound />;
  }

  useServerAnalytics({
    shopify: {
      pageType: ShopifyAnalyticsConstants.pageType.page,
      resourceId: page.id,
    },
  });

  return (
    <Layout>
      <Suspense>
        <Seo type="page" data={page} />
      </Suspense>
      <HeaderInterior />
      <div className="header-present">
        <div className="inside-xl">
          <Rates />
        </div>
      </div>
      <FooterInterior />
    </Layout>
  );
}

const PAGE_QUERY = gql`
  query PageDetails {
    page(handle: "rates") {
      id
      title
      body
      seo {
        description
        title
      }
    }
  }
`;
