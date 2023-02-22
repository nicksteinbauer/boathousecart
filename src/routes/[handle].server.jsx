import {
  gql,
  useShopQuery,
  useServerAnalytics,
  useRouteParams,
  ShopifyAnalyticsConstants,
  Seo,
} from "@shopify/hydrogen";
import { Suspense } from "react";

import { Layout } from "../components/Layout.server";

import HeaderInterior from "../components/header/HeaderInterior.client";


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
        <h1>{page.title}</h1>
        <div
          dangerouslySetInnerHTML={{__html: page.body}}
          className="test testy"
        />
      </div>
      
    </Layout>
  );
}

const PAGE_QUERY = gql`
  query PageDetails($handle: String!) {
    page(handle: $handle) {
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
