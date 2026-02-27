import React, { useContext } from 'react';
import EducationContext from '../context/EducationContext';

const useEducationContext = () => {
    return useContext(EducationContext)
};

export default useEducationContext;