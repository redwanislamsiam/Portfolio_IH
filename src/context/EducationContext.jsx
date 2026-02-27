import React, { createContext } from 'react';
import useEducation from '../hooks/useEducation';

const EducationContext = createContext(); 

export const EducationProvider = ({ children }) => {
    const allContext = useEducation(); 
    return <EducationContext.Provider value={allContext}>{children}</EducationContext.Provider>
}

export default EducationContext;