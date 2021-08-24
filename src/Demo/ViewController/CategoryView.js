import React, { useState, useEffect } from 'react';
import '../Styles/CategoryStyle.css';
import {
  categoriesData,
  detailCategories,
  colors,
} from '../ViewModel/DataMockup';
import useWindowSize from '../Utils/useWindowSize';
import { ReactComponent as LeftArrow } from '../Icons//leftArrow.svg';
import { ReactComponent as RightArrow } from '../Icons//rightArrow.svg';
import ChildCategoryComponent from '../Components/ChildCategoryComponent';

const Category = () => {
  const { width } = useWindowSize();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoriesData);
  }, []);

  const isMobile = () => {
    return width < 768;
  };

  const previousCategory = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextCategory = () => {
    if (currentIndex < categories.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const renderDesktopView = () => {
    return categories.map((category, index) => (
      <div
        className='container'
        key={index}
        data-testid={`category-id-${index}`}
      >
        <div className='ordered-list'>{index + 1}</div>
        <div className='icon-category'>{category.iconCategory}</div>
        <div className='catergory-view'>
          <span className='category-title'>{category.title}</span>
          <p className='category-desc'>{category.description}</p>
          <ChildCategoryComponent idCategory={index} />
        </div>
      </div>
    ));
  };

  const renderMobileView = () => {
    return categories.map((category, index) => (
      <div
        className='container'
        key={index}
        data-testid={`category-id-${index}`}
      >
        <div className='catergory-view'>
          <div className='top-area-mobile'>
            <div className='ordered-list'>{index + 1}</div>
            <div className='top-area-mobile-title'>
              <span className='category-title'>{category.title}</span>
              <p className='category-desc'>{category.description}</p>
            </div>
          </div>
          <div className='icon-category'>{category.iconCategory}</div>
          <ChildCategoryComponent idCategory={index} />
        </div>
      </div>
    ));
  };

  return (
    <div className='layout-container'>
      <div
        className='wrap-container'
        style={{
          width: isMobile() ? `${width * categories.length}px` : '100%',
          transform: isMobile()
            ? `translateX(${-width * currentIndex}px)`
            : 'none',
        }}
      >
        {!isMobile() ? renderDesktopView() : renderMobileView()}
      </div>
      {isMobile() && (
        <div className='slide-area'>
          {currentIndex !== 0 && (
            <div className='button-area'>
              <a onClick={() => previousCategory()}>
                <LeftArrow />
              </a>
            </div>
          )}
          <div className='space-area' />
          {currentIndex !== categories.length - 1 && (
            <div className='button-area'>
              <a onClick={() => nextCategory()}>
                <RightArrow />
              </a>
            </div>
          )}
        </div>
      )}
      {isMobile() && (
        <div className='indicator-view'>
          {categories.map((id, index) => (
            <div
              key={index}
              className={
                currentIndex === index
                  ? 'dot-indicator selected'
                  : 'dot-indicator'
              }
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
