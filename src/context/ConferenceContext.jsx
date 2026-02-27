import React, { createContext } from 'react';
import useConference from '../hooks/useConference';

const ConferenceContext = createContext(); 

export const ConferenceProvider = ({ children }) => {
    const allContext = useConference(); 
    return <ConferenceContext.Provider value={allContext}>{children}</ConferenceContext.Provider>
}

export default ConferenceContext;