import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import ProductsFeatured from '../components/products-featured';
import Footer from '../components/footer';
import ReactPlayer from 'react-player'




const IndexPage = () => {




  return (
    <Layout>
      <PageIntro />

      <section className="featured">
        <div className="container">
          <article style={{ backgroundImage: 'url(/images/img.jpg)' }} className="featured-item featured-item-large">
            <div className="featured-item__content">

              <h3>New arrivals are now in!</h3>
              <a href="products" className="btn btn--rounded">Show Collection</a>
            </div>
          </article>

          <article style={{ backgroundImage: 'url(/images/img2.jpeg)' }} className="featured-item featured-item-small-first">
            <div className="featured-item__content">
              <h3>Check our Dealership</h3>
              <a href={'About'} className="btn btn--rounded">More details</a>
            </div>
          </article>

          <article style={{ backgroundImage: 'url(/images/img3.jpg)' }} className="featured-item featured-item-small">
            <div className="featured-item__content">
              <h3>All products</h3>
              <a href="products" className="btn btn--rounded">VIEW ALL</a>
            </div>
          </article>
        </div>
      </section>

      <section className='section'>

        <div style={{ justifyContent: 'center', display: "flex", width: '100%' }}>
          <ReactPlayer url='https://www.youtube.com/watch?v=YCaavYe-FNk' style={{ width: '100%' }} />


        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>Why should you choose us?</h4>
          </header>

          <ul className="shop-data-items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Free Shipping</h4>
                <p>All purchases over Rs. 199 are eligible for free shipping.</p>
              </div>
            </li>

            <li>
              <i className="icon-payment"></i>
              <div className="data-item__content">
                <h4>Easy Payments</h4>
                <p>All payments are processed instantly over a secure payment protocol.</p>
              </div>
            </li>

            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Money-Back Guarantee</h4>
                <p>If an item arrived damaged or you've changed your mind, you can send it
                  back for a full refund.</p>
              </div>
            </li>

            <li>
              <i className="icon-materials"></i>
              <div className="data-item__content">
                <h4>Finest Quality</h4>
                <p>Designed to last, each of our products has been crafted with the finest materials.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <ProductsFeatured />
      {/* <Subscribe /> */}
      <Footer />
    </Layout>
  )
}


export default IndexPage