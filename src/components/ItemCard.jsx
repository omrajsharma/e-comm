import React from 'react';
import "./ItemCard.css";

function ItemCard({itemImg, itemPrice, itemTitle, itemDesc, itemPlace, itemDate}) {
  return (
    <div className='item-card-container'>
        <div className="item-card-img">
            <img src={itemImg} alt="item-img" />
        </div>

        <div className="item-card-info">
            <div className="item-card-price">
                {itemPrice}
            </div>
            <div className='item-card-title'>
                {itemTitle}
            </div>
            <div className='item-card-desc'>
                {itemDesc}
            </div>

            <div className='item-card-footer'>
                <div className='item-card-place'>
                    {itemPlace}
                </div>
                <div className='item-card-date'>
                    {itemDate}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemCard