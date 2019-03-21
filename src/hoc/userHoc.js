import React from 'react';

const userHoc = (WrappedComponent, arg1) => {
    return (props) => (
        // use ... to pass props, to pass data in WrappedComponent
        <div>
            <WrappedComponent {...props}/>
            {arg1}
        </div>
    )
}

export default userHoc;