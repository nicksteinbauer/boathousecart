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
//import { CartDetails } from "../components/CartDetails.client";
import FooterInterior from "../components/FooterInterior.client";
import CartInterior from "../components/header/CartInterior.client";


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
          <div className="flex-md baseline gap10">
            <h1>{page.title}</h1>
            <p className="smtext"> - Any discounts will be taken off at checkout.</p>
          </div>
          
          <CartInterior />
        </div>
      </div>
      <FooterInterior />
    </Layout>
  );
}

const PAGE_QUERY = gql`
  query PageDetails {
    page(handle: "cart") {
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
