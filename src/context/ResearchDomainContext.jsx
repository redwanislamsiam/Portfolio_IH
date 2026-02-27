import  {createContext } from 'react';
import useResearchDomain from '../hooks/useResearchDomain';

const ResearchDomainContext = createContext(); 

export const ResearchDomainProvider = ({ children }) => {
    const allContext = useResearchDomain(); 
    return <ResearchDomainContext.Provider value={allContext}> {children}</ResearchDomainContext.Provider>
}

export default ResearchDomainContext;