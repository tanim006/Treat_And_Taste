import React from 'react';

const Item = ({cook,handleCook}) => {
    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = cook;
    return (
        <div className='flex p-4  space-y-3 m-4 bg-[#72BF78] rounded-lg items-center'>
             <div className='w-1/3'>
                <h1 className='font-bold'>Name</h1>
                <h1 className='mt-4'>{recipe_name}</h1>
             </div>
             <div className='w-1/3'>
                <h1  className='font-bold'>Time</h1>
                <h1 className='mt-4'>{preparing_time}</h1>
             </div>
             <div className='w-1/3'>
                <h1  className='font-bold'>Calories</h1>
                <h1 className='mt-4'>{calories}</h1>
             </div>

             <button className='btn'>Preparing</button>
          
        </div>
    );
};

export default Item;