'use client';

import { useState } from "react";

interface Props {
    values?: number
}


export const CartComponents = ({values = 0}:Props) => {

    const [ conter, SetConter ] = useState(values)
    
  return (
    <>
      <span className="text-9xl">{conter}</span>

      <div className="flex">
        <button
          onClick={() => SetConter(conter + 1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>

        <button
          onClick={() => SetConter(conter - 1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>
      </div>
    </>
  );
}
