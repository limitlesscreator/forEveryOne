import React, {useContext} from 'react';
import {ComponentB} from "./ComponentB";

//get the value ('win') in componentC by using useContext (without props)
const value = 'win'

export const DataContext = () => {

    return (
        <div>
            <ComponentB/>
        </div>
    );
};


