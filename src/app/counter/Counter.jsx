"use client"

import React from "react";


function Contador() {
    const [count , setCount] = React.useState(0);

    //function darclik()
    
    const darclik = () =>
    {
        setCount(count + 1);
    }
    return (
        <div>
            <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => darclik()}>{count}</button>
        </div>
    )
};

export default Contador;
