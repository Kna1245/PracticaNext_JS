"use client"

import React from "react";


function Contador({multiplo = 1}) {
    const [count , setCount] = React.useState(0);

    //function darclik()
    
    const incrementar = () =>
    {
        setCount(count + multiplo);
    }
     const disminuir = () =>
    {
        setCount(count - multiplo);
    }
    return (
        <div>
            
                        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => disminuir()}>-</button>
            <h2>{count}</h2>
            <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => incrementar()}>+</button>
            

        </div>
    )
};

export default Contador;
