import { useForm } from 'react-hook-form';
import useEducationContext from '../hooks/useEducationContext';
import { useNavigate } from 'react-router';
import Beams from '../components/Home/Beams';
import EducationForm from '../components/education/addEducation/EducationForm';

const AddEducation = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { createEducation } = useEducationContext(); 
    const navigate = useNavigate(); 

    

    const handleAddEducation = async (data) => {
		try {
			const res = await createEducation(data)
			if (res) {
				navigate(`images/${res.educationId}`, { state: { sMsg: "New Degree Added Successfully!" } });
			}
		} catch (error) {
			console.log(error);
		}
	};




    return (
		<EducationForm
			handleAddEducation={handleAddEducation}
			handleSubmit={handleSubmit}
			errors={errors}
			register={register}
		/>
	);
};

export default AddEducation;