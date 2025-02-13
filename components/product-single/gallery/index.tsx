type GalleryProductType = {
  images: any
}

const Gallery = ({ images }: GalleryProductType) => {
  const featImage = images;

  return (
    <section className="product-gallery">
      <div className="product-gallery__thumbs">
        {/* {images.map((image: any) => ( */}
        <div key={images} className="product-gallery__thumb">
          <img src={images} alt="" />
        </div>
        {/* ))} */}
      </div>

      <div className="product-gallery__image">
        <img src={featImage} alt="" />
      </div>
    </section>
  );
};

export default Gallery;
