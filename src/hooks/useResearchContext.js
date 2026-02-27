import React, { useContext } from 'react';
import ResearchContext from '../context/ResearchContext';

const useResearchContext = () => {
    return useContext(ResearchContext);
};

export default useResearchContext;