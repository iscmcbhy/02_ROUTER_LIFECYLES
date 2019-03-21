import React from 'react';

const Conditional = () => {

    const value = false;

    // const returnValue = () => {
    //     return false;
    // }

    return (
        <div>
            { value ? 
            <div>
                True
            </div> : 
            <div>
                False
            </div>
        }
        </div>
    )
}

export default Conditional;