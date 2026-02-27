import React from 'react';

const FilteringSection = ({
	handleSearchQuery,
	searchQuery,
	sortOrder,
	handleSorting,
}) => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-5 bg-gradient-to-br scale-90 lg:scale-100 from-[#2c251b] to-[#896c23] rounded-xl">
			{/* SEARCH BAR */}
			<div className="col-span-4 p-4 rounded-lg shadow flex justify-between items-center mx-5 lg:mx-0 gap-10">
				<div className="w-full flex items-center gap-2 my-auto">
					<p className="text-xs lg:text-lg mt-2 font-medium text-white/80 mb-2 text-center"> Search</p>
					<input
						type="text"
						value={searchQuery}
						onChange={(e) => handleSearchQuery(e.target.value)}
						placeholder="Search..."
						className="focus:ring-1 focus:ring-[#74adcc] focus:outline-none text-white/80 focus:border-[#74adcc] w-full text-xs lg:text-lg p-2 border rounded-md"
					/>
				</div>
			</div>

			{/* SORTING */}
			<div className=" p-4 rounded-lg text-white shadow items-center mx-5 lg:mx-0 gap-10 text-xs lg:text-sm">
				<select
					value={sortOrder}
					onChange={(e) => handleSorting(e.target.value)}
					name=""
					className="w-full p-2 border rounded-md focus:ring-1 focus:ring-[#3cb2f1] focus:outline-none focus:border-[#3cb2f1]"
					id="">
					<option value="">Sort</option>
					<option value="date" className="text-black">
						Date: Ascending
					</option>
					<option value="-date" className="text-black">
						Date: Descending
					</option>
				</select>
			</div>
		</div>
	);
};

export default FilteringSection;