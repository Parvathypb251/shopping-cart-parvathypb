import React from 'react';
import Header from 'sharedComponents/Header/Header';
import Footer from 'sharedComponents/Footer/Footer';
import { images } from 'helpers/groupImage';
import Carousel from 'sharedComponents/Carousel/Carousel';
import CategoriesListing from './Components/CategoriesListing/CategoriesListing';
import './Home.scss';

/**
 * Component for Home page
 */
const Home = () => {
  let banners = [{ img: 'offer1.jpg' }, { img: 'offer2.jpg' }, { img: 'offer3.jpg' }];
  let categories = [
    { img: 'fruits.png' },
    { img: 'bakery.png' },
    { img: 'beauty.png' },
    { img: 'beverages.png' },
    { img: 'baby.png' },
  ];
  return (
    <>
      <Header />
      <main>
        <section className="offers-section-style margin-top-5">
          <div className="container ">
            <Carousel slides={banners} />
          </div>
        </section>
        <section className=" margin-top-5">
          <CategoriesListing categories={categories} />
        </section>
      </main>
      <Footer customStyle="sticky-footer" />
    </>
  );
};

export default Home;
