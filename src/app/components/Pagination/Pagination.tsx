import React from 'react';
import './Pagination.scss';

const Pagination = () => {
  return (
    <div className='pagination'>
        <div className='pagination__arrow pagination__arrow_reverse'>
            <img src="/icon/arrow.png" alt="machine-service" />
        </div>
        <div className='pagination__item'>1</div>
        <div className='pagination__arrow'>
            <img src="/icon/arrow.png" alt="machine-service" />
        </div>
    </div>
  )
}

export default Pagination