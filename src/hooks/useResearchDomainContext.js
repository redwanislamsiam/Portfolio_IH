import React, { useContext } from 'react';
import ResearchDomainContext from '../context/ResearchDomainContext';

const useResearchDomainContext = () => {
    return useContext(ResearchDomainContext)
};

export default useResearchDomainContext;