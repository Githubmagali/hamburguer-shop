"use client"
import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const hasNext = index < sculptureList.length - 1;

    function handleNextClick() {
        if (hasNext) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    return (
        <>
            <div className='flex items-center justify-center h-screen'>
                <div className='grid grid-cols-1'>
                    <button onClick={handleNextClick}>
                        Next
                    </button>
                  
                        <h1 >{sculpture.name} </h1>
                        <h2>by {sculpture.artist}</h2>
                  
                    <h3>
                        ({index + 1} of {sculptureList.length})
                    </h3> 
                       <button onClick={handleMoreClick} >
                       {showMore ? 'Hide' : 'Show'} details
                       </button>
                    {showMore && <p className='text-center w-56'>{sculpture.description}</p>}
                    <img
                        src={sculpture.url}
                        alt={sculpture.alt}
                        className='w-56 h-56'

                    />
                </div>
            </div>
        </>
    );
}