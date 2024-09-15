import React from 'react';
import logo from 'assets/images/logo.png';
import { images } from 'helpers/groupImage';
import './CategoriesListing.scss';
import { Button } from '@material-ui/core';

/**
 * Component for Home page
 */
const CategoriesListing = (props) => {
  const { categories = [] } = props;
  console.log(categories);
  return (
    <>
      {categories.length &&
        categories.map((item, index) => (
          <div className="container ">
            <div className="category grid grid--2-cols grid--center-v">
              {(index + 1) % 2 === 0 ? (
                <>
                  <div className="category-text-box">
                    <h3 class="category-heading">Fruits & Vegetables</h3>
                    <p class="category-description">A variety of fruits and vegetables</p>
                    <a class="category-nav-link" href="#">
                      {`Explore Fruit & Veg`}
                    </a>
                  </div>
                  <div className="category-image-box">
                    {' '}
                    <img className="category-img" src={images[item['img']]} alt="category image" />
                  </div>
                </>
              ) : (
                <>
                  {' '}
                  <div className="category-image-box">
                    {' '}
                    <img className="category-img" src={images[item['img']]} alt="category image" />
                  </div>
                  <div className="category-text-box">
                    <h3 class="category-heading">Fruits & Vegetables</h3>
                    <p class="category-description">A variety of fruits and vegetables</p>
                    <a class="category-nav-link" href="#">
                      {`Explore Fruit & Veg`}
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
    </>
  );
};

export default CategoriesListing;
