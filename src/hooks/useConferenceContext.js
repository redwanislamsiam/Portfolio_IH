import React, { useContext } from 'react';
import ConferenceContext from '../context/ConferenceContext';

const useConferenceContext = () => {
    return useContext(ConferenceContext)
};

export default useConferenceContext;