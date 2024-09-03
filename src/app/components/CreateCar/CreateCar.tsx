import React from 'react';
import './CreateCar.scss';

const CreateCar = () => {
  return (
    <div className='createCar'>
        <h1 className='createCar__tittle'>Create Car</h1>
        <input type="text" className="createCar__inp" placeholder='Car name'/>
        <input type="text" className="createCar__inp" placeholder='Car Mileage'/>
        <input type="text" className="createCar__inp" placeholder='Average speed'/>
        <div className="createCar__row">
            <div>
              <p className='createCar__text'>last change filter:</p>
              <input type="date" className='createCar__dateInp'/>
            </div>
            <div> 
              <p className='createCar__text'>last change oil:</p>
              <input type="date" className='createCar__dateInp'/>
            </div>
        </div>
    </div>
  )
}

export default CreateCar