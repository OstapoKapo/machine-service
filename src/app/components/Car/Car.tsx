import React from 'react';
import './Car.scss';

const Car = () => {
  return (
    <div className='car'>
        <div className="car__carImg">
            <img src="/background/drag-and-drop-icon.png" alt="machine-service"/>
        </div>
        <div className="car__info">
            <p className="car__text">Name: <span> Tesla S</span></p>
            <div className='car__item'>
                <p className='car__item__name'>Oil:</p>
                <div className='flex-column '>
                    <p className='car__text'>Mileage: <span className='data'>14888</span></p>
                    <p className='car__text'>Data: <span>24.04.2025</span></p>
                    <button className='car__item__btn'>Update</button>
                </div>
            </div>
            <div className='car__item'>
                <p className='car__item__name'>Filter:</p>
                <div className='flex-column'>
                    <p className='car__text'>Mileage: <span className='data'>14888</span></p>
                    <p className='car__text'>Data: <span className='data'>24.04.2025</span></p>
                    <button className='car__item__btn'>Update</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Car