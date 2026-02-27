import React from 'react';

const LoadingSpinner = () => {
    return (
		<div className="flex justify-center items-center my-20 min-h-screen z-40">
			<span className="loading loading-spinner loading-xl  text-[#b09641]"></span>
		</div>
	);
};

export default LoadingSpinner;