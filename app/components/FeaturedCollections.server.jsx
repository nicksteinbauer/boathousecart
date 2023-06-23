import { Link, Image, gql, useShopQuery, CacheLong } from "@shopify/hydrogen";

export default function FeaturedCollections() {
  const {
    data: { collections },
  } = useShopQuery({
    query: QUERY,
    cache: CacheLong(),
  });

  return (
    <section className="inside-xl">
      <h2 className="">
        Collections
      </h2>
      <div className="auto-grid">
        {collections.nodes.map((collection) => {
          return (
            <Link key={collection.id} to={`/collections/${collection.handle}`}>
              <div>
              {collection?.image && (
                  <Image
                    className=""
                    width={"100%"}
                    height={336}
                    alt={`Image of ${collection.title}`}
                    data={collection.image}
                  />
                )}
                <h2 className="">
                  {collection.title}
                </h2>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

const QUERY = gql`
  query FeaturedCollections {
    collections(first: 8, sortKey: UPDATED_AT, reverse:true ) {
      nodes {
        id
        title
        handle
        image {
          altText
          width
          height
          url
        }
      }
    }
  }
`;
