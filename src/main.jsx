import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routers/AppRoutes.jsx'
import { BrowserRouter } from 'react-router'
import { AuthProvider } from './context/AuthContext.jsx'
import  { ResearchDomainProvider } from './context/ResearchDomainContext.jsx'
import { ResearchProvider } from './context/ResearchContext.jsx'
import { ConferenceProvider } from './context/ConferenceContext.jsx'
import EducationContext, { EducationProvider } from './context/EducationContext.jsx'

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AuthProvider>
			<ResearchDomainProvider>
				<ResearchProvider>
					<ConferenceProvider>
						<EducationProvider>
							<BrowserRouter>
								<AppRoutes />
							</BrowserRouter>
						</EducationProvider>
					</ConferenceProvider>
				</ResearchProvider>
			</ResearchDomainProvider>
		</AuthProvider>
	</StrictMode>,
);
