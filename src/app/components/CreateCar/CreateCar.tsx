import React, {FormEvent} from 'react';
import './CreateCar.scss';
import { Car, History } from '../../../types'

const CreateCar = () => {

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const form = e.currentTarget;
      const name = (form.elements.namedItem('nameInp') as HTMLInputElement).value.toLowerCase();
      const mileage = (form.elements.namedItem('mileageInp') as HTMLInputElement).value.toLowerCase();
      const average = (form.elements.namedItem('averageInp') as HTMLInputElement).value.toLowerCase();
      const filterData = (form.elements.namedItem('filterInp') as HTMLInputElement).value.toLowerCase();
      const oilData = (form.elements.namedItem('oilInp') as HTMLInputElement).value.toLowerCase();

      if(name.length > 0 && mileage.length > 0 && average.length > 0 && filterData.length > 0 && oilData.length > 0) {
          if(!isNaN(Number(average)) && !isNaN(Number(mileage))){
              const car: Car = {
                  name: name,
                  mileage: Number(mileage),
                  averageSpeed: Number(average),
                  carImg: '',
                  history: [createHistory()],
                  filter: {
                      lastChange: filterData,
                      nextChange: ''
                  },
                  oil: {
                      lastChange: oilData,
                      nextChange: ''
                  }
              }
              console.log(car)
          }else{
              alert('average or mileage should be number')
          }
      }else{
          alert('Please fill all inputs');
      }
  }

  const checkLastChange = (date: string) => {
      const newDate = new Date();
  }

  const createHistory = () => {
      const date = new Date();
      const day = String(date.getDate()).padStart(2, '0'); // Get day and ensure two digits
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (0-indexed) and ensure two digits
      const year = date.getFullYear(); // Get full year

      const formattedDate = `${day}.${month}.${year}`;
      const description = 'Car was created';
      const history: History = {
          description: description,
          date: formattedDate
      }
      return history;
  }

  const createNextChange = () => {

  }

  const createCar = async () => {

  }

  return (
      <div className='createCar'>
          <h1 className='createCar__tittle'>Create Car</h1>
          <form className='createCar__form' onSubmit={handleSubmit}>
            <input type="text" className="createCar__inp" name='nameInp' placeholder='Car name'/>
            <input type="text" className="createCar__inp" name='mileageInp' placeholder='Car Mileage'/>
            <input type="text" className="createCar__inp" name={'averageInp'} placeholder='Average speed'/>
            <div className="createCar__row">
              <div className='md:mr-[20px]'>
                  <p className='createCar__text'>last change filter:</p>
                  <input type="date" className='createCar__dateInp' name={'filterInp'}/>
              </div>
              <div>
                  <p className='createCar__text'>last change oil:</p>
                  <input type="date" className='createCar__dateInp' name={'oilInp'}/>
              </div>
            </div>
            <button className='createCar__btn'>Submit</button>
          </form>
      </div>
  )
}

export default CreateCar