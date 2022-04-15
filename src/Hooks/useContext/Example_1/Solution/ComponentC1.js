import React, {useContext} from 'react';
import {UserContext} from "./DataContext1";

export const ComponentC1 = () => {
    const ourValue = useContext(UserContext)
    return (
        <div>
            test: {ourValue}
        </div>
    );
};
