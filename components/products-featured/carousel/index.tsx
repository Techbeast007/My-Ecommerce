import ProductItem from './../../product-item';
import { ProductTypeList } from 'types';
import client from 'lib/sanity';
import imageUrlBuilder from '@sanity/image-url'

// import Swiper core and required components
import { Swiper, SwiperSlide } from 'swiper/react';

let slidesPerView = 1.3;
let centeredSlides = true;
let spaceBetween = 30;
if (typeof window !== 'undefined') {
  if (window.innerWidth > 768) {
    slidesPerView = 3;
    spaceBetween = 35;
    centeredSlides = false;
  }
  if (window.innerWidth > 1024) {
    slidesPerView = 4;
    spaceBetween = 65;
    centeredSlides = false;
  }
}

type ProductsCarouselType = {
  products: ProductTypeList[]
}

const ProductsCarousel = ({ products }: ProductsCarouselType) => {
  const builder = imageUrlBuilder(client)
  function urlFor(source: any) {
    return builder.image(source)
  }


  if (!products) return <div>Loading</div>;

  return (
    <div className="products-carousel">
      <Swiper
        spaceBetween={spaceBetween}
        autoplay={true}
        loop={true}
        centeredSlides={centeredSlides}
        watchOverflow={true}
        slidesPerView={slidesPerView}
        className="swiper-wrapper">
        {products.map(item => (
          <SwiperSlide key={item.id} zoom={true}>
            <ProductItem
              id={item.id}
              name={item.name}
              price={item.price}
              // color={item.color}
              discount={item.discount}
              currentPrice={item.currentPrice}
              key={item.id}
              images={urlFor(item.images[0]).url()}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ProductsCarousel