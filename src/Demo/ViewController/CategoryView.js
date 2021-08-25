import React, { useState, useEffect } from 'react';
import '../Styles/CategoryStyle.css';
import { categoriesData } from '../ViewModel/DataMockup';
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

  const renderIndicator = () => {
    return (
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
    );
  };

  const renderArrowItem = (isLeftArrow) => {
    return (
      <div className='button-area'>
        <a
          href='#'
          onClick={() => (isLeftArrow ? previousCategory() : nextCategory())}
        >
          {isLeftArrow ? <LeftArrow /> : <RightArrow />}
        </a>
      </div>
    );
  };

  return (
    <div className='layout-container'>
      <div
        className='wrap-container'
        style={
          isMobile()
            ? {
                width: `${width * categories.length}px`,
                transform: `translateX(${-width * currentIndex}px)`,
              }
            : {}
        }
      >
        {!isMobile() ? renderDesktopView() : renderMobileView()}
      </div>
      {isMobile() && (
        <div className='slide-area'>
          {currentIndex !== 0 && renderArrowItem(true)}
          <div className='space-area' />
          {currentIndex !== categories.length - 1 && renderArrowItem(false)}
        </div>
      )}
      {isMobile() && renderIndicator()}
    </div>
  );
};

export default Category;
