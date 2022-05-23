import React from 'react';
import Header from 'sharedComponents/Header/Header';
import Footer from 'sharedComponents/Footer/Footer';
import { images } from 'helpers/groupImage';
import Carousel from 'sharedComponents/Carousel/Carousel';
import './Home.scss';

/**
 * Component for Home page
 */
const Home = () => {
  let banners = [{ img: 'offer1.jpg' }, { img: 'offer2.jpg' }, { img: 'offer3.jpg' }];

  return (
    <>
      <Header />
      <main>
        <section className="offers-section-style margin-top-5">
          <div className="container ">
            <Carousel slides={banners} />
          </div>
        </section>
      </main>
      <Footer customStyle="sticky-footer" />
    </>
  );
};

export default Home;
