import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import ProductsFeatured from '../components/products-featured';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';
import { useState, useEffect } from 'react';
import groq from 'groq'
import client from 'lib/sanity';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import React from 'react'

function About() {

 return (
  <Layout>

   <PageIntro />
   <Typography variant="h2" gutterBottom style={{ justifyContent: 'center', display: 'flex' }}>
    About Us
   </Typography>

   <section className="section">
    <container className="container">
     <Typography variant="h6" gutterBottom style={{ justifyContent: 'center', display: 'flex', marginLeft: '30px' }}>
      If you can not explore the world and tastes its flavors, why not bring the world and its flavors into your home? The founder of RBN is born and taised in Suriam. The Indian cuisine inspired him due tohis ancestors who came from India to Surinam. he learned from them that it is all about the right mixture of Indian spices to the essence of extraordinary taste. Therefore, RBN products are Indian spices of high quality and affordable for every household. RBN makes the products the accurate identification of purity and taste!
     </Typography>
    </container>
   </section>
   <List >
    <ListItemText>
     <Typography variant="h6" gutterBottom style={{ display: 'flex', marginLeft: '30px' }}>
      For distributor
     </Typography>
    </ListItemText>
    <ListItemText>
     <Typography variant="h6" gutterBottom style={{ display: 'flex', marginLeft: '30px' }}>
      Margin:- 40% to 45% margin (70% money deposit required)
     </Typography>
    </ListItemText>
    <ListItemText>
     <Typography variant="h6" gutterBottom style={{ display: 'flex', marginLeft: '30px' }}>
      Margin:- 40% to 45% margin (70% money deposit required)
     </Typography>
    </ListItemText>
    <ListItemText>
     <Typography variant="h6" gutterBottom style={{ display: 'flex', marginLeft: '30px' }}>
      Documentation:




     </Typography>
    </ListItemText>
    <ListItemText>
     <Typography variant="h6" gutterBottom style={{ display: 'flex', marginLeft: '30px' }}>
      1. Gstin no. /pan card no.
     </Typography>
    </ListItemText>
    <ListItemText>
     <Typography variant="h6" gutterBottom style={{ display: 'flex', marginLeft: '30px' }}>
      2. Agreement sign by both our area manager and our new dealership partner.
     </Typography>
    </ListItemText>
    <ListItemText>
     <Typography variant="h6" gutterBottom style={{ display: 'flex', marginLeft: '30px' }}>
      3.Id proof (copy)
     </Typography>
    </ListItemText>
    <ListItemText>
     <Typography variant="h6" gutterBottom style={{ display: 'flex', marginLeft: '30px' }}>
      4. Passport size photo
     </Typography>
    </ListItemText>
    <ListItemText>
     <Typography variant="h6" gutterBottom style={{ display: 'flex', marginLeft: '30px' }}>
      Scheme:-



      Transportation: Will decide on table
     </Typography>
    </ListItemText>
    <ListItemText>
     <Typography variant="h6" gutterBottom style={{ display: 'flex', marginLeft: '30px' }}>
      1.buy products up to 2 lakh and get a margin upgrade.
     </Typography>
    </ListItemText>
    <ListItemText>
     <Typography variant="h6" gutterBottom style={{ display: 'flex', marginLeft: '30px' }}>
      2. Sell our product of amount 12 lakh within six months and get prime dealership (more margin, fast service, better advertising materials, etc).
     </Typography>
    </ListItemText>
    <ListItemText>
     <Typography variant="h6" gutterBottom style={{ display: 'flex', marginLeft: '30px' }}>
      3. Brand promotion element as we decide on table.
     </Typography>
    </ListItemText>
    <ListItemText>
     <Typography variant="h6" gutterBottom style={{ display: 'flex', marginLeft: '30px' }}>
      Compony support:
     </Typography>
    </ListItemText>
    <ListItemText>
     <Typography variant="h6" gutterBottom style={{ display: 'flex', marginLeft: '30px' }}>
      1.your online marketing is like on social media by our professionals.
     </Typography>
    </ListItemText>
    <ListItemText>
     <Typography variant="h6" gutterBottom style={{ display: 'flex', marginLeft: '30px' }}>
      2.marketing training for you at your workplace by our professionals.
     </Typography>
    </ListItemText>
    <ListItemText>
     <Typography variant="h6" gutterBottom style={{ display: 'flex', marginLeft: '30px' }}>
      3.only one dealership member in a 5 km radius area.
     </Typography>
    </ListItemText>
    <ListItemText>
     <Typography variant="h6" gutterBottom style={{ display: 'flex', marginLeft: '30px' }}>
      4.10:00 am to 6:00 pm our customer care support for any queries and complaints.
     </Typography>
    </ListItemText>
    <ListItemText>
     <Typography variant="h6" gutterBottom style={{ display: 'flex', marginLeft: '30px' }}>
      5. Advertising elements ( no extra charge includes)
     </Typography>
    </ListItemText>
    <ListItemText>
     <Typography variant="h6" gutterBottom style={{ display: 'flex', marginLeft: '30px' }}>
      Payment method:
     </Typography>
    </ListItemText>
    <ListItemText>
     <Typography variant="h6" gutterBottom style={{ display: 'flex', marginLeft: '30px' }}>
      1.cheque
     </Typography>
    </ListItemText>
    <ListItemText>
     <Typography variant="h6" gutterBottom style={{ display: 'flex', marginLeft: '30px' }}>
      2.cash
     </Typography>
    </ListItemText>
    <ListItemText>
     <Typography variant="h6" gutterBottom style={{ display: 'flex', marginLeft: '30px' }}>
      3.online banking
     </Typography>
    </ListItemText>
   </List>








   {/* <section className="featured">
    <div className="container">
     <article style={{ backgroundImage: 'url(/images/featured-1.jpg)' }} className="featured-item featured-item-large">
      <div className="featured-item__content">

       <h3>New arrivals are now in!</h3>
       <a href="#" className="btn btn--rounded">Show Collection</a>
      </div>
     </article>

     <article style={{ backgroundImage: 'url(/images/featured-2.jpg)' }} className="featured-item featured-item-small-first">
      <div className="featured-item__content">
       <h3>Basic t-shirts $29,99</h3>
       <a href={'products'} className="btn btn--rounded">More details</a>
      </div>
     </article>

     <article style={{ backgroundImage: 'url(/images/featured-3.jpg)' }} className="featured-item featured-item-small">
      <div className="featured-item__content">
       <h3>Sale this summer</h3>
       <a href="#" className="btn btn--rounded">VIEW ALL</a>
      </div>
     </article>
    </div>
   </section> */}

   {/* <section className='section'>

    <div style={{  display: "flex", width: '100%' }}>
     <ReactPlayer url='https://www.youtube.com/watch?v=YCaavYe-FNk' style={{ width: '100%' }} />


    </div>
   </section> */}

   {/* <section className="section">
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
   </section> */}

   <ProductsFeatured />
   {/* <Subscribe /> */}
   <Footer />
  </Layout>
 )
}

export default About