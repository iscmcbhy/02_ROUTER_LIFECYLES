import React from 'react';

import UserHoc from '../hoc/userHoc';


// Can be use for template, most used in Redux

// You can create Another component and pass it to UserHoc for multiple args
const User = (props) => {

    console.log(props);

    return (
        <div>
            User 1
        </div>
    )
}

export default UserHoc(User , 'Hello');