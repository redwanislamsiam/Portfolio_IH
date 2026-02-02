import React from 'react';
import InterNationalConferenceCard from './InterNationalConferenceCard';

const InterNationalConferencesData = () => {
    const confData =[
          {
            "conference_name": "BLM2-ICAM4",
            "full_title": "International Joint E-Conference",
            "organizers": [
              "Taylor's University",
              "University of Kelaniya"
            ],
            "date": "2021-09-11",
            "year": 2021,
            "type": "E-Conference"
          },
          {
            "conference_name": "MFAIC2022",
            "full_title": "24th Malaysian Finance Association International Conference",
            "organizers": [
              "Malaysian Finance Association",
              "University Malaysia Sabah"
            ],
            "date": "2022-09-09",
            "year": 2022,
            "type": "International Conference"
          },
          {
            "conference_name": "INPOS 2022",
            "full_title": "International Postgraduate Research Symposium 2022",
            "organizers": [
              "School of Management, Universiti Sains Malaysia"
            ],
            "date": "2022-10-25 to 2022-10-27",
            "year": 2022,
            "type": "Research Symposium"
          },
          {
            "conference_name": "ICPC-EB 2023",
            "full_title": "7th International Conference and PhD Colloquium for Economics and Business",
            "organizers": [
              "Faculty of Economics and Business, Universitas Airlangga"
            ],
            "location": "Surabaya, Indonesia",
            "date": "2023-10-04 to 2023-10-05",
            "year": 2023,
            "type": "International Conference & PhD Colloquium"
          },
          {
            "conference_name": "INPOS 2023",
            "full_title": "International Postgraduate Research Symposium 2023",
            "organizers": [
              "School of Management, Universiti Sains Malaysia"
            ],
            "date": "2023-10-26 to 2023-10-27",
            "year": 2023,
            "type": "Research Symposium"
          }
        ]
      
    return (
		<div className='mb-20'>
			<h1 className="text-white text-center text-2xl md:text-5xl mt-15 my-10 md:my-20 font-bold">
				International Conferences
			</h1>
			<div className="grid grid-cols-1 lg:grid-cols-2">
				{confData.map((data, index) => (
					<InterNationalConferenceCard key={index} data={data} />
				))}
			</div>
		</div>
	);
};

export default InterNationalConferencesData;