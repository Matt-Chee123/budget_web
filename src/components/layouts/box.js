import React from 'react';

function Box({children}) {
    return (
        <div className="h-full w-full bg-gray-800 rounded-lg">
            {children}
        </div>
    )
}

export default Box;