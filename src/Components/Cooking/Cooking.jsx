import React from 'react';
import Current from '../Current/Current';

const Cooking = ({got}) => {
    return (
        <div>
            <h1 className='text-2xl items-center text-center font-bold '>Currently Preparing :</h1>
          {
            got.map(cook => <Current cook={cook}></Current>)
          }
            
        </div>
    );
};

export default Cooking;