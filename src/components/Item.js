import React from 'react';
import Buttons from './Buttons';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Item.css';


const Item = ({title, desc, backgroundImg, leftBtnTxt, leftBtnLink, rightBtnTxt, rightBtnLink, twoButtons}) => {
  return (
    <div className='item' style={{
      backgroundImage: `url(${backgroundImg})`
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
            <Buttons imp='primary' text={leftBtnLink} link={leftBtnLink} />
            <ExpandMoreIcon className='expand-icon'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item;
