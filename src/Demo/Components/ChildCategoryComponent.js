import React from 'react';
import { detailCategories, colors } from '../ViewModel/DataMockup';
import '../Styles/CategoryStyle.css';

const ChildCategoryComponent = ({ idCategory }) => {
  let listDetail = detailCategories[idCategory].data;
  let styleLayout = detailCategories[idCategory].layoutStyle;
  return (
    <>
      {listDetail.map((item, indexList) => (
        <div
          key={indexList}
          className='category-box-detail'
          data-testid={`content-category-${idCategory}`}
          id={`content-category-${indexList}`}
          style={
            listDetail.length > 1
              ? {
                  borderTop: `4px solid ${colors[indexList % 2]}`,
                }
              : {}
          }
        >
          <p className='header-col-content'>{item.title}</p>
          <div className='detail-content'>
            {item.data.map((childItem, index) => (
              <div
                key={index}
                data-testid={`child-content-category-${idCategory}-${indexList}-${index}`}
                className='col-content'
                style={
                  styleLayout === 'col' && item.data.length > 1
                    ? {
                        borderLeft: `3px solid ${colors[index % 2]}`,
                        paddingLeft: `0.5rem`,
                      }
                    : {}
                }
              >
                <span className='col-title'>{childItem.title}</span>
                <span className='col-detail'>{childItem.detail}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default ChildCategoryComponent;
