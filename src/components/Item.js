import React from 'react';
import Button from './Button';

const Item = ({title, desc, backgroundImg, leftBtnTxt, leftBtnLink, rightBtnTxt, rightBtnLink, twoButtons}) => {
  return (
    <div className='item' style={{

    }}>
      <div className="item-container">
        <div className="item-text">
          <p>{title}</p>
          <div className="item-textdescribe">
            <p>{desc}</p>
          </div>
        </div>
        <div className="item-lowerthird">
          <div className="item-button">
            <Button />
          </div>
        </div>
      </div>


    </div>
  )
}

export default Item;
