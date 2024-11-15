import React from 'react';
import Item from '../Item/Item';

const Time = ({cook}) => {
    return (
        <div className='md:w-1/3 border-4'>
            <h1 className='text-2xl items-center text-center font-bold '> Want to cook :{cook.length} </h1>
            
            {cook.map((recipe, index) => (
                <Item key={index} cook={recipe} />
            ))}

        </div>
    );
};

export default Time;
