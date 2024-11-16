import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({ recipe, handleCook }) => {
    const [isCooked, setIsCooked] = useState(false);
    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = recipe;

    const handleClick = () => {
        if (isCooked) {
            toast.warn('You have already selected this recipe!');
        } else {
            handleCook(recipe); // Trigger the passed function
            setIsCooked(true); // Mark as cooked
            toast.success('Recipe added to your cooking list!');
        }
    };

    return (
        <div className='w-2/3'>
            <div className='p-5 mb-5 border'>
                <div className='p-4 rounded-lg shadow-md'>
                    <img className='w-80 h-48 object-cover rounded-lg' src={recipe_image} alt={recipe_name} />
                    <div className='mt-4'>
                        <h1 className='text-xl font-semibold'>{recipe_name}</h1>
                        <h3 className='text-base text-gray-600'>{short_description}</h3>
                    </div>
                    <div className='mt-4 text-lg'>
                        <h2 className='font-semibold'>Ingredients ({ingredients.length})</h2>
                        <ul className='list-disc list-inside text-sm text-gray-700'>
                            {ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='mt-4'>
                        <p>Preparation time: {preparing_time}</p>
                        <p>Calories: {calories}</p>
                    </div>
                    <button
    type="button" // Prevents form submission or page reload
    onClick={handleClick}
    className={`mt-4 ${
        isCooked ? 'bg-gray-500' : 'bg-[#597445]'
    } text-white px-4 py-2 rounded`}
    disabled={isCooked}
>
    {isCooked ? 'Already Selected' : 'Want to cook'}
</button>

                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Recipe;
