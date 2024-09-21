import React, {useEffect} from 'react';
import './CarBlock.scss';
import {fullUser, Car} from "../../../types";
import {userStore} from "../../../store/user";

interface CarBlock {
 carNumber: number
}

const CarBlock: React.FC<CarBlock> = ({carNumber}) => {

    const {user} = userStore();
    const car: Car = user.cars[carNumber]

  return (
      user.cars.length > 0 ? (<div className='car'>
          <div className="car__carImg">
              <img src="/background/drag-and-drop-icon.png" alt="machine-service"/>
          </div>
          <div className="car__info">
              <p className="car__text">Name: <span>{car.name}</span></p>
              <div className='car__item'>
                  <p className='car__item__name'>Oil:</p>
                  <div className='flex-column '>
                      <p className='car__text'>Mileage: <span className='data'>{`${car.oil.nextChange.mileage}`}</span>
                      </p>
                      <p className='car__text'>Data: <span className={'data'}>{car.oil.nextChange.date}</span></p>
                      <button className='car__item__btn'>Update</button>
                  </div>
              </div>
              <div className='car__item'>
                  <p className='car__item__name'>Filter:</p>
                  <div className='flex-column'>
                      <p className='car__text'>Mileage: <span
                          className='data'>{`${car.filter.nextChange.mileage}`}</span></p>
                      <p className='car__text'>Data: <span className='data'>{car.filter.nextChange.date}5</span></p>
                      <button className='car__item__btn'>Update</button>
                  </div>
              </div>
          </div>
      </div>) : (
          <div className='emptyCar'>
              <h1 className={'emptyCar__header'}>You dont have cars</h1>
          </div>
      )
  )
}

export default CarBlock