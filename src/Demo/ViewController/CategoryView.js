import React, { useState, useEffect } from 'react';
import '../Styles/CategoryStyle.css';
import { categoriesData } from '../ViewModel/DataMockup';
import useWindowSize from '../Utils/useWindowSize';
import { ReactComponent as LeftArrow } from '../Icons//leftArrow.svg';
import { ReactComponent as RightArrow } from '../Icons//rightArrow.svg';
import DetailCategoryComponent from '../Components/DetailCategoryComponent';

const Category = () => {
  const { width } = useWindowSize();
  const [currentIndicatorIndex, setCurrentIndicatorIndex] = useState(0);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoriesData);
  }, []);

  const isMobile = () => {
    return width < 768;
  };

  const previousCategory = () => {
    if (currentIndicatorIndex > 0) {
      setCurrentIndicatorIndex(currentIndicatorIndex - 1);
    }
  };

  const nextCategory = () => {
    if (currentIndicatorIndex < categories.length - 1) {
      setCurrentIndicatorIndex(currentIndicatorIndex + 1);
    }
  };

  const renderIconView = (icon) => {
    return <div className='icon-category'>{icon}</div>;
  };

  const renderHeaderCategory = (category) => {
    return (
      <>
        <span className='category-title'>{category.title}</span>
        <p className='category-desc'>{category.description}</p>
      </>
    );
  };

  const renderDesktopView = () => {
    return categories.map((category, index) => (
      <div
        className='container'
        key={index}
        data-testid={`category-id-${index}`}
      >
        <div className='ordered-list'>{index + 1}</div>
        {renderIconView(category.iconCategory)}
        <div className='catergory-view'>
          {renderHeaderCategory(category)}
          <DetailCategoryComponent idCategory={index} />
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
              {renderHeaderCategory(category)}
            </div>
          </div>
          {renderIconView(category.iconCategory)}
          <DetailCategoryComponent idCategory={index} />
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
              currentIndicatorIndex === index
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
        <button
          data-testid={
            isLeftArrow ? `arrow-button-previous` : `arrow-button-next`
          }
          className='arrow-btn'
          onClick={() => (isLeftArrow ? previousCategory() : nextCategory())}
        >
          {isLeftArrow ? <LeftArrow /> : <RightArrow />}
        </button>
      </div>
    );
  };

  return (
    <div className='layout-container'>
      <div
        data-testid={`wrap-container`}
        className='wrap-container'
        style={
          isMobile()
            ? {
                width: `${width * categories.length}px`,
                transform: `translateX(${-width * currentIndicatorIndex}px)`,
              }
            : {}
        }
      >
        {!isMobile() ? renderDesktopView() : renderMobileView()}
      </div>
      {isMobile() && (
        <div className='slide-area'>
          {currentIndicatorIndex !== 0 && renderArrowItem(true)}
          <div className='space-area' />
          {currentIndicatorIndex !== categories.length - 1 &&
            renderArrowItem(false)}
        </div>
      )}
      {isMobile() && renderIndicator()}
    </div>
  );
};

export default Category;
