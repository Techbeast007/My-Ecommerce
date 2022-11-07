import useSwr from 'swr';
import ProductItem from '../../product-item';
import ProductsLoading from './loading';
import { ProductTypeList } from 'types';
import client from 'lib/sanity';
import imageUrlBuilder from '@sanity/image-url'

const ProductsContent = () => {
  const builder = imageUrlBuilder(client)
  function urlFor(source: any) {
    return builder.image(source)
  }
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSwr('/api/products', fetcher);
  console.log(data)
  if (error) return <div>Failed to load users</div>;
  return (
    <>
      {!data &&
        <ProductsLoading />
      }

      {data &&
        <section className="products-list">
          {data.map((item: ProductTypeList) => (
            <ProductItem
              id={item.id}
              name={item.name}
              price={item.price}

              currentPrice={item.currentPrice}
              key={item.id}
              images={urlFor(item.images[0]).url()}
            />
          ))}
        </section>
      }
    </>
  );
};

export default ProductsContent