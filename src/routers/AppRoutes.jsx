import React from 'react';
import { Route, Routes } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Research from '../pages/Research';
import Contact from '../pages/contact';
import Login from '../pages/Login';
import AddEducation from '../pages/AddEducation';
import PrivateRoute from './PrivateRoute';
import EducationImagesForm from '../components/education/addEducation/EducationImagesForm';
import AdminLayout from '../layouts/AdminLayout';
import UpdateEducation from '../pages/UpdateEducation';
import Conference from '../pages/Conference';
import AddResearch from '../pages/AddResearch';
import UpdateResearch from '../pages/UpdateResearch';
import AddConference from '../pages/AddConference';
import UpdateConference from '../pages/UpdateConference';
import PasswordChangeForm from '../pages/PasswordChangeForm';

const AppRoutes = () => {
    return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="research" element={<Research />} />
				<Route path="conference" element={<Conference />} />
				<Route path="contact" element={<Contact />} />
				<Route path="login" element={<Login />} />
			</Route>
			<Route
				element={
					<PrivateRoute>
						<AdminLayout />
					</PrivateRoute>
				}>
                <Route path="addEducation" element={<AddEducation />} />
                <Route path='addEducation/images/:educationId' element={<EducationImagesForm/>}/>
				<Route path='editEducation/:educationId' element={<UpdateEducation />} />
				<Route path='addResearch' element={<AddResearch />} />
				<Route path='editResearch/:researchId' element={<UpdateResearch/>}/>
				<Route path='addConference' element={<AddConference />} />
				<Route path='editConference/:conferenceId' element={<UpdateConference />} />
				<Route path='changePassword' element={<PasswordChangeForm />}/> 
			</Route>
		</Routes>
	);
};

export default AppRoutes;