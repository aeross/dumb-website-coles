"use client"
import React, { useState } from 'react'

function CarouselComponent({ images }: { images: string[] | undefined }) {
    if (!images) {
        return (<>
            <div>
                <img 
                    src="-"
                    alt="product image"
                    className="h-[300px] w-full object-cover rounded-xl"
                />
            </div>
        </>);
    }

    const [i, setI] = useState(0);
    const end = images.length;
    return (<>
        <div className="flex mx-3">
            <button 
                onClick={ () => {
                    let newI = i - 1;
                    if (newI < 0) {
                        newI = end - 1;
                    }
                    setI(newI) 
                } }
                className="text-bold text-2xl pr-2 hover:text-red-700"
            >
                &lt;
            </button>
            <img 
                src={images[i]} 
                alt="product image"
                className="h-[300px] w-[100%] object-cover rounded-xl"
            />
            <button 
                onClick={ () => {
                    let newI = i + 1;
                    if (newI >= end) {
                        newI = 0;
                    }
                    setI(newI) 
                } }
                className="text-bold text-2xl pl-2 hover:text-red-700"
            >
                &gt;
            </button>
        </div>
    </>)
}

export default CarouselComponent