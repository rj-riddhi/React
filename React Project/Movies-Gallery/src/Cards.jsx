import React from 'react';

function Cards(props)
{
  return (
      <div className='cards'>
        <div className = 'card'>
            <img className = 'card_img' src = {props.imgsrc} alt = 'Chhalang'/>
            <div className = 'card_info'>
                <span className = 'card_cat'> {props.description} </span>
                <h3 className = 'card_title'> {props.title} </h3>
                <a href = {props.link} target = '_blank' rel='noreferrer'>
                    <button>Watch Now</button>
                </a>
            </div>
        </div>
      </div>
    );
}
export default Cards;