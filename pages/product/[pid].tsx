import { GetServerSideProps } from 'next'

import { useState, useEffect } from 'react';
import Footer from '../../components/footer';
import Layout from '../../layouts/Main';
import Breadcrumb from '../../components/breadcrumb';
import ProductsFeatured from '../../components/products-featured';
import Gallery from '../../components/product-single/gallery';
import Content from '../../components/product-single/content';
import Description from '../../components/product-single/description';
import Reviews from '../../components/product-single/reviews';
import { server } from '../../utils/server';
import client from '../../lib/sanity';

import imageUrlBuilder from '@sanity/image-url'

// types
import { ProductType } from 'types';

type ProductPageType = {
  product: ProductType;
}



export const getServerSideProps: GetServerSideProps = async ({ query }) => {


  const pid = query.pid;
  const product = await fetch(`${server}/api/product/${pid}`).then((res) => res.json()).catch((err) => { console.log(err) });



  return {
    props: {
      product,

    },
  }
}

const Product = ({ product }: ProductPageType) => {
  const builder = imageUrlBuilder(client)
  function urlFor(source: any) {
    return builder.image(source)
  }
  const [showBlock, setShowBlock] = useState('description');




  return (
    <Layout>
      <Breadcrumb />

      <section className="product-single">
        <div className="container">
          <div className="product-single__content">
            <Gallery images={urlFor(product.images[0]).url()} />
            <Content product={product} />
          </div>

          <div className="product-single__info">
            <div className="product-single__info-btns">
              <button type="button" onClick={() => setShowBlock('description')} className={`btn btn--rounded ${showBlock === 'description' ? 'btn--active' : ''}`}>Description</button>
              {/* <button type="button" onClick={() => setShowBlock('reviews')} className={`btn btn--rounded ${showBlock === 'reviews' ? 'btn--active' : ''}`}>Reviews (2)</button> */}
            </div>

            <Description show={showBlock === 'description'} description={product.description} />
            {/* <Reviews product={product} show={showBlock === 'reviews'} /> */}
          </div>
        </div>
      </section>

      <div className="product-single-page">
        <ProductsFeatured />
      </div>
      <Footer />
    </Layout>
  );
}

export default Product
