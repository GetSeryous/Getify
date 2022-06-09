import Head from 'next/head'
import {client} from "../lib/client"
import { Product, FooterBanner, HeroBanner } from "../components";

export default function Home({ products, bannerData}) {
  return (
    <>
      {/* {console.log(bannerData)}
      {console.log(products)} */}
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best sells</h2>
        <p>speakers of many variatans</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

    const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  //  console.log(bannerData);
  return {
    props: {
      products,bannerData
    }
  }
}
