import {  createContext } from 'react';
import useResearch from '../hooks/useResearch';

const ResearchContext = createContext(); 

export const ResearchProvider = ({ children }) => {
    const allContext = useResearch(); 
    return <ResearchContext.Provider value={allContext}> {children}</ResearchContext.Provider>
}

export default ResearchContext;