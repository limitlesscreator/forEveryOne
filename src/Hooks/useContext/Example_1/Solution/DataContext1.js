import React, {createContext} from 'react';
import {ComponentB1} from "./ComponentB1";


const value = 'win'
export const UserContext = createContext('')

export const DataContext1 = () => {
    return (
        <UserContext.Provider value={value}>
                <ComponentB1/>
        </UserContext.Provider>
    );
};
