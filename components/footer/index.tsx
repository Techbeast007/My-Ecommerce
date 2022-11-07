import Logo from '../../assets/icons/logo';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6><Logo /> <span>RBN</span>Spices</h6>
            <p>One of the most affordable yet, best spices in india</p>
            <ul className="site-footer__social-networks">
              <li><a href="https://www.facebook.com/Rbnspices01/"><i className="icon-facebook"></i></a></li>
              <li><a href="https://twitter.com/SpicesRbn"><i className="icon-twitter"></i></a></li>
              <li><a href="https://www.instagram.com/rbn_spices/"><i className="icon-instagram"></i></a></li>
            </ul>
          </div>

          <div className="site-footer__links">
            {/* <ul>
              <li>Shopping online</li>
              <li><a href="#">Order Status</a></li>
              <li><a href="#">Shipping and Delivery</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Payment options</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul> */}
            {/* <ul>
              <li>Information</li>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Find a store</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Bacome a member</a></li>
              <li><a href="#">Site feedback</a></li>
            </ul> */}
            <ul>
              <li>Contact</li>
              <li><a href="#"><b>Address</b> :Ground floor, 175-A, Rajpur khurd extn, south Delhi - 110068</a></li>
              <li><a href="#"><b>Phone</b>: +99 6397026980</a></li>
              <li><a href="#"><b>Email</b>: info.rbnspices@gmail.com</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>DESIGN BY RBN & NAVNEET - © 2022. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  )
};


export default Footer