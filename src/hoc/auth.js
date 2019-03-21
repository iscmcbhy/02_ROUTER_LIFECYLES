import React from 'react';

const Auth = (props) => {

    const pass = '123456';

    if(pass !== '123456'){
        return <h3> Authentication Failed </h3>
    } else {
        return props.children;
    }
}

export default Auth;