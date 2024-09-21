import React, {MouseEvent, FormEvent} from 'react';
import './Pagination.scss';
import {userStore} from "../../../store/user";

interface Pagination {
    carNumber: number,
    setCarNumber: (value: number) => void,
}

const Pagination: React.FC<Pagination> = ({carNumber, setCarNumber}) => {

    const {user} = userStore();

    const handlePagination = (e: MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
        const dataAction = target.getAttribute('data-action')
        if(dataAction === 'next'){
            if(carNumber < user.cars.length-1){
                setCarNumber(carNumber + 1);
            }
        }else if(dataAction === 'prev'){
            if(carNumber > 0){
                setCarNumber(carNumber - 1);
            }
        }
    }

  return (
    <div className='pagination' onClick={handlePagination}>
        <div className='pagination__arrow pagination__arrow_reverse'>
            <img src="/icon/arrow.png" alt="machine-service" data-action={'prev'}/>
        </div>
        <div className='pagination__item'>{carNumber + 1}</div>
        <div className='pagination__arrow'>
            <img src="/icon/arrow.png" alt="machine-service" data-action={'next'} />
        </div>
    </div>
  )
}

export default Pagination